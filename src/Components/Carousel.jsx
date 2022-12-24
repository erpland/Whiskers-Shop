import React from 'react'
import Typography from '@mui/material/Typography'
import useStyles from '../Styles/ShopStyle';
import { useNavigate } from 'react-router-dom';

export default function Carousel(props) {
  const classes = useStyles(props);
  const navigate = useNavigate();
    let { Image,BrandName, BottleName, Price } = props.product
  return (
   
    <div style={{display:'contents'}}>
      <div className={classes.headerImg}>
        <img src={Image} alt="product" onClick={() => navigate('/item', { state: props.product })} />
      </div>
      <div className={classes.headerCenter}>
        <span className={classes.verticalLine}></span>
      </div>
      <div className={classes.headerRight}>
        <div className={classes.headerText}>
          <Typography sx={{ fontWeight: 'bold', }} variant='h2'>{BrandName}</Typography>
          <Typography sx={{ fontWeight: 'light', }} variant='h3'>{BottleName}</Typography>
          <div className={classes.shape}></div>
          <Typography sx={{ fontWeight: 'light' }} variant='h5'>{Price}$</Typography>
        </div>
      </div>
    </div>
   
  )
}
