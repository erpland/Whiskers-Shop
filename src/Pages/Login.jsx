import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { useForm } from "react-hook-form";
import useStyles from "../Styles/UserStyle";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { login } from "../Data/database";

export default function Login(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true); //סטייט בולאני לטובת אימות אם המשתמש אינו קיים במערך נציג הודעה לפי הסטייט הזה

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //בדיקה האם המשתמש הוא אדמין נעביר אותו לדף אדמין ישר
    if (data.email === "admin" && data.password === "admin123") {
      props.setIsAdmin(true); //מעדכנים את הסטייט אצל האבא שאדמין התחבר
      localStorage.setItem("isAdmin", true); // שמירה בלוקל לטובת מניעת התנתקות בעת רענון
    } else {
      //פילטור מערך המשתמשים לפי המשתמש שהוכנס
      let currentUser = await login(data);
      if (currentUser) {
        props.setUser(currentUser);
        navigate("/profile");
      }
      //אם הגענו לכאן כלמר שהמשתמש שהוכנס אינו קיים ולכן נשנה את הסטייט שיגרום להצגת הודעה בהתאם
      else {
        setIsValid(false);
      }
    }
  };
  //אם לא השתמשנו ביוז אפקט להעביר לדף אדמין הוא צעק עלינו
  //לשאול את ניר מדוע
  useEffect(() => {
    if (props.isAdmin) navigate("/admin");
  }, [props.isAdmin, navigate]);

  return (
    <Container maxWidth={false} className={classes.container} 
    style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../images/background.jpg")',}}>
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
        <Typography variant="h3">Login</Typography>

        <TextField
          variant="standard"
          label="Email"
          name="Email"
          fullWidth
          type="text"
          autoComplete="email"
          error={!!errors?.email}
          helperText={errors?.email ? errors.email.message : null}
          {...register("email", {
            required: "Required Field",
          })}
        />

        <TextField
          variant="standard"
          label="Password"
          name="Password"
          fullWidth
          type="password"
          autoComplete="password"
          error={!!errors?.password}
          helperText={errors?.password ? errors.password.message : null}
          {...register("password", {
            required: "Required Field",
          })}
        />
        <Button className={classes.button} variant="contained" type="submit">
          Login
        </Button>
        {!isValid && (
          <p className={classes.loginError}>
            User Not Found, Check Your Fields
          </p>
        )}
        <Typography className={classes.link} variant="small">
          Dont Have An Account?
          <Link
            underline="none"
            to={"/register"}
            style={{ color: "purple", fontWeight: "bold" }}
          >
            {" "}
            Sign Up
          </Link>
        </Typography>
      </form>
    </Container>
  );
}
