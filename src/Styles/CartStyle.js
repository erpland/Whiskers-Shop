import { BrightnessMediumTwoTone } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
  cartContainer: {
    display: 'grid',
    alignItems: 'flex-start',
    gridTemplateRows: '1fr 400px 1fr 1fr'
  },
  cartHeadline: {
    padding:'2px 6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #aaa',
    paddingBottom: 7,
  },
  closeBtn: {
    cursor: 'pointer',
    padding: 5,
    '&:$hover': {
      color: '#aaa',

    }
  },
  cartItems: {
    height: '400px',
    overflow: 'auto',
    display: 'grid',
    gridTemplateColumns: '4fr 0.7fr 78px',
    gridAutoRows: 'min-content'
  },
  product: {
    padding: 4,
    gridColumn: '1/5',
    display: 'grid',
    gridTemplateColumns: '7% 65% 10% 18%',
    border: '1px solid #eee',
    '&:$hover': {
      background: '#eee'
    }

  },
  cartTotal: {
    padding:'2px 6px',
    alignSelf: 'flex-end',
    display: 'grid',
    gridTemplateColumns: '6fr 7% 1fr 1fr'
  },
  cartBtns: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    '& $Button': {
      maxHeight: '50px',
      borderRadius: '20px',
    }
  }
}));

export default useStyles