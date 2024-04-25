import React, { FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CreateOutlined from "@mui/icons-material/CreateOutlined";
import { Typography, Stack, Input } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../features/auth/authAction";

const EditProfile = () => {
  const [open, setOpen] = React.useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, SetlastName] = useState("");
  const [additionalName, setadditonalName] = useState("");
  const [industry, setIndustry] = useState("");
  const [school, setSchool] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userToken);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {

    setOpen(false);
  };
  const handleSubmit = () => {
    const data ={firstName,lastName,additionalName,industry,school,country,city};
    dispatch(updateUser({data,token}))
    
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <CreateOutlined />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "672px",
            height: "90%",
          },
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            // const formJson = Object.fromEntries((formData as any).entries());
            // const email = formJson.email;
            // console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>* Indicate Required</DialogContentText>
          <Stack sx={{ pt: 3 }}>
            <Typography>First Name*</Typography>
            <TextField
              value={firstName}
              size="small"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            ></TextField>
          </Stack>
          <Stack sx={{ pt: 3 }}>
            <Typography>Last Name*</Typography>
            <TextField
              size="small"
              value={lastName}
              onChange={(e) => {
                SetlastName(e.target.value);
              }}
            ></TextField>
          </Stack>
          <Stack sx={{ pt: 3 }}>
            <Typography>Additional Name</Typography>
            <TextField
              size="small"
              value={additionalName}
              onChange={(e) => {
                setadditonalName(e.target.value);
              }}
            ></TextField>
          </Stack>
          <Stack sx={{ pt: 4 }}>
            <Typography fontWeight="600" fontSize="25px">
              Current Posistion
            </Typography>
            <Stack display="flex" flexDirection="row" sx={{ pt: 3 }}>
              <Button color="primary" startIcon={<AddIcon color="primary" />}>
                Add new Posistion
              </Button>
            </Stack>
            <Stack>
              <Typography>Industry*</Typography>
              <TextField
                size="small"
                value={industry}
                onChange={(e) => {
                  setIndustry(e.target.value);
                }}
              ></TextField>
              <Typography>Learn more about industry option</Typography>
            </Stack>
          </Stack>
          <Stack sx={{ pt: 3 }}>
            <Typography fontWeight="600" fontSize="25px">
              Education
            </Typography>
            <Stack>
              <Typography>School*</Typography>
              <TextField
                size="small"
                value={school}
                onChange={(e) => {
                  setSchool(e.target.value);
                }}
              ></TextField>
            </Stack>
            <Stack display="flex" flexDirection="row" sx={{ pt: 3 }}>
              <Button color="primary" startIcon={<AddIcon color="primary" />}>
                Add new Education
              </Button>
            </Stack>
          </Stack>
          <Stack sx={{ pt: 3 }}>
            <Typography fontWeight="600" fontSize="25px">
              Location
            </Typography>
            <Stack>
              <Typography>Country/Region</Typography>
              <TextField
                size="small"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              ></TextField>
            </Stack>
            <Stack sx={{ pt: 3 }}>
              <Typography>City</Typography>
              <TextField
                size="small"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              ></TextField>
            </Stack>
          </Stack>

          <Stack sx={{ pt: 3 }}>
            <Typography fontWeight="600" fontSize="20px">
              Contact Info
            </Typography>
            <Typography>
              Add or edit your profile URL, email, and more
            </Typography>
            <Button sx={{ width: "170px", pl: "0", pt: 3 }}>
              Edit contact info
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default EditProfile;
