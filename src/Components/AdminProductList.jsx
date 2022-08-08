import React, { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useStyles from "../Styles/AdminStyle";
export default function AdminProductList(props) {
  const classes = useStyles();

  let products = props.products;
  const ref = useRef([]);
  const updatePrice = (product, index) => {
    ref.current[index].style = "visibility: visible";
    //אם הערך הדיפולטיבי כלמר המחיר לפני השינוי של המוצר והמחיר העדכני תקין
    //נציג הודעה מתאימה בצבע ירוק ונעדכן את המוצר
    if (Number(ref.current[index].dataset.price) !== product.Price && product.Price > 0) {
      ref.current[index].innerHTML = "Success";
      ref.current[index].style = "color:green";
      props.updateProductPrice(product);
    }
    //כלמר שהמחיר העדכני לא תקין או לא השתנה מהנוכחי נציג הודעת כישלון
    else {
      ref.current[index].innerHTML = "Failed";
      ref.current[index].style = "color:red";
    }
    //טיימר להודעה כדי שלא תוצג כל הזמן
    setTimeout(() => (ref.current[index].style = "visibility: hidden"), 3000);
  };

  let productRow = products.map((product, index) => (
    <div
      key={product.Barcode}
      className={`${classes.row} ${classes.productRowGrid}`}
    >
      <span></span>
      <img src={product.Image} alt="product" />
      <p>{product.BrandName}</p>
      <p>{product.BottleName}</p>
      <p>{product.TypeDesc}</p>
      <div>
        <TextField
          id={`text${index}`}
          variant="standard"
          defaultValue={product.Price}
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
          onChange={(e) => {
            product.Price = Number(e.target.value);
          }} //תפיסת שינוי טקסט באינפוט עצמו
        />
        <small
          style={{ visibility: "hidden" }}
          ref={(el) => {
            if (ref.current.length < products.length)
              ref.current = [...ref.current, el];
          }}
          id={index}
          data-price = {product.Price}
        >
          succses
        </small>
      </div>
      <Button
        sx={{ height: "40px" }}
        onClick={() => updatePrice(product, index)}
      >
        Update
      </Button>
    </div>
  ));

  return (
    <div className={classes.productsList}>
      <Typography
        variant="h5"
        align="left"
        fontWeight={"bold"}
        borderBottom={"1px solid #ccc"}
        padding={1}
        color="initial"
      >
        Products
      </Typography>
      <div className={classes.productsTable}>
        <div className={classes.productRowGrid}>
          <p></p>
          <p>
            <b>Image</b>
          </p>
          <p>
            <b>Brand</b>
          </p>
          <p>
            <b>Name</b>
          </p>
          <p>
            <b>Type</b>
          </p>
          <p>
            <b>Price</b>
          </p>
          <p>
            <b>Update Price</b>
          </p>
        </div>
        {productRow}
      </div>
    </div>
  );
}
