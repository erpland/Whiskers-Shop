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
  let {order} = props
  let items = order.Items

  let qtySum=items.reduce((prev, current) => { return prev + current.Qty },0)//סכימת כמות מוצרים בהזמנה
  let priceSum=items.reduce((prev, current) => { return (prev + (current.Price * current.Qty) ) },0) // סכימת מחיר כולל בהזמנה

  let orderProduct = items.map((product,index)=>           
  <div key={index} className={classes.product}>
    <p >{product.BrandName} {product.Bottle_Name}</p>
    <p >{product.Qty}</p>
    <p >{product.Price}$</p>
    <img src={product.Image} alt="product" />
  </div>)
  

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography variant='h5'>{order.DateTime.slice(0,-9)}</Typography>
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
