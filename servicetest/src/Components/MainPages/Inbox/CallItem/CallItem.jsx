import { Box, Grid, Typography } from "@mui/material";
import styles from "../ChatItem/inboxItem.module.scss";
import CallEndIcon from "@mui/icons-material/CallEnd";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
const CallItem = ({ item }) => {
  return (
    <Grid item xs={12} container className={styles.inboxItem} mt={"20px"}>
      <Grid item xs={2} className="serviceCenter">
        <Box className={styles.contactImage}>
          <img src={item.image} alt={item.id} />
        </Box>
      </Grid>
      <Grid item xs={8} className={styles.contactDetail}>
        <Typography variant="callsAndChat">{item.userName}</Typography>
        <Typography variant="h5" color={"gray.main"} display={"flex"}>
          <CallEndIcon
            sx={{
              fontSize: "18px",
              mr: "5px",
              color:
                item.calls[item.calls.length - 1].type === "outComming"
                  ? "#00ff00"
                  : "#0039ff",
            }}
          />

          {`${item.calls[item.calls.length - 1].type || ""} | ${
            item.calls[item.calls.length - 1].time || ""
          } `}
        </Typography>
      </Grid>
      <Grid item xs={2} className="serviceCenter" fontSize={"25px"}>
        <LocalPhoneOutlinedIcon fontSize="inherit" color="primary" />
      </Grid>
    </Grid>
  );
};

export default CallItem;
