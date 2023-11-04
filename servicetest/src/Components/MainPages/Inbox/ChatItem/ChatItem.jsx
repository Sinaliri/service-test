import { Box, Grid, Typography } from "@mui/material";
import styles from "./inboxItem.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUnreadMessages } from "../../../../Redux/InboxSlice/InboxSlice";

const ChatItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToMessage = (id) => {
    dispatch(clearUnreadMessages(id));
    navigate("/inbox/Messages/" + id);
  };
  return (
    <Grid
      item
      xs={12}
      container
      className={styles.inboxItem}
      mt={"20px"}
      onClick={() => goToMessage(item.id)}
    >
      <Grid item xs={2} className="serviceCenter">
        <Box className={styles.contactImage}>
          <img src={item.image} alt={item.id} />
        </Box>
      </Grid>
      <Grid item xs={8} className={styles.contactDetail}>
        <Typography variant="callsAndChat">{item.userName}</Typography>
        <Typography variant="h5">
          {item.messages[item.messages.length - 1].text || ""}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Box className="serviceCenter" flexDirection={"column"}>
          <Typography
            bgcolor={item.unreadMessages == 0 ? "transparent" : "primary.main"}
            variant="h5"
            className={styles.unreadMessages + " " + "serviceCenter"}
          >
            {item.unreadMessages == 0 ? "" : item.unreadMessages}
          </Typography>
          <Typography variant="smallText" color={"gray.main"}>
            {item.messages[item.messages.length - 1].time || ""}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChatItem;
