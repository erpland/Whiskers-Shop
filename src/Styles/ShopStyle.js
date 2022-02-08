import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
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
      width: '100%',
      cursor: 'pointer',
      transition: 'transform 1s',
      '&:$hover': {
        transform: 'scale(1.1)'
      }
    },
  },
  ProductInfo: {
    zIndex:'2',
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
  shopHeader: {
    overflow: 'hidden',
    width: '100%',
    background: 'rgb(238,238,238)',
    background: 'radial-gradient(circle, rgba(238,238,238,1) 0%, rgba(204,204,204,1) 100%)',
    Height: '600px',
    display: 'flex !important',
    marginBottom: 20,
    boxShadow: '1px 0 20px 2px #eee'
  },
  headerContainer: {
    display: 'grid',
    gridTemplateColumns: '45% 10% 45%',
    gridTemplateRows: 'auto,50px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerImg: {
    maxHeight: '600px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& $img': {
      mixBlendMode: 'multiply',
      width: '60%',
      objectFit: 'cover',
      zIndex: '5',
      cursor: 'pointer',
      transition: 'transform 1s',
      '&:$hover': {
        transform: 'scale(1.1)'
      }
    },
  },

  headerCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  verticalLine: {
    borderLeft: '1px solid #ccc',
    height: '300px',
    width: 1
  },

  headerRight: {
    position: 'relative',
    marginLeft: '50px',
  },
  headerText: {
    position: 'relative',
    zIndex: 999,
    textAlign: 'left'
  },

  shape: {
    borderRadius: '50px',
    top: '50%',
    left: '20%',
    transform: 'translate(-50%, -50%) rotate(45deg)',
    minHeight: '300px',
    minWidth: '300px',
    backgroundColor: '#ccc',
    position: 'absolute',
    zIndex: 1,
  },
  btnContainer: {
    alignSelf: 'flex-start',
    gridColumn: '1/4', width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'flex-start',
    padding: 10
  },
  carouselBtn: {
    cursor: 'pointer',
    width: 20,
    height: 20,
    backgroundColor: '#aaa',
    display: 'block',
    borderRadius: '50%',
    margin: '0 10px',
    '&:hover': {
      filter: 'brightness(50%)',
      backgroundColor: 'white'
    },

  }
}));

export default useStyles