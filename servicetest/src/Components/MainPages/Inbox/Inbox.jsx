import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import PushBack from "../../Modules/PushBack/PushBack";
import { useSelector } from "react-redux";
import { communicationsSelector } from "../../../Redux/selector";
import CallLayout from "./CallLayout/CallLayout";
import ChatLayout from "./ChatLayout/ChatLayout";

const Inbox = () => {
  const [value, setValue] = useState("chats");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [recievedItems, setRecievedItems] = useState([]);
  const communications = useSelector((state) => state.inbox.communications);
  let status = useSelector((state) => state.inbox.status);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container my={"50px"} position={"relative"}>
      <Grid item xs={12}>
        <PushBack title={"Inbox"} />
      </Grid>
      <Grid item xs={12} container>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="communucations tabs"
          >
            <Tab sx={{ flex: "1 1 0" }} value="chats" label="Chats" />
            <Tab sx={{ flex: "1 1 0" }} value="calls" label="Calls" />
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={12} container>
        {value === "calls" ? (
          <CallLayout Array={communications} />
        ) : (
          <ChatLayout Array={communications} />
        )}
      </Grid>
      <Navbar />
    </Grid>
  );
};

export default Inbox;
