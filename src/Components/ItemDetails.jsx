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
                <td>{item.brand}</td>
            </tr>
            <tr>
                <td>Classification</td>
                <td>Whisky</td>
            </tr>
            <tr>
                <td>Region</td>
                <td>{item.region}</td>
            </tr>
            <tr>
                <td>Style</td>
                <td>{item.type}</td>
            </tr>
            <tr>
                <td>ABV</td>
                <td>{item.abv}%</td>
            </tr>
            <tr>
                <td>Age Statement</td>
                <td>{item.age}</td>
            </tr>
        </tbody>
    </table>
</div>
  );
}
