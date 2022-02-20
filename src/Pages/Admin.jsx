import useStyles from '../Styles/AdminStyle';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useState } from 'react';
import SalesChart from '../Components/SalesChart';
import AdminOrderRow from '../Components/AdminOrdersRow'
import AdminModal from '../Components/AdminModal';
import AddProduct from '../Components/AddProduct';
import Button from '@mui/material/Button'
import AdminProductList from '../Components/AdminProductList';
import AdminUsers from '../Components/AdminUsers';
import { useNavigate } from 'react-router-dom';
import AdminHeaders from '../Components/AdminHeaders';


export default function Admin(props) {
  const classes = useStyles(props);
  const navigate = useNavigate();

  let { products, users } = props

  const [open, setOpen] = useState(false); // פתיחה/סגירה של מודל הזמנות
  const [data, setData] = useState()
  const [orderInfo, setOrderInfo] = useState()

  let totalOrdersAmount = users.map(user => user.orders.length).reduce((prev, current) => { return prev + current }, 0)
  let allOrdersDates = users.map(user => user.ordersInfo).flat()
  let totalProfits = allOrdersDates.reduce((a, b) => { return a + b.totalPrice }, 0).toFixed(2)


  let userOrderList = users.map((user, index) => <AdminOrderRow key={index} user={user}
    setData={(data) => setData(data)} setOpen={(open) => setOpen(open)} setOrderInfo={(info) => setOrderInfo(info)} />)

  const logOutAdmin = () => { // התנתקות האדמין
    props.setIsAdmin(false)
    localStorage.setItem('isAdmin', false)
    navigate('/')
  }
  return (
    <div style={{ backgroundColor: '#F1F2F6', paddingBottom: 80, }}>

      <Container maxWidth="xl">
        <div className={classes.container}>
          <div className={classes.headline}>
            <Typography borderBottom={'1px solid #ccc'} align={'left'} sx={{ width: '90%' }} variant="h4" color="initial">Dashboard</Typography>
            <Button sx={{ height: 50, }} color="error" variant='contained' onClick={logOutAdmin}>Logout</Button>
          </div>
          
          <div className={classes.basicsContainer}>
            <AdminHeaders headline={'Orders'} data={totalOrdersAmount} text={'Total Orders'}/>
            <AdminHeaders headline={'Users'} data={users.length} text={'Total Users'}/>
            <AdminHeaders headline={'Profits'} data={totalProfits} text={'Total Profits'}/>
          </div>

          <div className={classes.statsContainer}>
            <div className={classes.statsLeft}>
              <div className={classes.statsOrders}>
                <Typography variant="h5" align='left' fontWeight={'bold'} borderBottom={'1px solid #ccc'} padding={1} color="initial">Orders</Typography>
                <div style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 10 }} className={classes.orderRow}>
                  <p><b>Name</b></p>
                  <p><b>Date</b></p>
                  <p><b>Qty</b></p>
                  <p><b>Total</b></p>
                  <p><b>More</b></p>
                </div>
                <div className={classes.orderTable}>
                  {userOrderList}
                </div>
              </div>

            </div>

            <div className={classes.statsRight}>
              <div className={classes.rightGraphWrapper}>
                <Typography variant="h5" align='left' fontWeight={'bold'} borderBottom={'1px solid #ccc'} padding={1} color="initial">Last 7 Days Profit</Typography>
                <div className={classes.rightGraph}>
                  <SalesChart dates={allOrdersDates} />
                </div>
              </div>
            </div>
          </div>

          <div className={classes.usersContainer}>
            <AdminUsers deleteUser={props.deleteUser} setOpen={setOpen} setData={setData} users={users} orderInfo={orderInfo} setOrderInfo={setOrderInfo} />
          </div>

          <div className={classes.productsContainer}>
            <AdminProductList products={products} deleteProduct={props.deleteProduct} updateProductPrice={props.updateProductPrice} />
            <AddProduct addProduct={props.addProduct} products={products} />

          </div>
        </div>
      </Container>
      {data && <AdminModal open={open} setOpen={setOpen} data={data} orderInfo={orderInfo} />} 
    </div>
  );
}


