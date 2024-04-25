import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Chat = ({item}) => {
  console.log("item2",item)
  return (
    <Box>
    <Stack direction={"row"} sx={{m:1}}>

        <Avatar></Avatar>
        <Stack>

        <Typography sx={{ml:1}}>Username</Typography>
        <Typography sx={{ml:1, width:"365px"}} >{item.content}</Typography>
        </Stack>
    </Stack>
    </Box>
  )
}

export default Chat