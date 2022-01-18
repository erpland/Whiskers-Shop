import React from 'react'
import useStyles from '../Styles/ShopStyle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ProductCard(props) {

  const classes = useStyles();
  const {img,brand,name,price,index} = props.product
  return (
    <div className={classes.ProductCard}>
      <img src={img} alt={name} />
      <div className={classes.ProductInfo}>
        <Typography sx={{fontSize:16,fontWeight:'bold'}} variant='p'>{brand} {name}</Typography>
        <Typography sx={{fontWeight:'light'}} variant='p'>{price}$</Typography>
        <Button variant='contained' onClick={()=>props.AddToCart(index)}>Buy</Button>
      </div>
    </div>
  )
}
