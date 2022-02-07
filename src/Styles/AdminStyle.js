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

  },
  table: {
    boxShadow: '-2px 0 20px 10px #eee',
    borderRadius: 20,
    padding: 20
  },
  userDetails: {
    border: '1px solid #eee',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    '& $p': {
      fontWeight: 'bold'
    },
  },
  row: {
    border: '1px solid #eee',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    '&:$hover': {
      backgroundColor: 'rgba(100,100,100, 0.1);'
    }
  },
  modalTitle: {
    paddingBottom:20,
    marginBottom:30,
    textTransform: 'capitalize',
    borderBottom:'1px solid #ccc'
  }
}));

export default useStyles