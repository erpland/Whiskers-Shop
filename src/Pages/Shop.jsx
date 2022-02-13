import React, { useEffect, useRef, useState } from 'react'
import ProductsDb from '../JSON/default-data'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import ProductCard from '../Components/ProductCard';
import useStyles from '../Styles/ShopStyle';
import ShopHeader from '../Components/ShopHeader'
import SortAndFilter from '../Components/SortAndFilter';

export default function Shop(props) {
    let productsList = props.products
    const [count, setCount] = useState(0)
    const [sortedProducts, setSortedProducts] = useState(productsList)
    const timeout = useRef(null);

    const productsCard = sortedProducts.map(prod => <Grid key={prod.index} xs={12} sm={6} md={4} item><ProductCard product={prod} addToCart={props.addToCart} /></Grid>)

    useEffect(() => {
        resetTimeout();
        timeout.current = setTimeout(() =>
            setCount((prevCount) => prevCount === productsList.length - 1 ? 0 : prevCount + 1
            ), 6000
        )
        return () => {
            resetTimeout();
        }
    }, [count])

    const resetTimeout = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
    }
    


    return (
        <div>

            <ShopHeader count={count} setCount={(id) => setCount(id)} length product={productsList[count]} />

            <Container maxWidth='xl' sx={{ marginTop: 5 }}>
                <SortAndFilter products={sortedProducts} originalProducts={props.products} setSortedProducts={(products)=>setSortedProducts(products)}/>
                <Grid container spacing={4}>
                    {productsCard}
                </Grid>
            </Container>


        </div>
    )
}
