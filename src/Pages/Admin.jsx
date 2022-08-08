import useStyles from "../Styles/AdminStyle";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import SalesChart from "../Components/SalesChart";
import AdminOrderRow from "../Components/AdminOrdersRow";
import AdminModal from "../Components/AdminModal";
import AddProduct from "../Components/AddProduct";
import Button from "@mui/material/Button";
import AdminProductList from "../Components/AdminProductList";
import AdminUsers from "../Components/AdminUsers";
import { useNavigate } from "react-router-dom";
import AdminHeaders from "../Components/AdminHeaders";
import { useEffect } from "react";

import {
  getAllUsers,

} from "../Data/database";

export default function Admin(props) {
  const classes = useStyles(props);
  const navigate = useNavigate();
  let { products } = props;
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false); // פתיחה/סגירה של מודל הזמנות
  const [data, setData] = useState();
  const [totalOrdersAmount, setTotalOrdersAmount] = useState(0);
  const [totalProfits, setTotalProfits] = useState(0);
  useEffect(() => {
    const getData = async () => {
      setUsers(await getAllUsers());
    };
    getData();
  }, []);

  useEffect(() => {
    if (users.length !== 0) {
      let totalOrders = users
        .map((user) => user.UserOrders.length)
        .reduce((prev, current) => {
          return prev + current;
        }, 0);

      let totalProfits = users
        .map((user) => user.UserTotalSpent)
        .reduce((a, b) => {
          return a + b;
        }, 0)
        .toFixed(2);

      setTotalOrdersAmount(totalOrders);
      setTotalProfits(totalProfits);
    }
  }, [users]);


  let allOrdersDates = users
    .map((user) =>
      user.UserOrders.map((order) => ({
        date: order.DateTime,
        totalPrice: order.Items.reduce((a, b) => {
          return a + b.Price;
        }, 0),
      }))
    )
    .flat();

  let userOrderList = users.map((user, index) =>
    user.UserOrders.map((order, i) => (
      <AdminOrderRow
        key={index + i}
        firstName={user.UserFirstName}
        lastName={user.UserLastName}
        order={order}
        setData={(data) => setData(data)}
        setOpen={(open) => setOpen(open)}
      />
    ))
  );

  const logOutAdmin = () => {
    // התנתקות האדמין
    props.setIsAdmin(false);
    localStorage.setItem("isAdmin", false);
    navigate("/");
  };
  return (
    <div style={{ backgroundColor: "#F1F2F6", paddingBottom: 80 }}>
      <Container maxWidth="xl">
        <div className={classes.container}>
          <div className={classes.headline}>
            <Typography
              borderBottom={"1px solid #ccc"}
              align={"left"}
              sx={{ width: "90%" }}
              variant="h4"
              color="initial"
            >
              Dashboard
            </Typography>
            <Button
              sx={{ height: 50 }}
              color="error"
              variant="contained"
              onClick={logOutAdmin}
            >
              Logout
            </Button>
          </div>

          <div className={classes.basicsContainer}>
            <AdminHeaders
              headline={"Orders"}
              data={totalOrdersAmount}
              text={"Total Orders"}
            />
            <AdminHeaders
              headline={"Users"}
              data={users.length}
              text={"Total Users"}
            />
            <AdminHeaders
              headline={"Profits"}
              data={totalProfits}
              text={"Total Profits"}
            />
          </div>

          <div className={classes.statsContainer}>
            <div className={classes.statsLeft}>
              <div className={classes.statsOrders}>
                <Typography
                  variant="h5"
                  align="left"
                  fontWeight={"bold"}
                  borderBottom={"1px solid #ccc"}
                  padding={1}
                  color="initial"
                >
                  Orders
                </Typography>
                <div
                  style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    marginTop: 10,
                  }}
                  className={classes.orderRow}
                >
                  <p>
                    <b>Name</b>
                  </p>
                  <p>
                    <b>Date</b>
                  </p>
                  <p>
                    <b>Qty</b>
                  </p>
                  <p>
                    <b>Total</b>
                  </p>
                  <p>
                    <b>More</b>
                  </p>
                </div>
                <div className={classes.orderTable}>{userOrderList}</div>
              </div>
            </div>

            <div className={classes.statsRight}>
              <div className={classes.rightGraphWrapper}>
                <Typography
                  variant="h5"
                  align="left"
                  fontWeight={"bold"}
                  borderBottom={"1px solid #ccc"}
                  padding={1}
                  color="initial"
                >
                  Last 7 Days Profit
                </Typography>
                <div className={classes.rightGraph}>
                  <SalesChart dates={allOrdersDates} />
                </div>
              </div>
            </div>
          </div>

          <div className={classes.usersContainer}>
            <AdminUsers
              deleteUser={props.deleteUser}
              setOpen={setOpen}
              setData={setData}
              users={users}
            />
          </div>

          <div className={classes.productsContainer}>
            <AdminProductList
              products={products}
              updateProductPrice={props.updateProductPrice}
            />
            <AddProduct
              addProduct={props.addProduct}
              products={products}
              setProducts = {props.setProducts}
              setBottomAlert={props.setBottomAlert}
            />
          </div>
        </div>
      </Container>
      {data && (
        <AdminModal
          open={open}
          setOpen={setOpen}
          data={data}
        />
      )}
    </div>
  );
}
