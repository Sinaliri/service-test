import { Box, Grid, Typography } from "@mui/material";
import style from "./Service.module.scss";

import { Link } from "react-router-dom";

const Service = ({ icon, bgcolor, title, link, id }) => {
  return (
    <Grid
      item
      xs={3}
      //   lg
      className={style.ServiceWrapper}
    >
      <Link
        to={id !== "More" ? `/main/services/${id}` : "/main/services"}
        color="serviceTitle"
      >
        <Box
          style={{ backgroundColor: `${bgcolor}80` }}
          className={style.ServiceImageWrapper}
        >
          <Box className={style.ServiceImageContainer}>
            <img src={icon} alt={title} />
          </Box>
        </Box>
        <Typography
          variant="serviceTitle"
          my={"10px !important"}
          width={1}
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          {title}
        </Typography>
      </Link>
    </Grid>
  );
};

export default Service;
