import React from 'react'
import Container from '@mui/material/Container';
import useStyles from '../Styles/ItemStyle';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ItemDetails from '../Components/ItemDetails'
import { useState } from 'react';
import TasteChart from '../Components/TasteChart';

export default function ItemPage(props) {
    const classes = useStyles();
    const { state } = useLocation();
    const [amount, setAmount] = useState(0)

    let item = state
    let { brand, name, region, index, price, abv, img, description } = item;
  
    const addToCart = () => {
        if (amount > 0) {
            props.addToCart(index, amount)
        }
    }
    return (
        <Container className={classes.container} maxWidth={"md"}>
            <img src={img} alt={name} />
            <div className={classes.itemHeadline}>
                <Typography variant='h3'>{brand} {name}</Typography>
                <Typography variant='p'>{abv} abv / {region}</Typography>
                <Typography variant='h5'>{price}$</Typography>
            </div>
            <div className={classes.buyInfo}>
                <Typography variant='h5'>Quantity</Typography>
                <TextField onChange={(e) => setAmount(Number(e.target.value))} variant='outlined' type='number' defaultValue={0} inputProps={{ min: 0 }} > </TextField>
                <Button onClick={addToCart} variant='contained'>Add To Cart</Button>
                <Typography variant='small'>Free delivery when you spend £99.00</Typography>
                <hr />
                <div>
                    <LocalShippingIcon />
                    <Typography variant='small'>In stock for delivery</Typography>
                </div>
            </div>
            <div className={classes.description}>
                <Typography variant='h4'>{brand} {name} Description</Typography>
                <Typography variant='p'>{description}</Typography>


            </div>
            <ItemDetails item={item} />
            <div className={classes.tasteChart}>
            <Typography variant='h4' sx={{borderBottom:'1px solid #ccc'}}>{brand} {name} Taste Chart</Typography>
                <TasteChart item={item} />
            </div>
        </Container>
    )
}
