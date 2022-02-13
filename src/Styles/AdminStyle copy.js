import { makeStyles } from '@mui/styles';
import { borderRadius } from '@mui/system';
const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
  },
  closeBtn: {
    alignSelf: 'flex-end',
    cursor: 'pointer',
    padding: 5,
    '&:$hover': {
      color: '#aaa',
    },
  },
  stats: {

  },

  users: {
    minHeight:'80vh'
  },
  product: {
    minHeight:'80vh'
  },
  addProduct: {
    minHeight:'80vh'
  },
  table: {
    boxShadow: '-2px 0 20px 10px #eee',
    borderRadius: 20,
    padding: 20,
    height:'60vh',
    overflowY:'auto'
  },
  userDetails: {
    border: '1px solid #eee',
    display: 'grid',
    '& $p': {
      fontWeight: 'bold'
    },
  },
  row: {
    border: '1px solid #eee',
    display: 'grid',
  
    '& $img':{
      width:80,
    },
    '&:$hover': {
      backgroundColor: 'rgba(100,100,100, 0.1);'
    },
    '& $b':{
      cursor:'pointer',
      '&:$hover':{
        color:'#aaa'
      }
    },
  },
  userRowGrid:{
    
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
  productRowGrid:{
    alignItems:'center',
    gridTemplateColumns: ' 30px 90px repeat(5, 1fr)',
  },
  modalTitle: {
    paddingBottom:20,
    marginBottom:30,
    textTransform: 'capitalize',
    borderBottom:'1px solid #ccc'
  },
  textboxs:{
    padding:30,
    display:'grid',
    gridTemplateColumns:'1fr 1fr'
  },
  textbox:{
    width:'80% !important'
  },
  selects:{
    padding:'30px',
    display:'grid',
    gridTemplateColumns:'repeat(5, 1fr)'
  },
}));

export default useStyles