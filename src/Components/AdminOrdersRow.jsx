import React, { useState } from 'react'
import useStyles from '../Styles/AdminStyle';
import Button from '@mui/material/Button';
export default function AdminOrdersRow(props) {
  const classes = useStyles();

  
  let user = props.user
  const userClick = (order,orderInfo) => {
    props.setData(order)
    props.setOrderInfo(orderInfo)
    props.setOpen(true)
}
  let orders = user.orders.map((order,index) =>
    <div key={index} className={classes.orderRow} >
      <p>{user.firstName}</p>
      {<p>{user.ordersInfo[index].date}</p>}
      <p>{order.reduce((prev, current) => { return prev + current.qty }, 0)}</p>
      <p>{order.reduce((prev, current) => { return (prev + current.price) * current.qty }, 0).toFixed(2)}$</p>
      <Button onClick={() => userClick(order,user.ordersInfo[index])}>Show More</Button>
    </div>)
  
  return (
    <div style={{display:'grid'}}>
      {orders}
    </div>
  )
}
