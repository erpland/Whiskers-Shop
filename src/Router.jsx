
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Admin from "./Pages/Admin";
import ItemPage from "./Pages/ItemPage";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import {
  getAllBottles,
  getTop5,
  signup,
  buyCart as saveOrder,
  login,
  updateProduct,
  getUserOrders,
} from "./Data/database";
import "./App.css";

export default function Router() {
  if (!JSON.parse(localStorage.getItem("isAdmin"))) {
  
    localStorage.setItem("isAdmin", JSON.stringify(false));
  }

  useEffect(() => {
    const getData = async () => {
      const bottles = await getAllBottles();
      const topBottles = await getTop5(bottles);
      if (bottles) {
        setProducts(bottles);
        setMostPopProducts(topBottles);
        setIsLoader(false);
      }
    };
    getData();
  }, []);
  const [isLoader, setIsLoader] = useState(true);

  const [products, setProducts] = useState([]); 

  const [mostPopProducts, setMostPopProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("isAdmin"))
  ); 
  const [currentUser, setCurrentUser] = useState(); 
  const [cart, setCart] = useState([]); 
  const [totalQty, setTotalQty] = useState(0); 
  const [totalPrice, setTotalPrice] = useState(0); 
  const [bottomAlert, setBottomAlert] = useState({
    isShowen: false,
    type: "",
    title: "",
    body: "",
  });

 
  const addUser = async (user) => {
    if (await signup(user)) {
      setBottomAlert({
        isShowen: true,
        type: "success",
        title: "Success",
        body: "Successfuly Signed Up!",
      });
    } else {
      setBottomAlert({
        isShowen: true,
        type: "error",
        title: "Error",
        body: "There Was an Error During Sign Up Proccess... Please Try Again Later.",
      });
    }


  };

 
  const buyCart = async () => {
    let order = {
      UserId: currentUser.Id,
      Items: cart.map((prod) => ({
        Barcode: prod.Barcode,
        Bottle_Name: prod.BottleName,
        BrandCode: prod.BrandCode,
        BrandName: prod.BrandName,
        Image: prod.Image,
        Price: prod.Price,
        Qty: prod.qty,
      })),
    };

    if (await saveOrder(order)) {
      setCart([]);
      let orders = await getUserOrders(currentUser.Id)
      let updatedUser = {
        ...currentUser,
        Orders: orders,
      };
      setCurrentUser(updatedUser);
      setBottomAlert({
        isShowen: true,
        type: "success",
        title: "Success",
        body: "Successfuly Ordered Your Cart!",
      });
    } else {
      setBottomAlert({
        isShowen: true,
        type: "error",
        title: "Error",
        body: "There Was an Error Ordering Your Cart... Please Try Again Later.",
      });
    }
  };

 
  const updateProductPrice = async (product) => {
    let index = products.indexOf(product);
    products[index] = product; 
    setProducts([...products]);
    let res = await updateProduct(product);
    if (!res) {
      setBottomAlert({
        isShowen: true,
        type: "error",
        title: "Error",
        body: "Error Updating Price",
      });
    }
  };

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    let tempProducts = products.filter((prod) => prod.index !== index);
    setProducts(tempProducts);
  };
  
  const userLogin = (user) => {
    setCurrentUser(user);
  };

  const addToCart = (Barcode, qty = 1) => {
    let cartItems;
    let product = products.filter((prod) => prod.Barcode === Barcode)[0];
    let cartProduct = cart.filter((item) => item.Barcode === Barcode); 

    if (cartProduct.length === 0) {
      
      product.qty = 1 * qty;
      cartItems = [...cart, product];
    } else {
     
      cartProduct[0].qty = cartProduct[0].qty + qty;
      cartItems = [...cart];
    }
    
    setCart(cartItems);
  };
  
  const removeItemFromCart = (barcode) => {
    let newCart = cart.filter((item) => item.Barcode !== barcode);
    setCart(newCart);
  };


  useEffect(() => {
    if (cart.length !== 0) {
     
      var total = cart.map((prod) => prod.Price * prod.qty);
      var qty = cart.map((prod) => prod.qty);
      qty = qty.reduce((prev, current) => {
        return prev + current;
      });
      total = total.reduce((prev, current) => {
        return prev + current;
      });
      setTotalQty(qty);
      setTotalPrice(total);
    } else {
      setTotalQty(0);
      setTotalPrice(0);
    }
  }, [cart]);

  return (
    <BrowserRouter>
      {!isAdmin && (
        <Navbar
          isLoggedIn={currentUser !== undefined}
          logOut={() => setCurrentUser()}
          buyCart={buyCart}
          totalQty={totalQty}
          totalPrice={totalPrice}
          cart={cart}
          removeItemFromCart={removeItemFromCart}
        />
      )}
      {isLoader && <Loader />}

      <Routes>
        {!isLoader && (
          <Route
            path="/"
            element={
              <Shop
                addToCart={addToCart}
                mostPopProducts={mostPopProducts}
                products={products}
                style={{ display: "flex", alignItems: "center" }}
              />
            }
          />
        )}

        <Route path="/register" element={<Register addUser={addUser} />} />

        <Route
          path="/login"
          element={
            <Login
              setUser={(user) => userLogin(user)}
              setIsAdmin={(value) => setIsAdmin(value)}
              isAdmin={isAdmin}
            />
          }
        />
        {currentUser !== undefined && (
          <Route
            path="/profile"
            element={<Profile currentUser={currentUser} />}
          />
        )}
        {isAdmin && (
          <Route
            path="/admin"
            element={
              <Admin
                setIsAdmin={(v) => setIsAdmin(v)}
                products={products}
                deleteProduct={(index) => deleteProduct(index)}
                addProduct={addProduct}
                updateProductPrice={(product) => updateProductPrice(product)}
                setBottomAlert={(alert) => setBottomAlert(alert)}
                setProducts={(prod) => setProducts([...products, prod])}
              />
            }
          />
        )}
        <Route path="/item" element={<ItemPage addToCart={addToCart} />} />
      </Routes>
      <Footer />

      {bottomAlert.isShowen && (
        <Alert
          style={{ position: "sticky", bottom: 0, zIndex: 999 }}
          variant="filled"
          onClose={() => {
            setBottomAlert({ ...bottomAlert, isShowen: false });
          }}
          severity={bottomAlert.type}
        >
          <AlertTitle>{bottomAlert.title}</AlertTitle>
          {bottomAlert.body}
        </Alert>
      )}
    </BrowserRouter>
  );
}
const Loader = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <div className="loader"></div>
    </div>
  );
};
