export const encpsulateBottle = (data, barcode) => {
  const regions = getRegion(data.region, data.country);
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
      TypeDesc: "Single Malt",
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
    case "Highlands":
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
          return { region: 8, country: 2 };
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
