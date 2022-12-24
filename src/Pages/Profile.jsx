import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useStyles from '../Styles/ProfileStyle';
import Order from '../Components/Order';

export default function Profile(props) {
    const classes = useStyles();
   
    let hasOrders = props.currentUser.Orders[0].Items.length !==0
    let orders = props.currentUser.Orders.sort((a,b)=>{
        return new Date(a.DateTime) - new Date(b.DateTime)
    })
    .map((order, index) => <Order key={index} index={index + 1} order={order} />)
    return (
        <div style={{backgroundColor:'#F1F2F6'}}>
        <Container className={classes.container} maxWidth={"xl"}>
            <Typography variant='h2' borderBottom={'1px solid #ccc'} mb={10} className={classes.userTitle}>Welcome {props.currentUser.FirstName} {props.currentUser.LastName}!</Typography>

            {hasOrders && <div className={classes.orders}>
                <Typography mb={3} align={'left'} variant='h3'>Your Orders:</Typography>
                <div>
                    {orders}
                </div>
            </div>}
        </Container>
        </div>
    )
}
