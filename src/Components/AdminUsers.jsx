import React from "react";
import useStyles from "../Styles/AdminStyle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function AdminUsers(props) {
  const classes = useStyles();
  let users = props.users;

  const userClick = (user) => {
    props.setData({
      firstName: user.UserFirstName,
      lastName: user.UserFirstName,
      orders: user.UserOrders,
    });
    props.setOpen(true);
  };
  
  let userRow = users.map((user, index) => (
    <div key={index} className={`${classes.userRow} ${classes.userRowGrid}`}>
      <p>
        
      </p>
      <p>{user.UserEmail}</p>
      <p>{user.UserFirstName}</p>
      <p>{user.UserLastName}</p>

      <p>{user.UserTotalItemsPurchased}</p>
      <p>{user.UserTotalSpent.toFixed(2)}$</p>
      <Button onClick={() => userClick(user)}>Show More</Button>
    </div>
  ));

  return (
    <div className={classes.usersList}>
      <Typography
        variant="h5"
        align="left"
        fontWeight={"bold"}
        borderBottom={"1px solid #ccc"}
        padding={1}
        color="initial"
      >
        Users
      </Typography>
      <div className={classes.usersTable}>
        <div className={classes.userRow}>
          <p></p>
          <p>
            <b>Email</b>
          </p>
          <p>
            <b>First Name</b>
          </p>
          <p>
            <b>Last Name</b>
          </p>
          <p>
            <b>Total Items</b>
          </p>
          <p>
            <b>Total Spent</b>
          </p>
          <p>
            <b>View Orders</b>
          </p>
        </div>
        {userRow}
      </div>
    </div>
  );
}
