import React, { useState } from "react";
import star from "../assets/star.png";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import { styled } from "@mui/material/styles";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Input,
  Stack,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchPost } from "../features/post/postAction";
const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [file, setfile] = useState();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userToken);
  const userId = useSelector((state) => state?.auth?.userInfo?._id);
  const handleSubmit = async () => {
    const formData = new FormData();
    console.log(userId, ".....", title, "??????", file);
    // const obj = {
    //   token: token,
    //   userId: userId,

    //   title: title,
    // };
    formData.append("userId", userId);
    formData.append("title", title);
    [...file]?.map((f) => {
      formData.append("images", f);
    });

    const data = await dispatch(createPost(formData));
    console.log("post created ", data.payload.data);
    setSource(data.payload.data.image);
    dispatch(fetchPost(token));
    setOpen(false);
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
      {/* <img src={`http://localhost:8080/uploads/${source}`} /> */}
      <Button
        sx={{
          textTransform: "none",
          border: "1px solid black",
          borderRadius: "25px",
          width: "450px",
          height: "48px",
        }}
        onClick={() => setOpen(true)}
      >
        <Typography
          fontSize="14px"
          color="black"
          textAlign={"left"}
          width={"100%"}
          sx={{ pl: 2 }}
        >
          Start a post
        </Typography>
      </Button>
      <form action="/profile" method="post" enctype="multipart/form-data">
        <Dialog
          PaperProps={{
            sx: {
              width: "100%",
              height: "60%",
            },
          }}
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">
            <Stack>
              <Avatar sx={{ width: "56px", height: "56px" }} />
            </Stack>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              <Input
                disableUnderline="true"
                multiline="true"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="What do you want to talk about"
                sx={{ width: "100%", height: "%" }}
              />
            </DialogContentText>
          </DialogContent>
          <Stack
            display="flex"
            justifyContent="flex-start"
            direction="row"
            sx={{ ml: 3 }}
          >
            <IconButton>
              <SentimentSatisfiedAltOutlinedIcon />
            </IconButton>
          </Stack>
          <Stack
            spacing={0}
            sx={{ m: 3 }}
            flexDirection="row"
            alignItems="center"
          >
            <Button
              variant="outlined"
              sx={{
                width: "170px",
                height: "30px",
                paddingtop: "20px",
                fontSize: "12px",
                borderRadius: "15px",
                color: "black",
                border: "1px solid black",
              }}
              startIcon={<img src={star} />}
            >
              Rewrite with AI
            </Button>
            {/* <IconButton>
            <input type="file" accept=".png,.jpg,.jpeg" onChange={(e)=>{setfile(e.target.files)}} multiple ></input>
            <ImageIcon sx={{ ml: 2 }} />
          </IconButton> */}
            <Button
              role={undefined}
              variant="outlined "
              tabIndex={-1}
              startIcon={<ImageIcon />}
              onClick={() => document.getElementById("postimage").click()}
            >
              <input
                type="file"
                id="postimage"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => {
                  setfile(e.target.files);
                }}
                multiple
                hidden
              ></input>
            </Button>
            <IconButton>
              <CalendarMonthIcon />
            </IconButton>
            <IconButton>
              <Brightness7Icon />
            </IconButton>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Stack>
          <hr />
          <Stack>
            <DialogActions>
              <Button
                sx={{ color: "black" }}
                startIcon={<AccessTimeRoundedIcon sx={{ color: "black" }} />}
                autoFocus
                variant="filled"
                onClick={handleSubmit}
              >
                Post
              </Button>
            </DialogActions>
          </Stack>
        </Dialog>
      </form>
    </>
  );
};

export default CreatePost;
