import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme =>({
  container:{
    display:'grid !important',
    gridTemplateColumns:'1fr 1fr',
    margin:'100px 0',
    gap:10,
  '& $img':{
    width:'100%',
    gridRow:'1/3',
    
  }
  },
  
  itemHeadline:{
    textAlign:'left !important',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    gap:10
  },
  buyInfo:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start'
  },
  description:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    alignContent:'flex-start',
    gridColumn:'1/3',
    '& $span':{
      textAlign:'left'
    }
  },
  details:{
    display:'flex',
    justifyContent:'center',
    gridColumn:'1/3',
    '& $table':{
      width:'100%',
      '& $tr':{
        borderBottom:'1px solid #ccc',
        display:'grid',
        justifyItems:'start',
        gridTemplateColumns:'1fr 1fr',
        width:'100%'
      }
    }
  },
  tasteChart:{
    marginTop:20,
    textAlign:'left',
    gridColumn:'1/3'
  },

}));

export default useStyles