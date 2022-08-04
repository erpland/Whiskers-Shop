const SERVER = "http://WhiskersSite.somee.com";

export const getAllBottles = async () => {
  try {
    const data = await fetch(SERVER + "/api/products/bottles");
    const json = await data.json();
    const flat = () => {
      const flattenedArr = [];
      json.forEach((obj) => {
        flattenedArr.push(flattenObject(obj));
      });
      return flattenedArr;
    };
    return flat();
  } catch {
    return [];
  }
};
export const getTop5 = async (products) => {
  try {
    const data = await fetch(SERVER + "/api/Products/TopFiveBottles");
    const json = await data.json();
    const final = getTopBottles(products, json);
    return final;
  } catch {
    return [];
  }
};
const getTopBottles = (products, topbarCodes) => {
  let arr = [];
  for (let prod of products) {
    for (let bar of topbarCodes) {
      if (prod.Barcode === bar.Barcode)
        arr.push({
          item: prod,
          count: bar.Amount,
        });
    }
  }
  return arr;
};

export const flattenObject = (obj) => {
  const flattened = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flattenObject(value));
    } else {
      flattened[key] = value;
    }
  });

  return flattened;
};

export const signup = async (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    redirect: "follow",
    body: JSON.stringify(user),
  };
  let res = await fetch(SERVER + "/api/User", requestOptions);
  console.log(res);
};

export const login = async (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    redirect: "follow",
    body: JSON.stringify(user),
  };
  let data = await fetch(SERVER + "/api/User/login", requestOptions);
  let json = await data.json();
  if (data.ok) {
    return json;
  }
};
export const buyCart  = async (cart)=>{
  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    redirect: "follow",
    body: JSON.stringify(cart),
  };
  let data = await fetch(SERVER + "/api/User/order", requestOptions);
  if(data.ok)
    return true;
}

export const getAllUsers = async ()=>{
  const data = await fetch(SERVER + "/api/Admin/users");
  const json = await data.json();
  return json
}
export const getAllUserOrders = async ()=>{
  const data = await fetch(SERVER + "/api/Admin/userOrders");
  const json = await data.json();
  return json
}
export const addProduct = async ()=>{}
export const removeProduct = async ()=>{}
export const updateProduct = async (product)=>{
  console.log(product)
  const requestOptions = {
    method: "PUT",
    // headers: { "Content-type": "application/json; charset=UTF-8" },
    redirect: "follow",
  };
  let data = await fetch(SERVER + "/api/admin/updatebottle/" + product.Barcode + "/?price=" + product.Price, requestOptions);
  if(data.ok)
    return true;
}
export const deleteUser = async ()=>{}

