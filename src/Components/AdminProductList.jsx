import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
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
      <span onClick={() => props.deleteProduct(product.index)}><b>X</b></span>
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
      <Button sx={{ height: '40px' }} onClick={() => updatePrice(product, index)}>Update</Button>
    </div>)
  return (
    <div className={classes.productsList}>
     <Typography variant="h5" align='left' fontWeight={'bold'} borderBottom={'1px solid #ccc'} padding={1} color="initial">Products</Typography>
      <div className={classes.productsTable}>
        <div className={classes.productRowGrid}>
          <p></p>
          <p><b>Image</b></p>
          <p><b>Brand</b></p>
          <p><b>Name</b></p>
          <p><b>Type</b></p>
          <p><b>Price</b></p>
          <p><b>Update Price</b></p>
        </div>
        {productRow}
      </div>
    </div>
  )
}
