import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import useStyles from '../styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import Cart from './Cart';

export default function Navbar(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (

        <AppBar color='' position='static'>
            <CssBaseline />
            <Toolbar>
                <Typography variant='h4'>Whiksers</Typography>
                <Grid container direction='row' alignItems='center' justifyContent='flex-end' spacing={1}>

                    <Grid item style={{ paddingRight: 10 }}>
                        <Link underline='none' to={'/home'}>{'Home'}</Link>
                    </Grid>
                    <Grid item style={{ paddingRight: 10 }}>
                        <Link underline='none' to={'/shop'}>{'Shop'}</Link>
                    </Grid>
                    {!props.isLoggedIn && <Grid item style={{ paddingRight: 10 }}>
                        <Link underline='none' to={'/login'}>{'Login'}</Link>
                    </Grid>}
                    {!props.isLoggedIn && <Grid item style={{ paddingRight: 10 }}>
                        <Link underline='none' to={'/register'}>{'Register'}</Link>
                    </Grid>}
                    {props.isLoggedIn && <Grid item style={{ paddingRight: 10 }}>
                        <Link underline='none' to={'/profile'}>{'Profile'}</Link>
                    </Grid>}
                    {props.isLoggedIn && <Grid item style={{ paddingRight: 10 }}>
                        <Link onClick={props.logOut} underline='none' to={'/Home'}>{'Logout'}</Link>
                    </Grid>}
                    

                    <Grid item md={1}>
                        <ShoppingCartIcon style={{ cursor: 'pointer' }} onClick={() => setOpen(true)} />
                    </Grid>

                </Grid>
                <Cart isLoggedIn={props.isLoggedIn} buyCart={props.buyCart} totalQty={props.totalQty} totalPrice={props.totalPrice} removeItemFromCart={props.removeItemFromCart} cart={props.cart} open={open} setOpen={setOpen} />
            </Toolbar>
        </AppBar>
    )
}