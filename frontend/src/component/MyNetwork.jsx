import React, { useState, SyntheticEvent } from "react";
import Navbar from "./Navbar";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
  Tab,
} from "@mui/material";
import Invitation from "./Invitation";
import Suggestion from "./Suggestion";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import catchp from "../assets/catchphoto.jpg";
import Advertisement from "./Advertisement";
import Footer from "./Footer";
const MyNetwork = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (SyntheticEvent, newValue) => {
    setValue(newValue);
  };
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  return (
    <div>
      <Navbar />
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        bgcolor={"#F4F2EE"}
        height={"100vh"}
        sx={{ mt: 6, pt: 3 }}
      >
        <Stack direction="row">
          <Stack sx={{ mr: 3 }}>
            <Card sx={{ width: "300px", height: "52px" }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>Manage my network</Typography>
                  <ArrowDropDown />
                </Stack>
              </CardContent>
            </Card>
            <Stack sx={{ mt: 2 }}>
              <Advertisement />
              <Stack sx={{ mt: 2 }}>
                <Footer />
              </Stack>
            </Stack>
          </Stack>

          <Stack
            alignItems={"center"}
            sx={{
              width: "804px !imporatant",
              height: "52px",
              bgcolor: "white",
              borderRadius: "12px ",
            }}
          >
            <Box sx={{ width: "804px", typography: "body1", mb: 0, ml: 2 }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label="Grow"
                      value="1"
                      sx={{ textTransform: "none" }}
                    />
                    <Tab
                      label="Catch Up"
                      value="2"
                      sx={{ textTransform: "none" }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ mr: 1, pl: 0 }}>
                  <Invitation />
                  <Suggestion />
                </TabPanel>
                <TabPanel value="2">
                  <Card sx={{ width: "804px", height: "452px" }}>
                    <CardContent sx={{ textAlign: "center", pt: 4 }}>
                      <img src={catchp} style={{ width: "330px" }}></img>
                      <Typography fontSize="24px" fontWeight={"600"}>
                        No Recent updates
                      </Typography>
                      <Typography>
                        Build your network to get future updates
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          border: "2px solid",
                          borderRadius: "25px",
                          mt: 2,
                          textTransform: "none",
                          fontWeight: "600",
                        }}
                      >
                        Build network
                      </Button>
                    </CardContent>
                  </Card>
                </TabPanel>
              </TabContext>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default MyNetwork;
