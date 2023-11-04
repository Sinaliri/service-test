import { Grid } from "@mui/material";
import React from "react";
import ChatItem from "../ChatItem/ChatItem";

const ChatLayout = ({ Array = [] }) => {
  return (
    <Grid container spacing={1}>
      {Array && Array.length > 0
        ? Array.map((item) => {
            return <ChatItem key={item.id} item={item} />;
          })
        : "no messages recieved"}
    </Grid>
  );
};

export default ChatLayout;
