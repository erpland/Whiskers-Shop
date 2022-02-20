import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useStyles from '../Styles/ProfileStyle';
import Order from '../Components/Order';

export default function Profile(props) {
    const classes = useStyles();
    
    //כל הזמנה ממופה לאקורדיון נפרד
    let orders = props.orders.map((order, index) => <Order key={index} orderInfo={props.ordersInfo[index]} index={index + 1} order={order} />)
    return (
        <div style={{backgroundColor:'#F1F2F6'}}>
        <Container className={classes.container} maxWidth={"xl"}>
            <Typography variant='h2' borderBottom={'1px solid #ccc'} mb={10} className={classes.userTitle}>Welcome {props.currentUser.firstName} {props.currentUser.lastName}!</Typography>

            <div className={classes.orders}>
                <Typography mb={3} align={'left'} variant='h3'>Your Orders:</Typography>
                <div>
                    {orders}
                </div>
            </div>
        </Container>
        </div>
    )
}
