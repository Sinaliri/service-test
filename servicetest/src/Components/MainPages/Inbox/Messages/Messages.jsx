import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PushBack from "../../../Modules/PushBack/PushBack";
import MessagesTemplate from "./Modules/MessagesTemplate";
import NewMessage from "./Modules/NewMessage/NewMessage";

const Messages = () => {
  const params = useParams();
  console.log(params);
  const id = params.id;
  const communications = useSelector((state) => state.inbox.communications);
  const [user, setUser] = useState({});
  useEffect(() => {
    let user = communications.find((item) => item.id == id);
    setUser(user);
    console.log(user);
  }, [id, communications]);

  return (
    <Grid container my={"50px"} position={"relative"}>
      <Grid item xs={12}>
        <PushBack title={user.userName ?? ""} />
      </Grid>
      <MessagesTemplate user={user} />
      <Grid item xs={12}>
        <NewMessage id={id} />
      </Grid>
    </Grid>
  );
};
export default Messages;
