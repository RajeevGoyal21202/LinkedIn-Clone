import React from 'react'
import { Avatar, Button, Card, CardContent, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { deleteRequest } from '../features/connection/connectionAction';

const SendedRequest = (props) => {
    const token = useSelector((state) => state.auth.userToken)
    console.log('token: ', token);
    const dispatch = useDispatch();
    const handleIgnore = async ()=>{
    const connectionId = props.props._id;
    console.log('connectionId: ', connectionId);
    const data = {
        connectionId, token
    }
    const res = dispatch(deleteRequest(data))
    console.log(res)
    return res
}
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
                            <Typography>{props?.props?.connectedTo.firstName}</Typography>
                        </Stack>
                        <Stack
                            width="165px"
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <Button onClick={handleIgnore}>withdraw</Button>
                           
                        </Stack>
                    </Stack>
                </CardContent>

            </Card>

        </div>

    )
}

export default SendedRequest