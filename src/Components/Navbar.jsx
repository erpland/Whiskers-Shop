import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import useStyles from '../Styles/NavbarStyle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import Cart from './Cart';

export default function Navbar(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  //מתבצעת בדיקה האם המשתמש קיים משתמש מחובר או לא, הצגה של התחברות/התנקות בהתאם
  return (
    <AppBar color='' position='static'>
      <CssBaseline />
      <Toolbar>
        <Typography variant='h4'>Whiskers</Typography>
        <Grid container direction='row' alignItems='center' justifyContent='flex-end' spacing={1}>

       
          <Grid item style={{ paddingRight: 20 }}>
            <Link underline='none' to={'/'}>{'Shop'}</Link>
          </Grid>
          {!props.isLoggedIn && <Grid item style={{ paddingRight: 20 }}>
            <Link underline='none' to={'/login'}>{'Login'}</Link>
          </Grid>}
          {!props.isLoggedIn && <Grid item style={{ paddingRight: 20 }}>
            <Link underline='none' to={'/register'}>{'Register'}</Link>
          </Grid>}
          {props.isLoggedIn && <Grid item style={{ paddingRight: 20 }}>
            <Link underline='none' to={'/profile'}>{'Profile'}</Link>
          </Grid>}
          {props.isLoggedIn && <Grid item style={{ paddingRight: 20 }}>
            <Link onClick={props.logOut} underline='none' to={'/'}>{'Logout'}</Link>
          </Grid>}


          <Grid item md={1}>
            <div className={classes.cartIcon}>
              <ShoppingCartIcon style={{ cursor: 'pointer', color:'#3f50b5'}}  onClick={() => setOpen(true)} />
              <small>{props.totalQty}</small>
            </div>
          </Grid>

        </Grid>
        <Cart isLoggedIn={props.isLoggedIn} buyCart={props.buyCart} totalQty={props.totalQty} totalPrice={props.totalPrice} removeItemFromCart={props.removeItemFromCart} cart={props.cart} open={open} setOpen={setOpen} />
      </Toolbar>
    </AppBar>
  )
}