import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../assets/Blacklogo.png";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";

const AuthFooter = () => {
  return (
    <Stack
      sx={{
        bgcolor: "white",
        height: "50px",
        mt: 8,
        position: "relative",
        bottom: "0",
        justifyContent: "center",
        alignItems: "center",
      }}
      direction="row"
    >
      <Stack direction={"row"} alignItems={"center"}>
        <img src={image} style={{ width: "56px", height: "14px" }}></img>
        <CopyrightOutlinedIcon sx={{ width: "15px", pl: 2, color: "gray" }} />
        <Typography fontSize="12px" pl={1} color={"gray"}>
          2024
        </Typography>
      </Stack>
      <Stack direction="row"></Stack>
      <Stack direction="row" gap="10px" pl={2} color={"gray"}>
        <Typography fontSize="12px" fontWeight="600">
          About
        </Typography>
        <Typography fontSize="12px" fontWeight="600">
          Accesibility
        </Typography>
        <Typography fontSize="12px" fontWeight="600">
          User Aggrement
        </Typography>
        <Typography fontSize="12px" fontWeight="600">
          Privacy Policy
        </Typography>
        <Typography fontSize="12px" fontWeight="600">
          Cookie Policy
        </Typography>
        <Typography fontSize="12px" fontWeight="600">
          Copyright Policy
        </Typography>
        <Typography fontSize="12px" fontWeight="600">
          Brand Policy
        </Typography>
        <Typography fontSize="12px" fontWeight="600">
          Guest Controls
        </Typography>
        <Typography fontSize="12px" fontWeight="600">
          Community Guidelines
        </Typography>
        <Typography fontSize="12px" fontWeight="600">
          Languages
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AuthFooter;
