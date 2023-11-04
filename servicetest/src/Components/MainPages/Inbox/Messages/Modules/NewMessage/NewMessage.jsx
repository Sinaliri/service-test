import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import styles from "./NewMessage.module.scss";
import Custominput from "../../../../../MuiShared/Custominput";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import { useDispatch } from "react-redux";
import { sendNewMessage } from "../../../../../../Redux/InboxSlice/InboxSlice";
const NewMessage = ({ id }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setValue(value);
  };
  const sendMessage = () => {
    console.log("press");
    console.log(id);
    dispatch(sendNewMessage({ value, id }));
  };
  return (
    <Grid
      item
      xs={12}
      container
      className={styles.NewMessageContainer + " " + "serviceCenter"}
    >
      <Grid item xs={9}>
        <Custominput
          placeHolder={"Type here..."}
          onChangeHandler={changeHandler}
          value={value}
          type="text"
          width={"80%"}
          onkeyPress={sendMessage}
        />
      </Grid>
      <Grid
        item
        xs={2}
        mb={"10px"}
        className="serviceCenter"
        justifyContent={"flex-end"}
      >
        <Box
          bgcolor={"primary.main"}
          borderRadius={"50%"}
          fontSize={"30px"}
          width={"50px"}
          height={"50px"}
          className="serviceCenter"
        >
          <MicRoundedIcon fontSize="inherit" sx={{ color: "#fff" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default NewMessage;
