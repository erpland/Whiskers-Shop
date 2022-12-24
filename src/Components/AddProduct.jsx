import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useStyles from "../Styles/AdminStyle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { encpsulateBottle } from "../JS/Functions";
import { addProduct,  flattenObject } from "../Data/database";
export default function AddProduct(props) {
  const classes = useStyles();

  let { products } = props;


  const [region, setRegion] = useState("Other");
  const [type, setType] = useState("Single Malt");
  const [country, setCountry] = useState("Scotland");
  const [sweet, setSweet] = useState(1);
  const [floral, setFloral] = useState(1);
  const [fruit, setFruit] = useState(1);
  const [body, setBody] = useState(1);
  const [richness, setRichness] = useState(1);
  const [smoke, setSmoke] = useState(1);
  const [wine, setWine] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data.abv = Number(data.abv); 
    data.price = Number(data.price); 
    data.age += data.age !== "" ? "yo" : "No Age Statement"; 
    data = { ...data, index: products.length, qty: 0 }; 
    const bottleToAdd = encpsulateBottle(data, products.length + 1);
    let isAdded = await addProduct(bottleToAdd);
    if (isAdded) {
        props.setBottomAlert({isShowen:true, type:'success', title:"Success",body:'Product Adde Successfully'})
        props.setProducts(flattenObject(bottleToAdd))
    }
    else {
        props.setBottomAlert({isShowen:true, type:'error', title:"Error",body:'Error Adding Product.. Check Your Fields'})

    };

    reset(); 
  };
  
  const handleChange = (event) => {
    switch (event.target.name) {
      case "region": 
        if (country !== "Scotland") {
          break;
        }
        setRegion(event.target.value);
        break;
      case "type":
        setType(event.target.value);
        break;
      case "country":
        if (event.target.name !== "Scotland") {
          setRegion("Other"); 
        }
        setCountry(event.target.value);
        break;
      case "sweet":
        setSweet(event.target.value);
        break;
      case "floral":
        setFloral(event.target.value);
        break;
      case "fruit":
        setFruit(event.target.value);
        break;
      case "body":
        setBody(event.target.value);
        break;
      case "richness":
        setRichness(event.target.value);
        break;
      case "smoke":
        setSmoke(event.target.value);
        break;
      case "wine":
        setWine(event.target.value);
        break;
      default:
        break;
    }
  };
  
  const textFieldsJson = [
    {
      name: "brand",
      label: "Brand",
      type: "text",
      error: errors?.brand,
      pattern: /^[a-zA-Z ]{2,20}$/i,
      message: "English Letters Between 2-20",
      errors: errors.brand?.message,
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      error: errors?.name,
      pattern: /^[\da-zA-Z ]{2,30}$/i,
      message: "English Letters Between 2-30",
      errors: errors.name?.message,
    },
    {
      name: "age",
      label: "Age",
      type: "text",
      error: errors?.age,
      pattern: /^[1-9][0-9]*$/i,
      message: "Age Must Be Above 0",
      errors: errors.age?.message,
    },
    {
      name: "abv",
      label: "ABV",
      type: "text",
      error: errors?.abv,
      pattern: /^[4-9][0-9]*$/i,
      message: "ABV Must Be Between 40-100",
      errors: errors.abv?.message,
    },
    {
      name: "price",
      label: "Price",
      type: "text",
      error: errors?.price,
      pattern: /^[1-9][0-9]*$/i,
      message: "Price Must Be Above 1",
      errors: errors.price?.message,
    },
    {
      name: "img",
      label: "Img",
      type: "text",
      error: errors?.img,
      pattern: /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i,
      message: "Illegal Image Suffix",
      errors: errors.img?.message,
    },
  ];
  //גייסון של כל הסלקטים
  const selectFieldsJson = [
    {
      label: "Country",
      name: "country",
      value: country,
      menuItems: ["Scotland", "Ireland", "Japan", "USA"],
    },
    {
      label: "Region",
      name: "region",
      value: region,
      menuItems: [
        "Other",
        "Campbeltown",
        "Highlands",
        "Islands",
        "Islay",
        "Lowland",
        "Speyside",
      ],
    },
    {
      label: "Type",
      name: "type",
      value: type,
      menuItems: ["Single Malt", "Blend", "Bourbon", "Rye"],
    },
    {
      label: "Sweet",
      name: "sweet",
      value: sweet,
      menuItems: [1, 2, 3, 4, 5],
    },
    {
      label: "Floral",
      name: "floral",
      value: floral,
      menuItems: [1, 2, 3, 4, 5],
    },
    {
      label: "Fruit",
      name: "fruit",
      value: fruit,
      menuItems: [1, 2, 3, 4, 5],
    },
    {
      label: "Body",
      name: "body",
      value: body,
      menuItems: [1, 2, 3, 4, 5],
    },
    {
      label: "Richness",
      name: "richness",
      value: richness,
      menuItems: [1, 2, 3, 4, 5],
    },
    {
      label: "Smoke",
      name: "smoke",
      value: smoke,
      menuItems: [1, 2, 3, 4, 5],
    },
    {
      label: "Wine",
      name: "wine",
      value: wine,
      menuItems: [1, 2, 3, 4, 5],
    },
  ];

  const textFields = textFieldsJson.map((input) => (
    <TextField
      className={classes.textbox}
      key={input.name}
      variant="standard"
      label={input.label}
      fullWidth
      type={input.type}
      autoComplete={input.name}
      error={!!input.error}
      helperText={input.error ? input.errors : null}
      {...register(input.name, {
        required: input.name !== "age" ? "Required Field" : "", 
        pattern: {
          value: input.pattern,
          message: input.message,
        },
      })}
    />
  ));

  const selectFields = selectFieldsJson.map((input) => (
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
          setValueAs: (value) => (isNaN(Number(value)) ? value : Number(value)),
        })} 
        onChange={handleChange}
      >
        {input.menuItems.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  ));
  return (
    <div className={classes.addProduct}>
      <Typography
        variant="h5"
        align="left"
        fontWeight={"bold"}
        borderBottom={"1px solid #ccc"}
        padding={1}
        color="initial"
      >
        Add Product
      </Typography>
      <form
        className={classes.addProductForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes.textboxs}>{textFields}</div>
        <div className={classes.selects}>{selectFields}</div>

        <TextField
          rows={5}
          fullWidth
          multiline
          error={!!errors?.description}
          helperText={errors.description ? errors.img?.message : null}
          id="description"
          {...register("description", {
            required: "Required Field",
          })}
          label="Description"
          variant="outlined"
        />

        <Button
          sx={{ height: 50, alignSelf: "center" }}
          variant="contained"
          type="submit"
        >
          Add Product
        </Button>
      </form>
    </div>
  
  );
}
