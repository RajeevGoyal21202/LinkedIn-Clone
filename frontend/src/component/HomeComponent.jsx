import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../features/post/postAction";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Card2 from "./Card2";
import profile from "../assets/bgdefault.png";
import camera from "../assets/camera.jpg";
import "./Style/Home.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CreatePost from "./CreatePost";
import PostBox from "./PostBox";
import { grey, orange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Advertisement from "./Advertisement";
import Footer from "./Footer";

const HomeComponent = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const handleInfiniteScroll = async () => {
    try {
      console.log("scrollheight", document.documentElement.scrollHeight);
      console.log("viewport", window.innerHeight);
      console.log("scroll top ", document.documentElement.scrollTop);
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
        console.log("pageno", page);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const token = useSelector((state) => state.auth.userToken);
  const userInfo = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    const data = {
      token: token,
      page: page,
    };
    console.log(data);
    dispatch(fetchPost(data));
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, []);

  const posts = useSelector((state) => state.post.posts.data.posts);
  console.log("posts", posts);
  const isLoading = useSelector((state) => state.post.isLoading);
  const error = useSelector((state) => state.post.error);

  return (
    <div className="homeComponent">
      <Navbar />

      <Stack
        display="flex"
        justifyContent="center"
        flexDirection="row"
        sx={{ mt: 5 }}
        paddingTop="22px"
      >
        <Stack
          sx={{
            mr: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Stack>
            <Card
              sx={{
                width: "225px",
                height: "365px",
                bgcolor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                borderRadius: "10px",
                pt: 0,
                mt: 0,
              }}
            >
              <CardContent>
                <Stack textAlign="center" sx={{ mb: 1 }}>
                  <Stack width="225px" position="relative" bottom="17px">
                    <img src={profile}></img>
                    <Avatar
                      sx={{
                        width: "68px",
                        height: "68px",
                        bgcolor: "Orange ",
                        position: "absolute",
                        top: "15px",
                        left: "75px",
                      }}
                      src={camera}
                    ></Avatar>
                  </Stack>

                  <Typography
                    paddingTop="40px"
                    fontSize={"16px"}
                    fontWeight={"600"}
                  >
                    Welcome {userInfo ? userInfo.firstName : "username"}
                  </Typography>
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <Typography
                      fontSize="12px"
                      color="primary"
                      paddingTop="2px"
                    >
                      Add a photo
                    </Typography>
                  </Link>
                  <Divider sx={{ pt: 2 }} />
                </Stack>
                <Stack sx={{ pt: 1, pl: 1, color: "gray" }}>
                  <Typography fontSize={"12px"} fontWeight={"600"}>
                    Connections
                  </Typography>
                  <Typography fontSize={"12px"} fontWeight={"600"}>
                    Connections with Alumni
                  </Typography>
                  <Typography
                    fontSize={"12px"}
                    fontWeight={"600"}
                    paddingTop={"5px"}
                  >
                    Invitations
                  </Typography>
                </Stack>
                <Divider sx={{ pt: 2 }} />
                <Stack sx={{ m: 2 }}>
                  <Typography fontSize={12} color={grey}>
                    Strengthen your profile with an AI writing assistant
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  alignItems={"center"}
                  gap={1}
                  sx={{ m: 1 }}
                  color={grey}
                >
                  <BookmarkIcon sx={{ width: "16px", height: "16px" }} />
                  <Typography fontSize="12px" fontWeight="600">
                    My Items
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "224px",
                height: "150px",
                mt: 1,
                borderRadius: "10px",
              }}
            >
              <CardContent>
                <Typography fontSize={12} fontWeight={600} color={"primary"}>
                  Groups
                </Typography>
                <Typography
                  fontSize={12}
                  color={"primary"}
                  fontWeight={600}
                  sx={{ pt: 2 }}
                >
                  Events
                </Typography>
                <Typography
                  fontSize={12}
                  color={"primary"}
                  fontWeight={600}
                  sx={{ pt: 2, pb: 1 }}
                >
                  Followed Hashtags
                </Typography>
                <Divider />
                <Typography
                  fontSize="14px"
                  textAlign={"center"}
                  color={"gray"}
                  fontWeight={600}
                  sx={{ pt: 1 }}
                >
                  Discover More
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
        <Stack>
          <Card sx={{ width: "555px", height: "116px", borderRadius: "10px" }}>
            <CardContent sx={{ marginBottom: "20px", p: 0, mt: 1, ml: 1 }}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  position: "relative",
                }}
                startIcon={<Avatar sx={{ width: "48px", height: "48px" }} />}
                endIcon={<CreatePost sx={{ width: "488px", height: "48px" }} />}
              ></Button>
              <Stack
                display="flex"
                direction="row"
                justifyContent="space-around"
                spacing={10}
                marginBottom="20px"
              >
                <IconButton>
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      color: "black",
                      width: "87px",
                      height: "48px",
                      paddingBottom: "30px",
                    }}
                    startIcon={<ImageIcon sx={{ color: "#378FE9" }} />}
                  >
                    Media
                  </Button>
                </IconButton>

                <IconButton>
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      color: "black",
                      width: "87px",
                      height: "48px",
                      paddingBottom: "30px",
                    }}
                    startIcon={<CalendarMonthIcon sx={{ color: "#C37D16" }} />}
                  >
                    Event
                  </Button>
                </IconButton>
                <IconButton>
                  {" "}
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      color: "black",
                      width: "15 0px",
                      height: "48px",
                      paddingBottom: "30px",
                    }}
                    startIcon={<NewspaperIcon sx={{ color: "#E06847" }} />}
                  >
                    Write Article
                  </Button>{" "}
                </IconButton>
              </Stack>
            </CardContent>
          </Card>
          <Stack>
            <div className="data-box">
              <div className="data">
                {posts && posts?.map((post) => (
                  <>
                    <Card2 key={post._id} post={post} />
                  </>
                ))}
              </div>
            </div>
          </Stack>
        </Stack>
        <Stack sx={{ ml: 3 }}>
          <Card
            sx={{ width: "300px", height: "322px", bgcolor: "white", ml: "3" }}
          >
            <CardContent>
              <Typography fontWeight="600" fontSize="16px">
                Linkedin News
              </Typography>
              <Stack sx={{ ml: 2, mt: 1 }}>
                <ul>
                  <li>
                    <Typography fontWeight="600" fontSize="14px">
                      Skill devlopment a Top Priority{" "}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontWeight="600"
                      fontSize="14px"
                      paddingTop="20px"
                    >
                      Grooming Women CEO Finance{" "}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontWeight="600"
                      fontSize="14px"
                      paddingTop="20px"
                    >
                      Bristol Myers Squid to hire 1500{" "}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontWeight="600"
                      fontSize="14px"
                      paddingTop="20px"
                    >
                      Shadowfax raise $100 million{" "}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontWeight="600"
                      fontSize="14px"
                      paddingTop="20px"
                    >
                      Getting DEI Right{" "}
                    </Typography>
                  </li>
                </ul>
              </Stack>
            </CardContent>
          </Card>
          <Stack sx={{ pt: 1, position: "sticky", top: "70px" }}>
            <Advertisement />
            <Stack sx={{ mt: 2 }}>
              <Footer />
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default HomeComponent;
