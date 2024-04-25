import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import linked from "../assets/Logo.png";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div>
      <Box>
        <Stack width="300px" height="128px" alignItems="center">
          <Stack direction="row" color="gray" gap="10px ">
            <Typography fontSize={"12px"}>About</Typography>
            <Typography fontSize={"12px"}>Acessibility</Typography>
            <Typography fontSize={"12px"}>Help Center</Typography>
          </Stack>
          <Stack direction="row" color="gray" gap="10px" alignItems={"center"}>
            <Typography fontSize={"12px"}>Privacy & Terms</Typography>
            <ArrowDropDown />
            <Typography fontSize={"12px"}>Ad Choices</Typography>
          </Stack>
          <Stack direction="row" color="gray" gap="10px" alignItems={"center"}>
            <Typography fontSize={"12px"}>Advertising</Typography>
            <Typography fontSize={"12px"}>Business Service</Typography>
            <ArrowDropDown />
          </Stack>
          <Stack direction="row" color="gray" gap="10px" alignItems={"center"}>
            <Typography fontSize={"12px"}>Get the LinkedIn App</Typography>
            <Typography fontSize={"12px"}>More</Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            color="gray"
            sx={{ mt: 2 }}
          >
            <img src={linked} style={{ width: "56px", height: "14px" }}></img>
            <Typography fontSize="12px" sx={{ ml: 1 }}>
              LinkedIn Corporation
            </Typography>
            <CopyrightIcon sx={{ width: "12px", height: "12px", ml: 0.5 }} />
            <Typography fontSize="12px" sx={{ ml: 0.5 }}>
              2024
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
