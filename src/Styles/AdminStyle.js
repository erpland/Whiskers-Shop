import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: 60,
  },
  basicsContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    justifyItems: 'center',
    gap: '3%'
  },
  basicsBox: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 25,
    width: '90%',
    height: 100,
    boxShadow: '-2px 0px 20px 3px #ccc',
    display: 'grid',
    gridTemplateColumns: '70% 30%',
    alignItems: 'center'
  },
  basicsBoxText: {
    gridColumn: '2',
    gridRow: '1/3'
  },

  statsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    // gridTemplateRows: '1fr 1fr',
    gap: '10%',
    width: '100%',
    justifyItems: 'space-evenly'
  },
  statsLeft: {
    height: '60vh',
    display: 'grid',
    gridTemplateRows: '1fr',
    gap: 30,

  },
  statsOrders: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: '20px 30px',
    height: '55vh',
    width: '90%',
    boxShadow: '-2px 0px 20px 3px #ccc'
  },
  orderTable: {
    overflow: 'auto',
    maxHeight: '40vh'
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
      // width:80,
      height: 40,
      objectFit: 'cover'
    }
  },
  statsStats: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 30,
  },
  statsBox: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    height: '20vh',
    width: '90%',
    boxShadow: '-2px 0px 20px 3px #ccc'
  },
  statsRight: {
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: '20px 0',
    height: '55vh',
    width: '90%',
    boxShadow: '-2px 0px 20px 3px #ccc',
  },
  rightGraph: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 30
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
    height: '70vh',
  },
  productsTable: {
    overflow: 'auto',
    maxHeight: '55vh'
  },
  productRowGrid: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: ' 30px 90px repeat(5, 1fr)',
    '& $img': {
      width: 80,
    },
  },
  addProduct: {
    padding: '10px 20px',
    boxShadow: '-2px 0px 20px 3px #ccc',
    borderRadius: 10,
    // padding: 10,
    backgroundColor: '#fff',
    height: '70vh',
  },
  addProductTable: {},
  addProductForm: {
    display: 'grid',
    gridTemplateRows: '2fr 2fr auto 100px'

  },
  textboxs: {
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
    height: '70vh',
  },
  usersTable: {},
  userRow: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '30px 2fr 1fr 1fr 1fr 1fr 1.5fr',
    '& $span': {
      cursor:'pointer',
      '&:hover':{
        color:'#aaa'
      },
    },
  },



}));
export default useStyles