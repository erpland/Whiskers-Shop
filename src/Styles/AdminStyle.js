import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: 60,
  },
  headline:{
    marginTop:40,
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
  },
  basicsContainer: {
    // width: 'inherit',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    justifyContent: 'space-between',
    // gap: '6%'
    height:'150px'
  },
  basicsBox: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 25,
    height: 100,
    boxShadow: '-2px 0px 20px 3px #ccc',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    alignItems: 'center',
  },
  basicsBoxText: {
    gridColumn: '2',
  },

  statsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10%',
    width: '100%',
    justifyItems: 'space-evenly'
  },
  statsLeft: {
    height: '580px',
    display: 'grid',
    gridTemplateRows: '1fr',
  },
  statsOrders: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: '20px 20px',
    boxShadow: '-2px 0px 20px 3px #ccc'
  },
  orderTable: {
    overflow: 'auto',
    maxHeight: '420px'
  },
  orderRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.7fr 0.5fr 1fr 1fr',
    alignItems: 'center',
    padding: 5,
    border: '1px solid #eee',
    '& $p': {
      padding: '3px 0',
      margin: 0
    },
    '& $img': {
      height: 40,
      objectFit: 'cover'
    }
  },
  statsRight: {
    borderRadius: 10,
    backgroundColor: '#fff',
    height: '580px',
    boxShadow: '-2px 0px 20px 3px #ccc',
  },
  rightGraphWrapper:{
    padding: '20px 20px',
  },
  rightGraph: {
    marginTop:50,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  productsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10%',
    width: '100%',
    justifyItems: 'space-evenly'
  },
  productsList: {
    boxShadow: '-2px 0px 20px 3px #ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    height: '680px',
  },
  productsTable: {
    overflow: 'auto',
    maxHeight: '580px'
  },
  productRowGrid: {
    display: 'grid',
    alignItems: 'center',
    border: '1px solid #eee',
    gridTemplateColumns: ' 30px 80px 1fr 1fr 1fr 60px 1fr',
    '& $img': {
      width: 70,
      height:70,
      objectFit:'scale-down'
    },
    '& $span':{
      cursor:'pointer',
      '&:hover':{
        color:'#777'
      }
    }
  },
  addProduct: {
    padding: '10px 20px',
    boxShadow: '-2px 0px 20px 3px #ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: '680px',
  },
  addProductTable: {},
  addProductForm: {
    display: 'grid',
    gridTemplateRows: '2fr 2fr auto 100px'

  },
  textboxs: {
    marginTop:10,
    paddingBottom: 20,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: 40
  },
  selects: {
    paddingBottom: 20,
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)'
  },

  usersContainer: {
  },
  usersList: {
    boxShadow: '-2px 0px 20px 3px #ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    height: '600px',
  },
  usersTable: {
    padding:'5px 20px',
    height:500,
    overflowY:'auto'
  },
  userRow: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '30px 2fr 1fr 1fr 1fr 1fr 1.5fr',
    border: '1px solid #eee',
    padding: 5,
    
    '& $span': {
      cursor:'pointer',
      '&:hover':{
        color:'#aaa'
      },
    },
  },
}));
export default useStyles