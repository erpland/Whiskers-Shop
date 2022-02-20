import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Admin from './Pages/Admin'
import ItemPage from './Pages/ItemPage'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Register from './Pages/Register'
import Shop from './Pages/Shop'
import ProductsDb,{defaultUsers} from './JSON/default-data'
import Footer from './Components/Footer'
import {mostPopular} from './JS/Functions'





export default function Router() {
    const AMOUNT_OF_POPULAR_PRODUCTS = 6 // מספר המוצרים שנרצה להציג בקרוסלת הפופולרים
    if (!JSON.parse(localStorage.getItem("products"))) { // אם אין מוצרים יצירת מוצרים דיפולטיבים
        localStorage.setItem("products", JSON.stringify(ProductsDb))
    }
    if (!JSON.parse(localStorage.getItem("users"))) {// אם אין יוזרים יצירת יוזרים דיפולטיבים
        localStorage.setItem("users", JSON.stringify(defaultUsers))
    }
    if (!JSON.parse(localStorage.getItem("isAdmin"))) { // אם אין תכונת אדמין נאתחל אותו כשקר
        localStorage.setItem("isAdmin", JSON.stringify(false))
    }
    
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])//סטייט של רשימת המשתשים
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || [])//סטייט מוצרים
    const [mostPopProducts,setMostPopProducts] = useState(mostPopular(users,AMOUNT_OF_POPULAR_PRODUCTS))//רשימת מוצרים פופולריים-מאותחל על ידי פונקציה
    const [isAdmin,setIsAdmin] = useState(JSON.parse(localStorage.getItem("isAdmin")))//סטייט בוליאני המציין האם אדמין מחובר/לא
    const [currentUser, setCurrentUser] = useState()//משתמש נוכחי אם מחובר
    const [cart, setCart] = useState([])//עגלה נוכחית
    const [orders, setOrders] = useState([])//הזמנה של יוזר מסויים
    const [ordersInfo, setOrdersInfo] = useState([])//פירוט על הזמנה של יוזר מסויים-תאריך וכו
    const [totalQty, setTotalQty] = useState(0)//סטייט של כמות כוללת של מוצרים בעגלה נוכחית
    const [totalPrice, setTotalPrice] = useState(0)//סטייט של סכום כולל של מוצרים בעגלה נוכחית
    
    //פונקציה להוספת מוצר למערך קיים
    const addUser = (user) => {
        setUsers([...users, user])
    }
    //מחיקת משתמש ממערך משתמשים על פי אינדקס שמגיע מלמטה
    const deleteUser=(index)=>{
        let newUserArr=[...users]
        newUserArr.splice(index,1)
        setUsers(newUserArr)
    }
    //קניית עגלה נוכחית והוספת שדה תאריך נוכחי לקנייה
    const buyCart = () => {
        let order = cart
        setOrders([...orders, order])
        setOrdersInfo([...ordersInfo, { date: new Date().toLocaleString() + "",totalPrice:totalPrice },])
    }
    //עדכון מחיר על פי מוצר מסויים שמגיע מלמטה-ע"י מציאת אינדקס נוכחי של מוצר
    const updateProductPrice = (product) => {
        let index = products.indexOf(product);
        products[index] = product // דריסת המוצר במוצר המעודכן שקבילנו מלמטה
        setProducts([...products])

    }
    //הוספת מוצר חדש למערך המוצרים הקיים
    const addProduct = (product) => {
        setProducts([...products, product])
    }
    // מחיקת מוצר ממערך המוצרים-ע"י פילטור על פי אינדקס שמגיע מלמטה 
    const deleteProduct = (index) => {
        let tempProducts = products.filter(prod => prod.index !== index)
        setProducts(tempProducts)
    }
    //פונקציה לטיפול בהתחברות משתמש-נעדכן את הסטייטים בהתאם
    const userLogin = (user) => {
        setOrders([...user.orders])
        setOrdersInfo([...user.ordersInfo])
        setCurrentUser(user)
    }
    //פונקציה להוספת מוצר לעגלה, מקבלת אינדקס וכמות
    const addToCart = (index, qty = 1) => {
        let cartItems
        let product = Object.assign({}, products[index]) // העתקת הערך ולא הרפרנס של הפרודקט כדי לא לדרוס את הכמות המוקרית
        let cartProduct = cart.filter(item => item.index === index) // תפיסת המוצר אם קיים בעגלה

        if (cartProduct.length === 0) {// אם המערך ריק כלמר שהמוצר לא קיים בעגלה כבר ולכן נכניס ממנו את הכמות הרצוייה
            product.qty = 1 * qty
            cartItems = [...cart, product]
        }
        else {//אחרת נעדכן את הכמות על פי הכמות שנשלחה למוצר הספציפי
            cartProduct[0].qty = cartProduct[0].qty + qty
            cartItems = [...cart]
        }
        //לאחר כל הבדיקות והעידכונים הרלוונטים נעדכן את הסטייט
        setCart(cartItems)
    }
    //מחיקת מוצר מן העגלה-על פי אינדקס נשלח
    const removeItemFromCart = (index) => {
        let newCart = cart.filter((item) => item.index !== index)
        console.log(newCart)
        setCart(newCart)
    }
    //כל שינוי במערך משתמשים יגרור עדכון בלוקאל
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])


    //כל שינוי בעגלת הקניות יגרור עדכון סטייטים-כמות ומחיר כולל של העגלה
    useEffect(() => {
        if (cart.length !== 0) {//כדי שלא יכנס לכאן פעם הראשונה כשהעגלה ריקה
            var total = cart.map(prod => prod.price * prod.qty)
            var qty = cart.map(prod => prod.qty)
            qty = qty.reduce((prev, current) => { return prev + current })
            total = total.reduce((prev, current) => { return prev + current })
            setTotalQty(qty)
            setTotalPrice(total)
        }
        else{
            setTotalQty(0)
            setTotalPrice(0)
        }   

    }, [cart])
    //כל שינוי בהזמנה נוכחית יגרור עדכון סטייטים-קניית עגלה
    useEffect(() => {
        if (currentUser) {//מוכרח להיות משתמש מחובר כדי לקנות
            // localStorage.setItem("cart", JSON.stringify([]))
            //עדכון ההזמנות במשתמש הנוכחי
            //ההזמנה עצמה התעדכנה בסטייטים על ידי פונקצית קניית העגלה
            let updatedUser = { ...currentUser, orders: [...orders], ordersInfo: [...ordersInfo] }
            setCurrentUser(updatedUser)
            //לאחר שעידכנו את היוזר הנוכחי נעדכן את מערך המשתמשים
            let updatedUsers = users.map(user => user.email === currentUser.email ? updatedUser : user)
            setUsers(updatedUsers)
            //איפוס סטייטים
            setCart([])
            setTotalQty(0)
            setTotalPrice(0)
            //עידכון המוצרים הפופולרים
            setMostPopProducts(mostPopular(updatedUsers,AMOUNT_OF_POPULAR_PRODUCTS))
        }

    }, [orders])
    // עדכון מוצרים בלוקאל בכל שינוי במערך המוצרים המקורי
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products))
    }, [products])


    
    return (

        <BrowserRouter>
            {!isAdmin && <Navbar isLoggedIn={currentUser !== undefined} logOut={() => setCurrentUser()} buyCart={buyCart} totalQty={totalQty} totalPrice={totalPrice} cart={cart} removeItemFromCart={removeItemFromCart} />}
            <Routes>
                <Route path="/" element={<Shop addToCart={addToCart} mostPopProducts={mostPopProducts} products={products} style={{ display: 'flex', alignItems: 'center' }} />} />
                <Route path="/register" element={<Register addUser={addUser} />} />
                <Route path="/login" element={<Login users={users} setUser={(user) => userLogin(user)} setIsAdmin={(value)=>setIsAdmin(value)} isAdmin={isAdmin} />} />
                {currentUser !== undefined && <Route path="/profile" element={<Profile orders={orders} ordersInfo={ordersInfo} currentUser={currentUser} />} />}
                {isAdmin && <Route path="/admin" element={<Admin setIsAdmin={(v)=>setIsAdmin(v)} deleteUser={deleteUser} products={products} deleteProduct={(index) => deleteProduct(index)} addProduct={addProduct} updateProductPrice={(product) => updateProductPrice(product)} users={users} />} />}
                <Route path="/item" element={<ItemPage addToCart={addToCart} />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}
