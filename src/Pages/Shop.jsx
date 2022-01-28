import React, { useState } from 'react'
import ProductsDb from '../JSON/default-data'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import ProductCard from '../Components/ProductCard';
import useStyles from '../Styles/ShopStyle';

export default function Shop(props) {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || []

    // const AddToCart = (index) => {
    //     let product = productsList.filter(prod => index === prod.index)
    //     product = product[0]
    //     let cartIndex = cartProducts.findIndex(prod => index === prod.index)
    //     if (cartIndex !== -1)
    //         cartProducts[cartIndex].qty++
    //     else {
    //         product.qty++
    //         cartProducts = [...cartProducts, product]
    //     }
    //     localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    // }
    let productsList = props.products
    
    const productsCard = productsList.map(prod => <Grid key={prod.index} xs={12} sm={6} md={4} item><ProductCard product={prod} addToCart={props.addToCart}  /></Grid>)

    return (
        <div>
            <div style={{ marginTop: 10, minHeight: '500px', backgroundColor: '#ccc' }} className='header'>
            </div>

            <Container maxWidth='xl' sx={{ marginTop: 5 }}>
                <Grid container spacing={4}>
                    {productsCard}
                </Grid>
            </Container>


        </div>
    )
}
