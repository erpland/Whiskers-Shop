import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
  
  container: {
    
    width:"100%",
    height:'100vh',
    backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../images/whiskey+background.jpeg)',
    display:'flex !important',
    justifyContent:'center',
  },
  form: {
    
    padding:20,
    marginTop:'50px',
    borderRadius:'20px',
    backgroundColor:'#eee',
    boxShadow: '2px 0px 10px 1px #eee',
    width: '400px',
    height:'550px',
    display: 'grid',
    gridTemplateRows:'70px repeat(3, 82px) 90px 80px auto'
    
  },
  loginForm: {
    
    padding:20,
    marginTop:'50px',
    borderRadius:'20px',
    backgroundColor:'#eee',
    boxShadow: '2px 0px 10px 1px #eee',
    width: '400px',
    height:'400px',
    display: 'grid',
    alignItems:'center',
    gridTemplateRows:'75px 79px 77px 74px 37px 30px'
    // gridAutoRows:'fit-content'
    
  },
  loginError:{
    color:'red',
   
  },
  button:{
    height:'40px',
    alignSelf:'end'
  },
  link:{
    alignSelf:'end',
    gridRow:'6'
  }
}));

export default useStyles