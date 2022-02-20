import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useStyles from '../Styles/CartStyle.js';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  minHeight: '500px',
  p: 2,
};

export default function Cart(props) {
  const navigate = useNavigate();
  let { open, setOpen, cart, totalQty, totalPrice, buyCart, isLoggedIn } = props
  const handleClose = () => setOpen(false);
  const order = () => {
    if (isLoggedIn){
      cart.length !== 0 && buyCart()
      setOpen(false)
    }
    else {
      setOpen(false)
      navigate('/login')
    }

  }

  const classes = useStyles();

  let cartItems = cart.map(prod => <div key={prod.index} className={classes.product}>
    <p onClick={() => props.removeItemFromCart(prod.index)}>X</p>
    <p>{prod.brand} {prod.name}</p>
    <p>{prod.qty}</p>
    <p>{prod.price.toFixed(2)}$</p>
  </div>)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.cartContainer}>
            <div className={classes.cartHeadline}>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                Your Cart
              </Typography>
              <span onClick={handleClose} className={classes.closeBtn}>X</span>

            </div>
            <div className={classes.cartItems}>
              
              <p style={{ fontWeight: 'bold' }}>Item</p>
              <p style={{ fontWeight: 'bold' }}>QTY</p>
              <p style={{ fontWeight: 'bold' }}>Price</p>

              {cartItems}

            </div>

            <div className={classes.cartTotal}>
              
              <p>TOTAL:</p>
              <b></b>
              <p>{totalQty}</p>
              <p>{totalPrice.toFixed(2)}$</p>
            </div>
            <div className={classes.cartBtns}>
              <Button onClick={order} variant="contained">Buy All</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div >
  );
}

