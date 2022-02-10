import { BrightnessMediumTwoTone } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme =>({
  container:{
    width:'100%',
    // justifyContent:'space-evenly',
    // alignItems:'center',
    // flexDirection:'column',
    // marginTop:100,
    minHeight:'100vh',
    // display:'flex !important',
    // display:'grid !important',
    // gridTemplateColumns:'30% 70%'
  },
  userTitle:{
    textTransform: 'capitalize',
    marginTop:'10% !important'
  },
  orders:{
    marginTop:'6% !important'
  },
  profileDetails:{
    textAlign:'left',
    width:'max-content',
    border:'1px solid #eee',
    display:'flex',
    flexDirection:'column',
    padding:30,
    boxShadow:'1px 0px 20px 2px #eee'
    
  },
  orderAccordion:{
    
    textAlign:'left',
    alignItems:'center',
    display:'flex',
    flexDirection:'column',
  },
  orderDetails:{
    fontSize:'23px',
    width:'100%',

    padding:'2px 5px',
 

    },
    product:{
      alignItems:'center',
      display:'grid',
      padding:'2px 10px',
      gridTemplateColumns:'2fr 1fr 1fr 1fr',
      border:'1px solid #eee',
      '& $img':{
        width:'90%',
    }
  },
  shipped:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly'
  }
}));

export default useStyles