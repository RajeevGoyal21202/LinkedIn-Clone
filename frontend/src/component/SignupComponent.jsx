import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "./Style/signup.css";
import IconButton from "@mui/material/IconButton";
import {Button, Stack, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authAction";

const SignupComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Error, setError] = useState({
    password: null,
    email: null,
  });
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function password_validate(password) {
    return (
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      !/[aeiou]/.test(password) &&
      /^[@#][A-Za-z0-9]{7,13}$/.test(password)
    );
  }
  const handleChangeEmail = (e) => {
    const data = e.target.value;
    if (data === "" && !isValidEmail(data)) {
      setError((pre) => ({ ...pre, email: true }));
    } else {
      setError((pre) => ({ ...pre, email: false }));
    }
    setdata((pre) => ({ ...pre, email: data }));
  };

  const handleChangPassword = (e) => {
    const data = e.target.value;
    if (data === "" && !password_validate(data)) {
      setError((pre) => ({ ...pre, password: true }));
    } else {
      setError((pre) => ({ ...pre, password: false }));
    }
    setdata((pre) => ({ ...pre, password: data }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async () => {
    dispatch(registerUser(data))
      .unwrap()
      .then((res) => {
        console.log(res);
        console.log("hello");
        if (res.status === 200 || res.status === 201) {
          navigate("/login");
        }
      })
      .catch((err) => {
        alert(err);
        console.log("err", err);
      });
  };

  return (
    <div className="SignupComponent">
      <div className="main">
        <div className="header">
          <div className="logo">
            <img
              src={Logo}
              alt="LinkedIn"
              style={{
                width: "135px",
                height: "33px",
                position: "relative",
                top: "0px",
              }}
            ></img>
          </div>
        </div>
      </div>
      <div className="signtext">
        <p>Make the most of your professional life </p>
      </div>
      <div className="box">
        <div className="signup-box">
          <div className="contenet">
            <div className="input-box">
              <label>Email or phone number</label>
              <div className="text-field">
                <TextField
                  className="email"
                  size="small"
                  type="email"
                  value={data.email}
                  onChange={handleChangeEmail}
                  sx={{ height: "30px" }}
                />
              </div>
            </div>
            <div className="label2">
              <label>Password (6+ characters)</label>
            </div>
            <div className="password">
              <FormControl
                sx={{
                  "& .MuiFilledInput-underline:after": {
                    borderBottom: "none",
                  },
                }}
                variant="filled"
              >
                <InputLabel htmlFor="filled-adornment-password"></InputLabel>
                <TextField
                  sx={{
                    width: "348px",
                    paddingLeft: "6px",
                    height: "30px !important",
                  }}
                  Input
                  id="filled-adornment-password"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  value={data.password}
                  onChange={handleChangPassword}
                  endAdornment={
                    <InputAdornment position="center">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <>
                            <p className="show">Show</p>
                          </>
                        ) : (
                          <>
                            <p className="show">Hide</p>
                          </>
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="para">
              <p>
                By clicking Agree & Join, you agree to the LinkedIn{" "}
                <span>User Agreement, Privacy Policy,</span> and{" "}
                <span>Cookie Policy. </span>
              </p>
            </div>
            <div className="sign-button">
              <Button
                variant="contained"
                sx={{ textTransform: "capitalize" }}
                onClick={handleSubmit}
              >
                Agree & join
              </Button>
            </div>
            <div className="choice_seprator">
              <p className="or"> or </p>
            </div>
            <div className="google-btn">
              <Button
                variant="outlined"
                sx={{
                  width: "323px",
                  height: "38px",
                  borderRadius: "15px ",
                  color: "black",
                  border: "1px solid black",
                  textTransform: "capitalize",
                }}
              >
                <div className="google">
                  <span>
                    <img src={google} alt="google"></img>
                  </span>
                  <p>Continue with Google</p>
                </div>
              </Button>
            </div>
            <div className="sign-in">
              <p>
                Already on LinkedIn?
                <span>
                  <Link to="/Login">Sign in </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Stack>
        <Typography
          textAlign="center"
          bgcolor={"#f3f2f0"}
          sx={{ pt: 2, pb: 5 }}
        >
          Looking to create a page for a business? Get help
        </Typography>
      </Stack>
    </div>
  );
};

export default SignupComponent;
