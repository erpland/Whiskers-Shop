import React, { useEffect, useRef, useState } from 'react'
import Container from '@mui/material/Container';
import useStyles from '../Styles/ShopStyle';
import Carousel from './Carousel';

export default function ShopHeader(props) {
  const classes = useStyles();
  const [count, setCount] = useState(0) 
  const timeout = useRef(null); 
  let products = props.products 
  
  
  let indicators = products.map((indicators, index)=>
    <span key = {index} onClick={() => setCount(index)} style={count === index ? { backgroundColor: 'black' } : {}} 
    className={classes.carouselBtn}></span>
    )

  useEffect(() => {
    resetTimeout();
    timeout.current = setTimeout(() =>
      setCount((prevCount) => prevCount === products.length - 1 ? 0 : prevCount + 1
      ), 6000
    )
    return () => {
      resetTimeout();
    }
  }, [count,products.length])

  const resetTimeout = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }
  return (
    <Container className={classes.shopHeader} maxWidth='100%' >

      <div className={classes.headerContainer}>

        <Carousel product={products[count].item} />

        <div className={classes.btnContainer}>
         {indicators}
        </div>
      </div>
    </Container>
  )
}
