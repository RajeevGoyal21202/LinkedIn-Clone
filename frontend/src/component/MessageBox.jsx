import React, { useEffect, useState } from "react";
import { Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Textarea from "@mui/joy/Textarea";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import gif from "../assets/gif.svg";
import smile from "../assets/smile.svg";
import paper from "../assets/paper.svg";
import gallery from "../assets/gallery.svg";
import Chat from "./Chat";
import Advertisement from "./Advertisement";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchChat } from "../features/chat/chatAction";
import { addMessage } from "../features/message/messageSlice";

const MessageBox = ({ currentChat }) => {
  const [content, setContent] = useState("")
  const chatId = currentChat?._id
  const dispatch = useDispatch()
  console.log("currentChat", currentChat)
  const senderId = useSelector((state) => (state.auth.userInfo._id))
  const messages = useSelector((state) => (state.message.messages?.data.messages))
  const socket = useSelector((state) => (state.chat.socket))
  console.log(messages);

  const handleChange = (e) => {
    e.preventDefault();
    setContent(e.target.value)
  }

  const handleClick = async (chat, content) => {
    socket.emit("newMessage", {
      message: content,
      roomId: chatId,
      senderId: senderId
    })
    setContent("")
  }
  useEffect(() => {
    socket.on("Recievemessage", (messageData) => {
      dispatch(addMessage(messageData))
    })

  }, [])
  if (!currentChat) {
    return null
  }
  else
    return (
      <Stack direction={"row"}>
        <Stack>
          <Stack
            width="469px"
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
            height="47px"
            sx={{
              bgcolor: "white",
              borderWidth: "thin",
              borderRadius: "4px",
              mr: "5px",
            }}
          >
            <Typography fontSize="16px" fontWeight={"600"} sx={{ mb: 3, p: 1 }}>

              {currentChat?.user?.length > 0 && currentChat?.user[0]?.firstName || "TTFGDFDX "}
            </Typography>
            <Stack direction="row" gap="10px" paddingRight="10px" color="gray">
              <MoreHorizIcon />
              <StarBorderOutlinedIcon />
            </Stack>
          </Stack>
          <Stack
            height={"62.5vh"}
            width={"469px"}
            bgcolor={"white"}
            overflow="auto"
          >
            <Avatar sx={{ width: "72px", height: "72px", ml: 1, mt: 2 }}></Avatar>
            <Typography sx={{ pl: 3, pt: 1 }}>
              {currentChat?.user?.length > 0 && currentChat?.user[0]?.firstName || "TTFGDFDX "}
            </Typography>
            <Typography fontSize={"14px"} sx={{ pl: 3, pt: 1 }}>
              Skills
            </Typography>
            <Divider />
            {messages?.map((item) => (<>
              {/* {console.log(item)} */}
              <Chat key={item._id} item={item} />
            </>
            ))}

          </Stack>
          <Stack
            width={"469px"}
            height={"121px"}
            bgcolor={"white"}
            borderTop={"1px solid gray"}
          >
            <Textarea
              placeholder="Write a message"
              minRows={3}
              value={content}
              sx={{
                width: "400px",
                height: "100px",
                bgcolor: "#f4f2ee",
                mt: 1,
                ml: 1,
                mr: 3,
              }}
              onChange={handleChange}
            >

            </Textarea>
          </Stack>
          <Divider />
          <Stack width={"469px"} height={"12vh"} bgcolor={"white"} color={"gray"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction={"row"} gap={"10px"} sx={{ m: 2, color: "gray" }}>
                <img
                  src={gallery}
                  alt="gallery"
                  style={{ width: "30px", height: "24px", color: "gray" }}
                ></img>

                <img
                  src={paper}
                  alt="paper"
                  style={{ width: "30px", height: "24px" }}
                ></img>

                <img
                  src={gif}
                  alt="gif"
                  style={{ width: "30px", height: "24px" }}
                ></img>

                <img
                  src={smile}
                  alt="smile"
                  style={{ width: "30px", height: "24px" }}
                ></img>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Button sx={{ color: "gray" }} onClick={() => handleClick(chatId, content, senderId)}>Send</Button>
                <MoreHorizIcon />
              </Stack>
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
        <Stack sx={{ ml: 1 }}>
          <Advertisement />
          <Stack sx={{ mt: 3 }}>
            <Footer />
          </Stack>
        </Stack>
      </Stack>
    );
};

export default MessageBox;
