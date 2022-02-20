import React from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { useForm } from 'react-hook-form';
import useStyles from '../Styles/UserStyle';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Register(props) {
    const classes = useStyles();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    //שימוש ספרייה חיצונית לבדיקת תיקנות כאשר הטופס תקין נייצר אובייקט של משתמש נעלה אותו ונעבור לדף התחברות
    const onSubmit = data => {
        data={...data, orders:[],ordersInfo:[]}
        props.addUser(data)
        navigate('/login')
    };

    const inputValues = [
        {name:'firstName',
        label:'First Name',
        type:'text',
        error:errors?.firstName, 
        pattern:/^[a-zA-Z ]{2,20}$/i,
        message:'English Letters Between 2-20',
        errors:errors.firstName?.message
    },
        {name:'lastName',
        label:'Last Name',
        type:'text',
        error:errors?.lastName,
        pattern:/^[a-zA-Z ]{2,30}$/i,
        message:'English Letters Between 2-30',
        errors:errors.lastName?.message
    },  
        {name:'email',
        label:'Email',
        type:'text',
        error:errors?.email,
        pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,}$/i,
        message:'Invalid Email Format',
        errors:errors.email?.message
    },  
        {name:'password',
        label:'Password',
        type:'password',
        error:errors?.password,
        pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/i,
        message:'Password Must Contain Atleast One Letter, Number and Special Charcter',
        errors:errors.password?.message
    },
    ]


    const inputs=inputValues.map((input)=><TextField key={input.name} variant='standard' label={input.label}
    fullWidth  type ={input.type} autoComplete={input.name}
    error={!!input.error}
    helperText={input.error ? input.errors : null}

    {...register(input.name, {
        required: 'Required Field',
        pattern: {
            value: input.pattern , message: input.message
        }
    })} />)


    return (
        <Container maxWidth={false} className={classes.container}>
            <CssBaseline />

            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <Typography variant = 'h3'>Sign Up</Typography>
                {inputs}
                <Button variant='contained' sx={{height:'40px',alignSelf:'center'}} type="submit">Signup</Button>
                <Typography variant = 'small'>Already Have An Account?
                <Link underline='none' to={'/login'} style={{color:'purple', fontWeight:'bold'}}> Login</Link>
                 </Typography>
            </form>
        </Container>
    )
}
