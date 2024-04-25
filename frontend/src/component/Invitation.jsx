import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  CardHeader,
  Avatar,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Request from "./Request";

const Invitation = () => {
  return (
    <div>
      <Stack display="flex" justifyContent="center" alignItems="center">
        <Card
          sx={{
            width: "804px",
            bgcolor: "white",
            borderRadius: "12px ",
          }}
        >
          <CardContent>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography paddingBottom="15px" alignItems="center">
                Invitations
              </Typography>
              <Link to="/invitation">
                <Button sx={{ width: "75px", height: "32px", color: "grey" }}>
                  Manage
                </Button>
              </Link>
            </Stack>

            <hr />
          </CardContent>
        </Card>
      </Stack>
      <Stack></Stack>
    </div>
  );
};

export default Invitation;
