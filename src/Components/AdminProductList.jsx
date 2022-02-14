import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import useStyles from '../Styles/AdminStyle';

export default function AdminProductList(props) {

    const updatePrice = (product, index) => {

        let small = document.getElementById(`${index}`)
        let text = document.getElementById(`text${index}`)
        small.style = 'visibility: visible'
        if (Number(text.defaultValue) !== product.price && product.price > 0) {
            small.innerHTML = "Success"
            small.style = 'color:green'
            props.updateProductPrice(product)
        }
        else {
            small.innerHTML = "Failed"
            small.style = 'color:red'
        }
        setTimeout(() => small.style = 'visibility: hidden', 3000)

    }


const classes = useStyles();
let products = props.products
  let productRow = products.map((product, index) =>
    <div key={index} className={`${classes.row} ${classes.productRowGrid}`} >
      <b onClick={() => props.deleteProduct(product.index)}>X</b>
      <img src={product.img} alt="product" />
      <p>{product.brand}</p>
      <p>{product.name}</p>
      <p>{product.type}</p>
      <div>
        <TextField
          id={`text${index}`}
          variant="standard"
          defaultValue={product.price}
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
          onChange={(e) => { product.price = Number(e.target.value) }}
        />
        <small style={{ visibility: 'hidden' }} id={index}>succses</small>
      </div>
      <Button sx={{ height: '40px' }} onClick={() => updatePrice(product, index)}>Update Price</Button>
    </div>)
  return (
    <div className={classes.productsList}>
      <h2>Products</h2>
      <div className={classes.productsTable}>
        <div className={classes.productRowGrid}>
          <p></p>
          <p>Image</p>
          <p>Brand</p>
          <p>Name</p>
          <p>Type</p>
          <p>Price</p>
          <p>Change Price</p>
        </div>
        {productRow}
      </div>
    </div>
  )
}
