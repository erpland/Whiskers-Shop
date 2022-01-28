import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
  container: {
    width:"100%",
    height:'100vh',
    backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(../images/formsBack.jpeg)',
    display:'flex !important',
    justifyContent:'center',
  },
  form: {
    
    padding:20,
    marginTop:'50px',
    borderRadius:'20px',
    background:'rgba(220, 220, 220, 1)',
    boxShadow: '2px 0px 10px 1px #eee',
    width: '370px',
    maxHeight:'500px',
    display: 'grid',
    
  }
}));

export default useStyles