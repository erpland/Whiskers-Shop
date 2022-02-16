import useStyles from '../Styles/AdminStyle';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useState } from 'react';
import SalesChart from '../Components/SalesChart';
import AdminOrderRow from '../Components/AdminOrdersRow'
import AdminModal from '../Components/AdminModal';
import AddProduct from '../Components/AddProduct';
import Button from '@mui/material/Button'
import AdminProductList from '../Components/AdminProductList';
import AdminUsers from '../Components/AdminUsers';
import { useNavigate } from 'react-router-dom';


export default function Admin(props) {
  const navigate = useNavigate();
  const classes = useStyles(props);
  let { products, users } = props
  const [open, setOpen] = useState(false);
  const [data, setData] = useState()
  const [orderInfo, setOrderInfo] = useState()

  let totalOrdersAmount = users.map(user => user.orders.length).reduce((prev, current) => { return prev + current }, 0)
  let allOrders = users.map(user => user.orders).flat()
  let allOrdersDates = users.map(user => user.ordersInfo).flat()
  let totalProfits = allOrdersDates.reduce((a, b) => { return a + b.totalPrice }, 0).toFixed(2)


  let userOrderList = users.map((user, index) => <AdminOrderRow key={index} user={user}
    setData={(data) => setData(data)} setOpen={(open) => setOpen(open)} setOrderInfo={(info) => setOrderInfo(info)} />)

  const logOutAdmin=()=>{
    props.setIsAdmin(false)
    localStorage.setItem('isAdmin',false)
    navigate('/')
  }
  return (
    <div style={{ backgroundColor: '#F1F2F6',paddingBottom:80, }}>

      <Container maxWidth="xl">
        <div className={classes.container}>
          <div className={classes.headline}>
            <Typography borderBottom={'1px solid #ccc'} align={'left'} sx={{width:'90%'}} variant="h4" color="initial">Dashboard</Typography>
            <Button sx={{ height: 50, }} color="error" variant='contained' onClick={logOutAdmin}>Logout</Button>

          </div>
          <div className={classes.basicsContainer}>
            <div className={classes.basicsBox}>
              <Typography variant="h4" color="initial">Orders</Typography>

              <div className={classes.basicsBoxText} >
                <Typography variant="h3" color="initial">{totalOrdersAmount}</Typography>
                <Typography variant="p" color="initial">Total Orders</Typography>
              </div>
            </div>
            <div className={classes.basicsBox}>
              <Typography variant="h4" color="initial">Users</Typography>

              <div className={classes.basicsBoxText} >
                <Typography variant="h3" color="initial">{users.length}</Typography>
                <Typography variant="p" color="initial">Total Users</Typography>
              </div>
            </div>
            <div className={classes.basicsBox}>
              <Typography variant="h4" color="initial">Profits</Typography>

              <div className={classes.basicsBoxText} >
                <Typography variant="h3" color="initial">{totalProfits}</Typography>
                <Typography variant="p" color="initial">Total Profits</Typography>
              </div>
            </div>
          </div>

          <div className={classes.statsContainer}>
            <div className={classes.statsLeft}>
              <div className={classes.statsOrders}>
                <Typography variant="h5" align='left' fontWeight={'bold'} borderBottom={'1px solid #ccc'} padding={1} color="initial">Orders</Typography>
                <div style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 10 }} className={classes.orderRow}>
                  <p><b>Name</b></p>
                  <p><b>Date</b></p>
                  <p><b>Qty</b></p>
                  <p><b>Total</b></p>
                  <p><b>More</b></p>
                </div>
                <div className={classes.orderTable}>
                  {userOrderList}
                </div>

              </div>

            </div>
            <div className={classes.statsRight}>
              <div className={classes.rightGraphWrapper}>
                <Typography variant="h5" align='left' fontWeight={'bold'} borderBottom={'1px solid #ccc'} padding={1} color="initial">Last 7 Days Profit</Typography>
                <div className={classes.rightGraph}>
                  <SalesChart orders={allOrders} dates={allOrdersDates} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.usersContainer}>
            <AdminUsers deleteUser={props.deleteUser} setOpen={setOpen} setData={setData} users={users} orderInfo={orderInfo} setOrderInfo={setOrderInfo} />
          </div>

          <div className={classes.productsContainer}>
            <AdminProductList products={products} deleteProduct={props.deleteProduct} updateProductPrice={props.updateProductPrice} />
            <AddProduct addProduct={props.addProduct} products={products} />

          </div>


        </div>
      </Container>
      {data && <AdminModal open={open} setOpen={setOpen} data={data} orderInfo={orderInfo} />}
    </div>
  );
}


