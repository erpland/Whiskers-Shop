import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Admin from './Pages/Admin'
import EditProduct from './Pages/EditProduct'
import ItemPage from './Pages/ItemPage'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Register from './Pages/Register'
import Shop from './Pages/Shop'
import ProductsDb from './JSON/default-data'





export default function Router() {

    if (!JSON.parse(localStorage.getItem("products"))) {
        localStorage.setItem("products", JSON.stringify(ProductsDb))
    }

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || [])
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    const [orders, setOrders] = useState([])
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [totalQty, setTotalQty] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [currentUser, setCurrentUser] = useState()

    const addUser = (user) => {
        setUsers([...users, user])
    }


    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    const addToCart = (index) => {
        let cartItems
        let product = Object.assign({}, products[index])
        let cartProduct = cart.filter(item => item.index === index)

        if (cartProduct.length === 0) {
            product.qty = 1
            cartItems = [...cart, product]
        }
        else {
            cartProduct[0].qty++
            cartItems = [...cart]
        }
        setCart(cartItems)
    }

    const removeItemFromCart = (index) => {
        let newCart = cart.filter((item) => item.index !== index)
        setCart(newCart)
    }

    useEffect(() => {
        if (cart.length !== 0) {
            var total = cart.map(prod => prod.price * prod.qty)
            var qty = cart.map(prod => prod.qty)
            qty = qty.reduce((prev, current) => { return prev + current })
            total = total.reduce((prev, current) => { return prev + current })
            setTotalQty(qty)
            setTotalPrice(total)
        }

    }, [cart])

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem("cart", JSON.stringify([]))
            let updatedUser = { ...currentUser, orders: [...orders] }
            setCurrentUser(updatedUser)
            let updatedUsers = users.map(user => user.email === currentUser.email ? updatedUser : user)
            setUsers(updatedUsers)
            setCart([])
            setTotalQty(0)
            setTotalPrice(0)
        }
    }, [orders])

    const buyCart = () => {
        let order = cart
        setOrders([...orders, order])
        
    }
    return (

        <BrowserRouter>
            <Navbar isLoggedIn={currentUser !== undefined} logOut={()=>setCurrentUser()} buyCart={buyCart} totalQty={totalQty} totalPrice={totalPrice} cart={cart} removeItemFromCart={removeItemFromCart} />
            <Routes>
                <Route path="/shop" element={<Shop addToCart={addToCart} products={products} style={{ display: 'flex', alignItems: 'center' }} />} />
                <Route path="/register" element={<Register addUser={addUser} />} />
                <Route path="/login" element={<Login users={users} setUser={(user) => setCurrentUser(user)} />} />
                {currentUser !== undefined && <Route path="/profile" element={<Profile orders={orders} currentUser = {currentUser}/>} />}
                <Route path="/edit-product" element={<EditProduct />} />
                <Route path="/admin" element={<Admin products = {products} users= {users}/>} />
                <Route path="/item" element={<ItemPage />} />
            </Routes>
        </BrowserRouter>

    )
}
