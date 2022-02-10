import React, { useState } from 'react'
import Container from '@mui/material/Container';
import useStyles from '../Styles/ShopStyle';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { width } from '@mui/system';
import { useNavigate } from 'react-router-dom';
export default function ShopHeader(props) {
  const navigate = useNavigate();
  const classes = useStyles();
  let { brand, name, img, price } = props.product
  return (
    <Container className={classes.shopHeader} maxWidth='100%' >

      <div className={classes.headerContainer}>

        <div className={classes.headerImg}>
          <img src={img} alt="product" onClick={() => navigate('/item', { state: props.product })} />
        </div>

        <div className={classes.headerCenter}>
          <span className={classes.verticalLine}></span>
        </div>

        <div className={classes.headerRight}>

          <div className={classes.headerText}>
            <Typography sx={{ fontWeight: 'bold', }} variant='h2'>{brand}</Typography>
            <Typography sx={{ fontWeight: 'light', }} variant='h3'>{name}</Typography>
              <div className={classes.shape}></div>
              <Typography sx={{ fontWeight: 'light' }} variant='h5'>{price}$</Typography>
          </div>
        </div>

        <div className={classes.btnContainer}>
          <span onClick={() => props.setCount(0)} style={props.count===0?{backgroundColor:'black'}:{}} className={classes.carouselBtn}></span>
          <span onClick={() => props.setCount(1)} className={classes.carouselBtn}></span>
          <span onClick={() => props.setCount(2)} className={classes.carouselBtn}></span>
          <span onClick={() => props.setCount(3)} className={classes.carouselBtn}></span>
          <span onClick={() => props.setCount(4)} className={classes.carouselBtn}></span>
        </div>
      </div>
    </Container>
  )
}
