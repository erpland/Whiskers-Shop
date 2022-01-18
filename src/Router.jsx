import React from 'react'
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
    if(!JSON.parse(localStorage.getItem("products"))){
        localStorage.setItem("products",JSON.stringify(ProductsDb))
    }
    return (
        <BrowserRouter>
            <Navbar />
           
            <Routes>
                <Route path="/shop" element={<Shop style={{ display: 'flex', alignItems: 'center' }} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/edit-product" element={<EditProduct />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/item" element={<ItemPage />} />
            </Routes>
        </BrowserRouter>

    )
}
