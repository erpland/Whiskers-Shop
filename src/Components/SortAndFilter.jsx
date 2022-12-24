import React, { useState } from 'react'
import useStyles from '../Styles/ShopStyle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
export default function SortAndFilter(props) {

    const abvsJson =
        [
            { name: 'All', min: 0, max: 100 },
            { name: 'Up To 43%', min: 0, max: 43 },
            { name: '43% - 46%', min: 43, max: 46 },
            { name: 'Above 46%', min: 46, max: 100 }
        ]

    const classes = useStyles()
    const [type, setType] = useState('All');
    const [brand, setBrand] = useState('All');
    const [abv, setAbv] = useState('All');
    const [country, setCountry] = useState('All');
    
    const [abvValues, setAbvValues] = useState(abvsJson[0]) 

    const setAbvs = (event) => {
        setAbvValues(abvsJson.filter(a => a.name === event.target.value)[0])
        setAbv(event.target.value)
    }
    
    let orginalProducts = [...props.originalProducts] 
    let sortedProducts = [...props.products] 
 
 
    let typesMenu = [...new Set([...orginalProducts].map(prod => prod.TypeDesc))].map((type, index) => <MenuItem key={index} value={type}>{type}</MenuItem>)
    let brandsMenu = [...new Set([...orginalProducts].map(prod => prod.BrandName))].map((brand, index) => <MenuItem key={index} value={brand}>{brand}</MenuItem>)
    let countryMenu = [...new Set([...orginalProducts].map(prod => prod.CountryName))].map((country, index) => <MenuItem key={index} value={country}>{country}</MenuItem>)
  
    let abvMenu = abvsJson.map((abv, index) => <MenuItem key={index} value={abv.name}>{abv.name}</MenuItem>)


    useEffect(() => {
        sortedProducts = [...orginalProducts]
        
        if (type !== 'All') {
            sortedProducts = sortedProducts.filter(prod => prod.TypeDesc === type)
        }

        if (brand !== 'All') {
            sortedProducts = sortedProducts.filter(prod => prod.BrandName === brand)
        }
        if (abvValues.name !== 'All') {
            sortedProducts = sortedProducts.filter(prod => prod.ABV > abvValues.min && prod.ABV <= abvValues.max)
        }
        if (country !== 'All') {
            sortedProducts = sortedProducts.filter(prod => prod.CountryName === country)
        }
        props.setSortedProducts(sortedProducts)

        return () => {
            sortedProducts = [...orginalProducts]
        }
    }, [type, brand, abvValues,country])


    return (
        <div className={classes.filterContainer}>
            <div className={classes.selects}>
                <FormControl sx={{minWidth:200}}>
                    <InputLabel id="type-select-label">Type</InputLabel>
                    <Select
                        labelId="type-select-label"
                        id="type-select"
                        value={type}
                        label="type"
                        name="type"
                        onChange={(e) => setType(e.target.value)}
                    >
                        <MenuItem value={'All'}>All</MenuItem>
                        {typesMenu}

                    </Select>
                </FormControl>

                <FormControl sx={{minWidth:200}}>
                    <InputLabel id="brand-select-label">Brand</InputLabel>
                    <Select
                        labelId="brand-select-label"
                        id="brand-select"
                        value={brand}
                        label="brand"
                        name="brand"
                        onChange={(e) => setBrand(e.target.value)}
                    >
                        <MenuItem value={'All'}>All</MenuItem>
                        {brandsMenu}

                    </Select>
                </FormControl>


                <FormControl sx={{minWidth:200}}>
                    <InputLabel id="abv-select-label">Abv</InputLabel>
                    <Select
                        labelId="abv-select-label"
                        id="abv-select"
                        value={abv}
                        label="abv"
                        name="abv"
                        onChange={setAbvs}
                    >
                        {abvMenu}

                    </Select>
                </FormControl>
                <FormControl sx={{minWidth:200}}>
                    <InputLabel id=" country-select-label">Country</InputLabel>
                    <Select
                        labelId="country-select-label"
                        id="country-select"
                        value={country}
                        label="country"
                        name="country"
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <MenuItem value={'All'}>All</MenuItem>
                        {countryMenu}

                    </Select>
                </FormControl>

            </div>
            <div className={classes.sorts}>
                <i data-name="brand-down" className="fas fa-sort-alpha-down active" onClick={() => props.setSortedProducts(sortedProducts.sort((a, b) => (a.BrandName > b.BrandName) ? 1 : -1))}></i>
                <i data-name="brand-up" className="fas fa-sort-alpha-up" onClick={() => props.setSortedProducts(sortedProducts.sort((a, b) => (a.BrandName < b.BrandName) ? 1 : -1))}></i>
                <i data-name="price-down" className="fas fa-sort-numeric-down" onClick={() => props.setSortedProducts(sortedProducts.sort((a, b) => (a.Price - b.Price)))}></i>
                <i data-name="price-up" className="fas fa-sort-numeric-up" onClick={() => props.setSortedProducts(sortedProducts.sort((a, b) => (b.Price - a.Price)))}></i>
            </div>
        </div>
    )
}
