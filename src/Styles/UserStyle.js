import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
  container: {
    width:"100%",
    height:'100vh',
    backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(../images/whiskey+background.jpeg)',
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
    gridTemplateRows:'repeat(6, 1fr)'
    
  },
  loginForm: {
    
    padding:25,
    marginTop:'50px',
    borderRadius:'20px',
    backgroundColor:'#eee',
    boxShadow: '2px 0px 10px 1px #eee',
    width: '400px',
    maxHeight:'400px',
    display: 'grid',
    alignItems:'center',
    gridTemplateRows:'100px fit-content fit-content 100px 1fr 50px'
    // gridAutoRows:'fit-content'
    
  },
  loginError:{
    color:'red',
   
  },
  button:{
    height:'50px',
    marginTop:50,
  },
  link:{
    alignSelf:'end',
    gridRow:'6'
  }
}));

export default useStyles