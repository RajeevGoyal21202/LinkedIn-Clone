import React from "react";
import logo from "../assets/Linkedin.svg";
import "./Style/navbar.css";
import defaultAvatar from "../assets/avatar.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";

import {
  AppBar,
  IconButton,
  Toolbar,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import homeicon from "../assets/homeicon.svg";
import networkicon from "../assets/network.svg";
import jobicon from "../assets/jobs.svg";
import messageicon from "../assets/message.svg";
import notification from "../assets/notification.svg";
import { Link } from "react-router-dom";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#edf3f8",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Navbar = () => {
  return (
    <div className="navbar">
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ bgcolor: "white", height: "52px" }}
      >
        <Toolbar>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width={"75rem"}
            height="52px"
            m={"auto"}
            pb={1}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              paddingBottom="5px"
            >
              <Stack sx={{ mb: 4, mr: 1 }}>
                <img className="logo" src={logo} alt=""></img>
              </Stack>
              <Search size="small">
                <SearchIconWrapper>
                  <SearchIcon
                    sx={{ color: "black", width: "20px", height: "20px" }}
                  />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                  size="small"
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    width: "280px",
                    height: "34 px",
                    color: "black !important ",
                    fontSize: "15px",
                  }}
                />
              </Search>
            </Stack>
            <Stack flexDirection="row" alignItems={"center"} width={"46rem"}>
              <Stack
                alignItems="center"
                textAlign="center"
                paddingLeft={"20px"}
                width={"80px"}
                height={"52px"}
                paddingTop="3px"
              >
                <Link
                  to="/home"
                  style={{ paddingLeft: 13, textDecoration: "none" }}
                >
                  <img src={homeicon} alt="home"></img>
                  <Typography fontSize="12px">Home</Typography>
                </Link>
              </Stack>
              <Stack
                alignItems="center"
                textAlign="center"
                paddingTop="3px"
                width={"85px"}
                height={"52px"}
              >
                <Link
                  to="/network"
                  style={{ paddingLeft: 13, textDecoration: "none" }}
                >
                  <img src={networkicon} alt="Network"></img>
                  <Typography fontSize="12px">My Network</Typography>
                </Link>
              </Stack>
              <Stack
                alignItems="center"
                textAlign="center"
                paddingTop="3px"
                width={"80px"}
                height={"52px"}
              >
                <Link
                  to="/jobs"
                  style={{ paddingLeft: 13, textDecoration: "none" }}
                >
                  <img src={jobicon} alt="jobs"></img>
                  <Typography fontSize="12px" color={"gray"}>
                    Jobs
                  </Typography>
                </Link>
              </Stack>
              <Stack
                alignItems="center"
                textAlign="center"
                paddingTop="3px"
                width={"80px"}
                height={"52px"}
              >
                <Link
                  to="/messaging"
                  style={{ paddingLeft: 13, textDecoration: "none" }}
                >
                  <img src={messageicon} alt="messaging"></img>
                  <Typography fontSize="12px" color={"gray"}>
                    Messaging
                  </Typography>
                </Link>
              </Stack>
              <Stack
                alignItems="center"
                textAlign="center"
                paddingTop="3px"
                width={"80px"}
                height={"52px"}
              >
                <Link
                  to="/notification"
                  style={{ paddingLeft: 13, textDecoration: "none" }}
                >
                  <img src={notification} alt="notification"></img>
                  <Typography fontSize="12px" color={"gray"}>
                    Notfications
                  </Typography>
                </Link>
              </Stack>

              <Stack
                alignItems="center"
                textAlign="center"
                paddingTop="3px"
                width={"80px"}
                height={"52px"}
              >
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Stack alignItems="center" justifyContent={"center"}>
                    <Avatar
                      src={defaultAvatar}
                      sx={{ width: "32px", height: "32px" }}
                    />
                    <Stack
                      direction="row"
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      alignContent={"flex-start"}
                      position="relative"
                      bottom="8px"
                      left="5px"
                    >
                      <Stack>
                        <Typography fontSize="12px" color={"gray"}>
                          Me
                        </Typography>
                      </Stack>
                      <Stack>
                        <IconButton
                          sx={{
                            minHeight: 0,
                            minWidth: 0,
                            padding: 0,
                          }}
                        >
                          <ArrowDropDownIcon />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Stack>
                </Link>
              </Stack>
              <Stack
                width="105px"
                height="52px"
                alignItems="center"
                sx={{ mt: 1 }}
              >
                <Stack>
                  <AppsIcon
                    sx={{ color: "black", width: "28px", height: "28px" }}
                  />
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ position: "relative", top: "0" }}
                  color="gray"
                  position="relative"
                  bottom="10px"
                  left="5px"
                >
                  <Typography fontSize={"12px"}>For Business</Typography>
                  <ArrowDropDownIcon />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
