export const encpsulateBottle = (data, barcode) => {
  console.log(barcode);
  const regions  = getRegion(data.region,data.country)
  const object = {
    Brand: {
      BrandCode: 0,
      BrandName: data.brand,
      Region: {
        RegionCode: regions.region,
        RegionName: data.region,
        Country: {
          CountryCode: regions.country,
          CountryName: data.country,
        },
      },
    },
    Barcode: barcode,
    BottleName: data.name,
    Age: data.age,
    Price: data.price,
    Type: {
      TypeCode: 1,
      TypeDesc: data.type,
    },
    Taste: {
      TasteCode: barcode,
      Sweet: data.sweet,
      Floral: data.floral,
      Fruit: data.fruit,
      Body: data.body,
      Richness: data.richness,
      Smoke: data.smoke,
      Wine: data.wine,
    },
    Image: data.img,
    ABV: data.abv,
    Description: data.description,
  };
  return object;
};
const getRegion = (region, country) => {
  switch (region) {
    case "Highland":
      return { region: 1, country: 1 };
    case "Lowland":
      return { region: 2, country: 1 };
    case "Speyside":
      return { region: 3, country: 1 };
    case "Islands":
      return { region: 4, country: 1 };
    case "Campbeltown":
      return { region: 5, country: 1 };
    case "Islay":
      return { region: 6, country: 1 };
    case "Other":
      switch (country) {
        case "Scotland":
          return { region: 7, country: 1 };
        case "USA":
          return{ region: 8, country: 2 };
        case "Ireland":
          return { region: 9, country: 3 };
        case "Japan":
          return { region: 10, country: 4 };
        default:
          return;
      }
    default:
      break;
  }
};

// import { getTop5 } from "../Data/database";

// export const getTop5Products = async (products) => {
//   let data = await getTop5();
//   let items = await data.map((code) => {
//     let filterd = products.filter((prod) => prod.Barcode === code.Barcode);
//     return {
//       item: filterd,
//       count: code.Amount,
//     };

//   });
//   return items
// };
// export function mostPopular(users,num){
//   let allOrders = users.map(u => u.orders).flat().flat()
//   let ordersCount = allOrders.map(o => {
//     return {
//       item: o,
//         count: allOrders.reduce((a, b) => { return o.brand === b.brand && o.name === b.name ? a + b.qty : a + 0 }, 0)
//     }
//   })
//   let ordersNoDup = ordersCount.filter((v,i,a)=>a.findIndex(t=>(t.item.brand === v.item.brand && t.item.name === v.item.name ))===i)
//   let mostPopularProducts = [];

//   num = num > ordersNoDup.length ? ordersNoDup.length : num

//   while(mostPopularProducts.length < num){
//     let max = ordersNoDup.reduce((a,b)=>{return Math.max(a, b.count)},0)
//     for(let i=0;i<ordersNoDup.length;i++){
//       if(mostPopularProducts.length >= num)
//         break;
//       if(ordersNoDup[i].count === max){
//         mostPopularProducts.push(ordersNoDup[i])
//         ordersNoDup.splice(i,1)
//       }
//     }
//   }
//   return mostPopularProducts
// }
