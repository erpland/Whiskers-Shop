import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme =>({
  ProductCard: {
    minHeight: '380px',
    padding: 10,
    border: '1px solid #eee',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& $img': {
      width: '100%'
    },
  },
  ProductInfo: {
    padding: 5,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '70% 30%',
    '& $Button': {
      borderRadius: '20px',
      width: '100%',
      gridRow: '1/3',
      gridColumn: '2',
      maxHeight: '50px',
      alignSelf: 'center'
    },
  },
}));

export default useStyles