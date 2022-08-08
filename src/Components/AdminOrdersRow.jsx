import React from 'react'
import useStyles from '../Styles/AdminStyle';
import Button from '@mui/material/Button';
export default function AdminOrdersRow(props) {
  const classes = useStyles();

  
  let {firstName,lastName,order} = props
  let items = order.Items

  const userClick = (order) => {
    props.setData(order)
    props.setOpen(true)
}
  let orders = (<div className={classes.orderRow} >
      <p>{firstName}</p>
      {<p>{order.DateTime.slice(0,-9)}</p>}
      <p>{items.reduce((prev, current) => { return prev + current.Qty }, 0)}</p>
      <p>{items.reduce((prev, current,i) => { return (prev + (current.Price * current.Qty)) }, 0).toFixed(2)}$</p>
      <Button onClick={() => userClick({order,firstName,lastName})}>Show More</Button>
    </div>)
  
  return (
    <div style={{display:'grid'}}>
      {orders}
    </div>
  )
}
