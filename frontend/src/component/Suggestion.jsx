import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Suggestion = () => {
  const token = useSelector((state) => state.auth.userToken);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:8080/users",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading}

      <Box
        sx={{
          width: "804px",
          bgcolor: "white",
          borderRadius: "12px ",
          marginTop: "30px",
          paddingLeft: "16px",
          paddingTop: "27px",
        }}
      >
        <Typography>People you may know </Typography>

        <Grid container sx={{ pt: "50px", gap: "15px" }}>
          {data.users?.map((item) => (
            <UserCard item={item} />
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Suggestion;
