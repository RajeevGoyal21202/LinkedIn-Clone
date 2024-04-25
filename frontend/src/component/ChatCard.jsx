import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage,} from "../features/message/messageAction";


const ChatCard = ({ item, currentChat, setCurrentChat }) => {
  const dispatch = useDispatch();
  console.log("item", item);
  const token  = useSelector((state)=>state.auth.userToken)
  const socket = useSelector((state)=>state.chat.socket);
  const data = {
    chatId : item._id,
    token : token
  }
  console.log("data",data)

  const handleClick = (item) => {
    console.log(item)
    setCurrentChat(item);
    socket.emit("join",item._id)
    console.log(currentChat)
    dispatch(fetchMessage(data))
  };
  return (
    <Box
      sx={{
        width: "32  0px",
        height: "91px",
        display: "flex",
        alignItems: "center",
      }}
      onClick={
       ()=> handleClick(item)}
    >
      <Stack direction={"row"} alignItems={"center"} sx={{ ml: 2 }}>
        <Stack>
          <Avatar sx={{ width: "52px", height: "52px" }}></Avatar>
        </Stack>
        <Stack sx={{ ml: 1, mb: 1 }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width="200px"
          >
            <Typography color={"black"}>
              {item?.user[0]?.firstName || "Linkedin User"}
            </Typography>
            <Typography>time</Typography>
          </Stack>
          <Typography>Profession</Typography>
          <Typography>{item.industry}</Typography>
          <Divider />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatCard;
