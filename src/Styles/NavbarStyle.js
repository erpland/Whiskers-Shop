import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme =>({
cartContainer:{
    display:'grid',
    alignItems:'flex-start',
    gridTemplateRows:'1fr 400px 1fr 1fr'
},
cartItems:{
    // minHeight:'400px',
    display:'grid',
    gridTemplateColumns:'6fr 1fr 1fr'
},
product:{
    gridColumn:'1/4',
    display:'grid',
    gridTemplateColumns:'6fr 1fr 1fr',
    border:'1px solid #eee',
    '&:$hover':{
        background:'#eee'
    }

},
cartTotal:{
    alignSelf:'flex-end',
    display:'grid',
    gridTemplateColumns:'6fr 1fr 1fr'
},
cartBtns:{
    display:'flex',
    justifyContent:'flex-end',
    alignSelf:'flex-end'
},
cartIcon:
{
    position:'relative',
    '&$small':{
        position:'absolute',
        top:0,
        right:0,
    },
}

}));

export default useStyles