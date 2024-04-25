import React, { useState } from "react";
import logo from "../assets/Logo.png";
import "../component/Style/login.css";
import {
  Button,
  FilledInput,
  OutlinedInput,
  Paper,
  Stack,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import google from "../assets/google-icon.png";
import apple from "../assets/apple.png";
import link from "../assets/link.png";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authAction";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    console.log("frontend", email, password);
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((res) => {
        if (res.data.message === "Login Sucessfully") {
          navigate("/home");
        }

        console.log("response - ", res);
      });
  };
  return (
    <div className="login-Component">
      <div className="logo">
        <img src={logo} alt="Linkedin"></img>
      </div>
      <div className="signup-container">
        <Paper elevation={3} sx={{ height: "613px", width: "352px" }}>
          <div className="content">
            <div className="heading">
              <p>Sign in</p>
            </div>
            <div className="h-para">
              <p>Stay updated on your professional world </p>
              <div className="inputs">
                <div className="email">
                  <TextField
                    id="standard-basic"
                    label="Email or Phone"
                    size="medium"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      backgroundColor: "white",
                      width: "302px",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="password2">
                  <FormControl
                    sx={{
                      mt: 1,
                      width: "25ch",
                      "& .MuiFilledInput-underline:after": {
                        borderBottom: "none",
                      },
                    }}
                    label="Password"
                    variant="outlined"
                  >
                    <InputLabel
                      htmlFor="filled-adornment-password"
                      sx={{ paddingBottom: "10px" }}
                    >
                      Password
                    </InputLabel>
                    <OutlinedInput
                      label="password"
                      Input
                      id="filled-adornment-password"
                      size="medium"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{
                        width: "302px",
                        color: "black",
                      }}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            // onMouseDown={handleMouseDownPassword}
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
              </div>
              <div className="forget">
                <p>Forgot password?</p>
              </div>
              <div className="signin-button">
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    width: "304px",
                    height: "52px",
                    borderRadius: "20px",
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </div>
              <div className="choice_seprator">
                <p className="or"> or </p>
              </div>
              <div className="para2">
                <p>
                  By clicking Agree & Join, you agree to the LinkedIn{" "}
                  <span>User Agreement, Privacy Policy,</span> and{" "}
                  <span>Cookie Policy. </span>
                </p>
              </div>
              <div className="buttons">
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
                <div className="apple-btn">
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
                        <img src={apple} alt="apple"></img>
                      </span>
                      <p>Sign in with Apple</p>
                    </div>
                  </Button>
                </div>
                <div className="link-btn">
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
                        <img src={link} alt="link"></img>
                      </span>
                      <p>Sign in with one-time link</p>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Paper>
        <div className="new">
          <p>
            New to LinkedIn?
            <span>
              {" "}
              <Link to="/signup">Join Now</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
