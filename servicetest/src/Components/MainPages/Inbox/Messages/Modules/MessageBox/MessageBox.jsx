import { Box, Grid, Typography } from "@mui/material";
import styles from "./MessageBox.module.scss";

const MessageBox = ({ message }) => {
  console.log(message);
  return (
    <Grid
      item
      xs={12}
      container
      display={"flex"}
      justifyContent={message.type === "sent" ? "flex-end" : "flex-start"}
    >
      <Box
        className={
          message.type === "sent" ? styles.sentMessage : styles.recievedMessage
        }
      >
        <Typography className={styles.text}>{message.text}</Typography>
        <Typography className={styles.time}>{message.time}</Typography>
      </Box>
    </Grid>
  );
};

export default MessageBox;
