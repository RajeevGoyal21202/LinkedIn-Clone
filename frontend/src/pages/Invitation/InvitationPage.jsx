import React, { useEffect } from "react";
import Navbar from "../../component/Navbar";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import "./invitation.css";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import Request from "../../component/Request";
import { useDispatch, useSelector } from "react-redux";
import { gettRequest } from "../../features/connection/connectionAction";
import Advertisement from "../../component/Advertisement";
const InvitationPage = () => {
  const token = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettRequest(token));
     // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [dispatch]);
  const connection1 = useSelector((state) => state.connection.connection);
  const loading = useSelector((state) => state.connection.loading);
  const error = useSelector((state) => state.connection.error);
  const connection = useSelector((state) => state.connection.connection);
  console.log(connection1);
  if (loading) {
    return "..isLoading";
  }
  if (error) {
    return error;
  }
  console.log("connection", connection);
  return (
    <div className="Invitation" style={{backgroundColor:"#f4f2ee"}}>
      <Navbar />
      <Stack
        bgcolor=" #f4f2ee"
        height="100vh"
        justifyContent={"center"}
        sx={{ mt:2,pt:5 }}
        direction={"row"}
      >
        <Stack>
          <Card
            sx={{
              width: "804px",
              bgcolor: "white",
              borderRadius: "12px ",
              marginTop: "20px",
            }}
          >
            <CardContent>
              <Stack
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography paddingBottom="15px" alignItems="center">
                  Manage invitations
                </Typography>
                <Button sx={{ width: "75px", height: "32px", color: "grey" }}>
                  <SettingsIcon />
                  <hr />
                </Button>
              </Stack>
              <Stack display="flex" flexDirection="row">
                <Button sx={{ width: "72.33px", height: "39px" }}>
                  Recieved
                </Button>
                <Link to="/invitationSent">
                  <Button sx={{ width: "72.33px", height: "39px" }}>
                    Sent
                  </Button>
                </Link>
              </Stack>
            </CardContent>
            <Stack>
              {connection?.map((props) => (
                <Request props={props} />
              ))}
            </Stack>
          </Card>
        </Stack>
        <Stack sx={{ ml: 2,mt:2 }}>
          <Advertisement />
        </Stack>
      </Stack>
    </div>
  );
};
export default InvitationPage;
