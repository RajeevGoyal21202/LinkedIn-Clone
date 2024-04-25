import React from "react";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

const CommentCard = (props) => {
  return (
    <Box width="471px">
      <Box>
        
          <Stack display="flex" flexDirection="row" sx={{bgcolor:"yellow",width:"100%",m:1}}>
            <Avatar sx={{mr:1}}/>
            <Stack>
              <Stack  height="80px" sx={{ bgcolor: "#f2f2f2", width:"480px" }} justifyContent={"space-between"}>
              <Typography sx={{m:1}}>Linkedin User</Typography>
                <Typography sx={{m:1}}>{props.body}</Typography>
              </Stack>
            </Stack>
          </Stack>
      </Box>
    </Box>
  );
};

export default CommentCard;
