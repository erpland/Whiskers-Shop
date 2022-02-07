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
import { Email } from '@mui/icons-material';
import { useState } from 'react';

export default function Login(props) {

    const [isValid, setIsValid] = useState(true)
    const navigate = useNavigate();
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        let userList = props.users
        if(data.email === 'admin' && data.password === 'admin123'){
            navigate('/admin')
        }
        let currentUser = userList.filter((user) => user.email === data.email && user.password === data.password)
        if (currentUser.length !== 0) {
            props.setUser(currentUser[0])
            navigate('/profile')
        }
        else {
            setIsValid(false)
        }




    };
    return (
        <Container maxWidth={false} className={classes.container}>
            <CssBaseline />
            <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
                <Typography variant='h3'>Login</Typography>

                <TextField variant='standard' label='Email'
                    fullWidth type='text' autoComplete='email'
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                    {...register('email', {
                        required: 'Required Field',
                    })} />

                <TextField variant='standard' label='Password'
                    fullWidth type='password' autoComplete='password'
                    error={!!errors?.password}
                    helperText={errors?.password ? errors.password.message : null}
                    {...register('password', {
                        required: 'Required Field',
                    })} />
                <Button className={classes.button} variant='contained' type="submit">Login</Button>
                {!isValid && <p className={classes.loginError}>User Not Found, Check Your Fields</p>}
                <Typography className={classes.link} variant='small'>Dont Have An Account?
                    <Link underline='none' to={'/register'}>Sign Up</Link>
                </Typography>
            </form>
        </Container>
    )
}
