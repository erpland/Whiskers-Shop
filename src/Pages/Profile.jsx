import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import useStyles from '../Styles/ProfileStyle';

export default function Profile() {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth={"xl"}>
            <Typography variant='h2'>Hi Username</Typography>
            {/* <div className={classes.profileDetails}>
                <Typography variant='h5'><b>First Name:</b> Ori</Typography>
                <Typography variant='h5'><b>Last Name:</b> Winboim</Typography>
                <Typography variant='h5'><b>Email: </b>kofe@kofe.com</Typography>


            </div> */}

            <div className={classes.orders}>
                <Typography variant='h3'>Your Orders</Typography>
                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Order #1</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.orderAccordion}>

                            <div className={classes.orderDetails}>
                                <div className={classes.product}>
                                    <p style={{ fontWeight: 'bold' }}>Item</p>
                                    <p style={{ fontWeight: 'bold' }}>QTY</p>
                                    <p style={{ fontWeight: 'bold' }}>Price</p>
                                </div>



                                <div className={classes.product}>
                                    <p >Glenmornagie</p>
                                    <p >2</p>
                                    <p >3</p>
                                    <img src="../shop/ardbeg-an-oa-ps.jpg" alt="" />
                                </div>
                                <div className={classes.product}>
                                    <p >Glenmornagie</p>
                                    <p >2</p>
                                    <p >3</p>
                                    <img src="../shop/ardbeg-an-oa-ps.jpg" alt="" />
                                </div>
                                <div className={classes.product}>
                                    <p >Glenmornagie</p>
                                    <p >2</p>
                                    <p >3</p>
                                    <img src="../shop/ardbeg-an-oa-ps.jpg" alt="" />
                                </div>





                                <div className={classes.product}>
                                    <p><b>TOTAL:</b></p>
                                    <p>5</p>
                                    <p>120$</p>
                                    <div className={classes.shipped}>
                                        <LocalShippingIcon color='success' sx={{ fontSize: '40px' }} />
                                        <Typography color='success' variant='p'>Order Shipped</Typography>
                                    </div>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
        </Container>
    )
}
