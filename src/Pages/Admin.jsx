import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import useStyles from '../Styles/AdminStyle';
import AdminModal from '../Components/AdminModal';
export default function Admin(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState()
    const [isUpdate, setIsUpdate] = useState('none')

    let { products, users } = props

    const userClick = (user) => {
        setData(user)
        setOpen(true)
    }
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
        setTimeout(()=>small.style = 'visibility: hidden',3000)

    }
    let userRow = users.map((user, index) =>
        <div key={index} className={`${classes.row} ${classes.userRowGrid}`}>
            <p>{user.email}</p>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.orders.length}</p>
            <Button onClick={() => userClick(user)}>Show More</Button>
        </div>)

    let productRow = products.map((product, index) =>
        <div key={index} className={`${classes.row} ${classes.productRowGrid}`} >
            <b>X</b>
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

        <Container className={classes.container} maxWidth={'lg'}>
            <h1>Dashbord</h1>
            <div className={classes.stats}>

            </div>

            <div className={classes.users}>
                <h2>Users</h2>
                <div className={classes.table}>
                    <div className={`${classes.userDetails} ${classes.userRowGrid}`}>
                        <p>Email</p>
                        <p>First Name</p>
                        <p>Last Name</p>
                        <p>Order Amount</p>
                        <p>View Orders</p>
                    </div>
                    {userRow}
                </div>
            </div>

            <div className={classes.products}>
                <h2>Products</h2>
                <div className={classes.table}>
                    <div className={`${classes.userDetails} ${classes.productRowGrid}`}>
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
            <div className={classes.addProduct}>

            </div>
            {data && <AdminModal open={open} setOpen={setOpen} data={data} />}
        </Container>
    );
}
