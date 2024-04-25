import React, { useState } from 'react'
import Navbar from './Navbar'
import { Avatar, Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import Advertisement from './Advertisement'
import Footer from './Footer'
import { TabContext, TabList, TabPanel } from '@mui/lab'

const Notification = () => {
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Stack bgcolor=" #f4f2ee" height={"100vh"}>
            <Navbar />
            <Stack direction={"row"} justifyContent={"center"} sx={{ mt: 5, pt: 5 }} gap={"15px"}>
                <Stack width={"225px"} height={"108px"} bgcolor={"white"} >
                    <Typography sx={{ m: 2 }} fontSize={"16px"} fontWeight={"600"}>
                        Manage your <br />
                        Notifications
                    </Typography>
                    <Typography sx={{ ml: 2, pb: 1 }} color={"primary"} fontWeight={"600"} fontSize={"14px"}>View Settings</Typography>
                </Stack>
                <Stack>

                    <TabContext value={value}>
                        <Stack width={"555px"} height={"64px"} bgcolor={"white"} >
                            <Box>
                                <TabList onChange={handleChange} sx={{ "& button": { borderRadius: 2 }, }}  >
                                    <Tab label="All" sx={{ textTransform: "none" }} value="1" />
                                    <Tab label="My posts" sx={{ textTransform: "none" }} value="2" />
                                    <Tab label="Mentions" sx={{ textTransform: "none" }} value="3" />
                                </TabList>
                            </Box>
                        </Stack>
                        <Stack sx={{ width: "555px", height: "100px", bgcolor: "white", mt: 2 }}>
                            <TabPanel value="1">
                                <Avatar/>
                                <Typography></Typography>
                            </TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>

                        </Stack>
                    </TabContext>
                </Stack>
                <Stack >
                    <Advertisement />
                    <Footer />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Notification