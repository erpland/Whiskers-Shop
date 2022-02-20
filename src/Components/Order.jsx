import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import useStyles from '../Styles/ProfileStyle';

export default function Order(props) {
  const classes = useStyles();
  let {order,orderInfo} = props

  let qtySum=order.reduce((prev, current) => { return prev + current.qty },0)//סכימת כמות מוצרים בהזמנה
  let priceSum=order.reduce((prev, current) => { return (prev + current.price) * current.qty },0) // סכימת מחיר כולל בהזמנה
  
  let orderProduct = order.map((product,index)=>           
  <div key={index} className={classes.product}>
    <p >{product.brand} {product.name}</p>
    <p >{product.qty}</p>
    <p >{product.price}$</p>
    <img src={product.img} alt="product" />
  </div>)
  

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography variant='h5'>{orderInfo.date}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.orderAccordion}>
        <div className={classes.orderDetails}>
          <div className={classes.product}>
            <p style={{ fontWeight: 'bold' }}>Item</p>
            <p style={{ fontWeight: 'bold' }}>QTY</p>
            <p style={{ fontWeight: 'bold' }}>Price</p>
          </div>

          {orderProduct}


          <div className={classes.product}>
            <p><b>TOTAL:</b></p>
            <p>{qtySum}</p>
            <p>{priceSum.toFixed(2)}$</p>
            <div className={classes.shipped}>
              <LocalShippingIcon color='success' sx={{ fontSize: '40px' }} />
              <Typography color='success' variant='p'>Order Shipped</Typography>
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
