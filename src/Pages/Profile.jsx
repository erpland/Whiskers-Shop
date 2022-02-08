import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import useStyles from '../Styles/ProfileStyle';
import Order from '../Components/Order';

export default function Profile(props) {
    const classes = useStyles();
    let orders = props.orders.map((order, index)=><Order key={index} index={index+1} order={order}/>)
    return (
        <Container className={classes.container} maxWidth={"xl"}>
            <Typography variant='h2' className={classes.userTitle}>Hi {props.currentUser.firstName} {props.currentUser.lastName}!</Typography>

            <div className={classes.orders}>
                <Typography variant='h3'>Your Orders:</Typography>
                <div>
                    {orders}
                </div>
            </div>
        </Container>
    )
}
