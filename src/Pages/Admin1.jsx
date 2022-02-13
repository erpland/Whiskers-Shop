import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import useStyles from '../Styles/AdminStyle';
import AdminModal from '../Components/AdminModal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Admin(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState()
    // const [isUpdate, setIsUpdate] = useState('none')
    const [region, setRegion] = useState('Other')
    const [type, setType] = useState('Single Malt')
    const [country, setCountry] = useState('Scotland')
    const [sweet, setSweet] = useState(1)
    const [floral, setFloral] = useState(1)
    const [fruit, setFruit] = useState(1)
    const [body, setBody] = useState(1)
    const [richness, setRichness] = useState(1)
    const [smoke, setSmoke] = useState(1)
    const [wine, setWine] = useState(1)
    let { products, users } = props

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'region':
                if (country !== 'Scotland') { break; }
                setRegion(event.target.value);
                break
            case 'type':
                setType(event.target.value)
                break;
            case 'country':
                if (event.target.name !== 'Scotland') {
                    setRegion('Other')
                }
                setCountry(event.target.value)
                break;
            case 'sweet':
                setSweet(event.target.value)
                break;
            case 'floral':
                setFloral(event.target.value)
                break;
            case 'fruit':
                setFruit(event.target.value)
                break;
            case 'body':
                setBody(event.target.value)
                break;
            case 'richness':
                setRichness(event.target.value)
                break;
            case 'smoke':
                setSmoke(event.target.value)
                break;
            case 'wine':
                setWine(event.target.value)
                break;
            default:
                break;
        }
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.abv = Number(data.abv)
        data.price = Number(data.price)
        data.age += data.age !== '' ? 'yo' : 'No Age Statement'
        data = { ...data, index: products.length, qty: 0 }
        props.addProduct(data)
        alert('Product Added Successfully')
        reset()
    };

    const textFieldsJson = [
        {
            name: 'brand',
            label: 'Brand',
            type: 'text',
            error: errors?.brand,
            pattern: /^[a-zA-Z ]{2,20}$/i,
            message: 'English Letters Between 2-20',
            errors: errors.brand?.message
        },

        {
            name: 'name',
            label: 'Name',
            type: 'text',
            error: errors?.name,
            pattern: /^[a-zA-Z ]{2,30}$/i,
            message: 'English Letters Between 2-30',
            errors: errors.name?.message
        },


        {
            name: 'age',
            label: 'Age',
            type: 'text',
            error: errors?.age,
            pattern: /^[1-9][0-9]*$/i,
            message: 'Age Must Be Above 0',
            errors: errors.age?.message
        },


        {
            name: 'abv',
            label: 'ABV',
            type: 'text',
            error: errors?.abv,
            pattern: /^[4-9][0-9]*$/i,
            message: 'abv Must Be Above 40',
            errors: errors.abv?.message
        },
        {
            name: 'price',
            label: 'Price',
            type: 'text',
            error: errors?.price,
            pattern: /^[1-9][0-9]*$/i,
            message: 'Price Must Be Above 1',
            errors: errors.price?.message
        },
        {
            name: 'img',
            label: 'Img',
            type: 'text',
            error: errors?.img,
            pattern: /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i,
            message: 'Illegal Image Suffix',
            errors: errors.img?.message
        },

    ]
    const selectFieldsJson = [
        {
            label: 'Country',
            name: 'country',
            value: country,
            menuItems: ['Scotland', 'Ireland', 'Japan', 'USA']
        },
        {
            label: 'Region',
            name: 'region',
            value: region,
            menuItems: ['Other', 'Campbeltown', 'Highlands', 'Islands', 'Islay', 'Lowland', 'Speyside']
        },
        {
            label: 'Type',
            name: 'type',
            value: type,
            menuItems: ['Single Malt', 'Blend', 'Bourbon', 'Rye']
        },
        {
            label: 'Sweet',
            name: 'sweet',
            value: sweet,
            menuItems: [1, 2, 3, 4, 5]
        },
        {
            label: 'Floral',
            name: 'floral',
            value: floral,
            menuItems: [1, 2, 3, 4, 5]
        },
        {
            label: 'Fruit',
            name: 'fruit',
            value: fruit,
            menuItems: [1, 2, 3, 4, 5]
        },
        {
            label: 'Body',
            name: 'body',
            value: body,
            menuItems: [1, 2, 3, 4, 5]
        },
        {
            label: 'Richness',
            name: 'richness',
            value: richness,
            menuItems: [1, 2, 3, 4, 5]
        },
        {
            label: 'Smoke',
            name: 'smoke',
            value: smoke,
            menuItems: [1, 2, 3, 4, 5]
        },
        {
            label: 'Wine',
            name: 'wine',
            value: wine,
            menuItems: [1, 2, 3, 4, 5]
        },


    ]

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
        setTimeout(() => small.style = 'visibility: hidden', 3000)

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
    const textFields = textFieldsJson.map((input) =>
        <TextField className={classes.textbox} key={input.name} variant='standard' label={input.label}
            fullWidth type={input.type} autoComplete={input.name}
            error={!!input.error}
            helperText={input.error ? input.errors : null}
            {...register(input.name, {
                required: input.name !== 'age' ? 'Required Field' : '',
                pattern: {
                    value: input.pattern, message: input.message
                }
            })} />)

    const selectFields = selectFieldsJson.map((input) =>
        <div key={input.name}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {input.name}
            </InputLabel>
            <Select
                label={input.label}
                labelId={input.name}
                id={input.name}
                name={input.name}
                value={input.value}
                {...register(input.name, {
                    setValueAs: value => isNaN(Number(value)) ? value : Number(value),
                })}
                onChange={handleChange}
            >
                {input.menuItems.map((item, index) => <MenuItem key={index} value={item}>
                    {item}
                </MenuItem>)}
            </Select>
        </div>
    )
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
                <h2>Add Product</h2>
                <div className={classes.table}>
                    <form className={classes.addProductForm} onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.textboxs}>
                            {textFields}
                        </div>
                        <div className={classes.selects}>
                        {selectFields}
                        </div>
                        <TextField rows={10}
                            fullWidth
                            multiline
                            id="description"
                            {...register('description', {
                                required: 'Required Field',
                                // pattern: {
                                //     value: /^[\d]+$/i, message: ''
                                // }
                            })}
                            label="Description"
                            variant="outlined" />
                        <Button variant='contained' type="submit">Add Product</Button>
                    </form>
                </div>
            </div>
            {data && <AdminModal open={open} setOpen={setOpen} data={data} />}
        </Container>
    );
}
