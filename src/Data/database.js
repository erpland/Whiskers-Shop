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
export const getTop5 = async () => {
  try{
  const data = await fetch(SERVER + "/api/Products/TopFiveBottles");
  const json = await data.json();
  return json;
  }catch{
    alert('Error Top 5')
    return []
  }
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
