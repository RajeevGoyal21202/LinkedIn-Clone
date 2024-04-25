import React from "react";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRequest,
  updateRequest,
} from "../features/connection/connectionAction";
import { createChat } from "../features/chat/chatAction";
import { useNavigate } from "react-router-dom";

const Request = (props) => {
  const token = useSelector((state) => state.auth.userToken);
  const navigate = useNavigate();
  //   console.log("token: ", token);
  const dispatch = useDispatch();
  const userId = props.props._id

  const data = {
    userId,
    token

  }
  const handleMessage = async()=>{
  console.log("data",data)
    dispatch(createChat(data))
    navigate("/messaging")
  }

  const handleIgnore = async () => {
    console.log("deleteToken: ", token);
    const connectionId = props.props._id;
    console.log("connectionId: ", connectionId);
    const data = {
      connectionId,
      token,
    };
    const res = dispatch(deleteRequest(data));
    console.log(res);
    return res;
  };
  const handleAccept = async () => {
    const senderId = props.props._id;
    const data = {
      senderId,
      token,
    };
    const res = dispatch(updateRequest(data));
    console.log(res);
    return res;
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Stack display="flex" flexDirection="row">
              <Avatar sx={{ width: "72px", height: "72px" }}></Avatar>
              <Typography>{props?.props?.connectionBy.firstName}</Typography>
              <Button sx={{mt:4,pr:2,textTransform:"none"}} onClick={handleMessage}>Message</Button>
            </Stack>
            <Stack
              width="165px"
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <Button onClick={handleIgnore}>Ignore</Button>
              <Button
                variant="outlined"
                sx={{
                  width: "81.72px",
                  height: "32px",
                  borderRadius: "15px ",
                }}
                onClick={handleAccept}
              >
                Accept
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Request;
