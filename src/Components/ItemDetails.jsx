import React from 'react';
import useStyles from '../Styles/ItemStyle';
import Typography from '@mui/material/Typography';

export default function ItemDetails(props) {

  const classes = useStyles();
  let item = props.item
  return (
    <div className={classes.details}>
    <table>
        <tbody>
            <tr>
                <th><Typography variant='h4'>Product Details</Typography></th>
            </tr>
            <tr>
                <td>Distillery/Brand</td>
                <td>{item.BrandName}</td>
            </tr>
            <tr>
                <td>Classification</td>
                <td>Whisky</td>
            </tr>
            <tr>
                <td>Region</td>
                <td>{item.RegionName}</td>
            </tr>
            <tr>
                <td>Style</td>
                <td>{item.TypeDesc}</td>
            </tr>
            <tr>
                <td>ABV</td>
                <td>{item.ABV}%</td>
            </tr>
            <tr>
                <td>Age Statement</td>
                <td>{item.Age}</td>
            </tr>
        </tbody>
    </table>
</div>
  );
}
