import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendRequest } from "../features/connection/connectionAction";
import { useSelector } from "react-redux";
import profile from "../assets/bgdefault.png";
import { red } from "@mui/material/colors";
const UserCard = ({ item }) => {
  const [clicked, setClicked] = useState(false);
  const userId = item._id;
  const token = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();

  const handleConnect = async () => {
    // console.log(userId);
    dispatch(sendRequest({ userId, token }));
    setClicked(true);
  };
  return (
    <Card
      sx={{
        width: "184px",
        height: "282px",
        marginTop: "16px",
        marginBottom: "16px",
        display: "flex",
        justifyContent: "center !important",
      }}
    >
      <Stack textAlign="center" sx={{ mb: 1 }}>
        <Stack width="225px" position="relative" bottom="17px">
          <img src={profile} alt="background" style={{ height: "80px" }}></img>
          <Stack textAlign={"center"}>
            <Avatar
              sx={{
                width: "104px",
                height: "104px",
                position: "absolute",
                top: "30px",
                left: "55px",
              }}
            ></Avatar>
          </Stack>
        </Stack>
        <CardContent sx={{ textAlign: "center" }}>
          <Stack sx={{ mt: 2 }}>
            <Typography fontSize="15px" sx={{ paddingTop: "16px" }}>
              {item.firstName}
            </Typography>
            <Typography>Profession</Typography>
            <Typography>University Name</Typography>
          </Stack>
          <Stack alignItems="center">
            <Button
              variant="outlined"
              sx={{
                borderRadius: "15px",
                mt: 3,
                width: "160px",
              }}
              onClick={handleConnect}
            >
              {!clicked ? "Connect" : "Pending"}
            </Button>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default UserCard;
