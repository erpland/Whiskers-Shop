import React from 'react'
import useStyles from '../Styles/AdminStyle';
import Button from '@mui/material/Button';
export default function AdminUsers(props) {
    let users=props.users
    const classes = useStyles();
    console.log(users)
    const userClick = (user) => {
        props.setData(user.orders)
        props.setOrderInfo(user.ordersInfo)
        props.setOpen(true)
    }
  
    let userRow = users.map((user, index) =>
    <div key={index} className={`${classes.userRow} ${classes.userRowGrid}`}>
        <p><span onClick={()=>props.deleteUser(index)}>X</span></p>
        <p>{user.email}</p>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.orders.length}</p>
        <p>{user.orders.map(a=>a.reduce((p, c)=>{return p + c.price * c.qty},0)).reduce((a,b)=>{return a+b},0).toFixed(2)}</p>
        <Button onClick={() => userClick(user)}>Show More</Button>
    </div>)




  return (
    <div className={classes.usersList}>
    <h2>Users</h2>
    <div className={classes.usersTable}>
        <div className={classes.userRow}>
            <p></p>
            <p><b>Email</b></p>
            <p><b>First Name</b></p>
            <p><b>Last Name</b></p>
            <p><b>Orders Amount</b></p>
            <p><b>Total Spent</b></p>
            <p><b>View Orders</b></p>
        </div>
        {userRow}
    </div>
</div>
  )
}
