import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import useStyles from '../Styles/AdminStyle';
import AdminModal from '../Components/AdminModal';
export default function Admin(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedUser, setSelectedUser] = useState()
    let { products, users } = props

    const userClick = (user) => {
        setSelectedUser(user)
        setOpen(true)
    }

    let userRow = users.map((user, index) =>
        <div key={index} className={classes.row}>
            <p>{user.email}</p>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.orders.length}</p>
            <Button onClick={() => userClick(user)}>Show More</Button>
        </div>)
    return (

        <Container className={classes.container} maxWidth={'lg'}>
            <h1>Dashbord</h1>
            <div className={classes.stats}>

            </div>

            <div className={classes.users}>
                <h2>Users</h2>
                <div className={classes.table}>
                    <div className={classes.userDetails}>
                        <p>Email</p>
                        <p>First Name</p>
                        <p>Last Name</p>
                        <p>Order Amount</p>
                        <p>View Orders</p>
                    </div>
                    {userRow}
                </div>
            </div>

            <div className={classes.products}>

            </div>
            <div className={classes.addProduct}>

            </div>
            {selectedUser && <AdminModal open={open} setOpen={setOpen} data={selectedUser} />}
        </Container>
    );
}
