import styles from "./Halfborder.module.scss";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const HalfBorder = ({ text }) => {
  return (
    <Box position={"relative"} width={1}>
      <Divider sx={{ width: "100%" }} />
      <Typography className={styles.Text}>{text}</Typography>
    </Box>
  );
};

export default HalfBorder;
