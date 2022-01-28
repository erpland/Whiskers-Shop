import React from 'react'
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import useStyles from '../styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import ModalComp from './ModalComp';

export default function Navbar(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const navUrls = ['Home', 'Shop', 'Login', 'Register']
    const navItems = navUrls.map(item => <Grid key={item} item  style={{paddingRight:10}}>
        <Link underline='none' to={'/' + item}>{item}</Link>
    </Grid>)
 
    return (

        <AppBar color='' position='static'>
            <CssBaseline />
            <Toolbar>
                <Typography variant='h4'>Whiksers</Typography>
                <Grid container direction='row' alignItems='center' justifyContent='flex-end' spacing={1}>

                    {navItems}

                    <Grid item md={1}>
                        <ShoppingCartIcon style={{cursor:'pointer'}} onClick={()=>setOpen(true)} />
                    </Grid>

                </Grid>
                <ModalComp isLoggedIn={props.isLoggedIn} buyCart={props.buyCart} totalQty={props.totalQty} totalPrice={props.totalPrice} removeItemFromCart={props.removeItemFromCart} cart={props.cart} open = {open} setOpen={setOpen} />
            </Toolbar>
        </AppBar>
    )
}