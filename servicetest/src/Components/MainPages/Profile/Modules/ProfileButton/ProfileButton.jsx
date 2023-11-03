import { Grid, Typography } from "@mui/material";
import styles from "./ProfileButton.module.scss";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
const ProfileButton = ({ item }) => {
  const LogoutHandler = () => {
    if (item.title === "Logout") {
      localStorage.removeItem("userId");
    }
  };
  return (
    <Grid item xs={12} container className={styles.ProfileButton}>
      <Link
        to={item.link}
        onClick={() => LogoutHandler()}
        style={{ width: "inherit", margin: "0", padding: "0" }}
      >
        <Grid
          item
          xs={12}
          container
          color={item.title !== "Logout" ? "gray.main" : "red"}
          alignItems={"center"}
        >
          <Grid
            item
            xs={2}
            color={"inherit"}
            fontSize={"28px"}
            className="serviceCenter"
            justifyContent={"flex-start"}
          >
            {item.icon}
          </Grid>
          <Grid
            item
            xs={8}
            color={"inherit"}
            className="serviceCenter"
            justifyContent={"flex-start"}
          >
            <Typography color={"inherit"} variant="span">
              {item.title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            color={"inherit"}
            fontSize={"25px"}
            className="serviceCenter"
          >
            {item.title !== "Logout" && (
              <EastIcon color="inherit" fontSize="inherit" />
            )}
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
};

export default ProfileButton;
