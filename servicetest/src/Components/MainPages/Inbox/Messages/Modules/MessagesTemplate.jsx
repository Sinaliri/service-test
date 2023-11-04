import { Grid } from "@mui/material";
import React from "react";
import MessageBox from "./MessageBox/MessageBox";

const MessagesTemplate = ({ user }) => {
  return (
    <Grid container>
      {user.messages &&
        user.messages.length > 0 &&
        user.messages.map((item, index) => {
          return <MessageBox key={index} message={item} />;
        })}
    </Grid>
  );
};

export default MessagesTemplate;
