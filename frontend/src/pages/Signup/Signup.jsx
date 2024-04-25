import React from "react";
import SignupComponent from "../../component/SignupComponent";
import AuthFooter from "../../component/AuthFooter";
import { Stack } from "@mui/material";

const Signup = () => {
  return (
    <div>
      <Stack>
        <SignupComponent />
      </Stack>
      <Stack>
        <AuthFooter />
      </Stack>
    </div>
  );
};

export default Signup;
