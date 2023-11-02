import { Box, Button, Grid, Typography } from "@mui/material";
import AuthenticationImage from "../../../assets/Images/Authentication.png";
import FaceBook from "../../../assets/Icons/Facebook.svg";
import Google from "../../../assets/Icons/Google Plus.svg";
import Apple from "../../../assets/Icons/Apple.svg";
import CustomButton from "../../MuiShared/Button";
import HalfBorder from "../../Modules/Halfborder";
import { groupButton } from "../../../Utils/Variant";

const DefaultTemplate = () => {
  return (
    <Grid container spacing={2} margin={"0px"} flexDirection={"column"}>
      <Grid item xs={12} className="serviceCenter">
        <img src={AuthenticationImage} alt="AuthenticationImage" />
      </Grid>
      <Grid item xs={12} className="serviceCenter">
        <Typography variant="h1">Lets you in</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        container
        padding={0}
        width={1}
        spacing={1}
        className="serviceCenter"
        flexDirection={"column"}
        margin={"auto"}
      >
        {groupButton.map((item) => {
          return (
            <CustomButton
              key={item.id}
              variant={"outlined"}
              color={"primary"}
              margin="5px 0"
            >
              <Grid container spacing={2} padding={"10px 20px"}>
                <Grid
                  xs={2}
                  item
                  className="serviceCenter"
                  paddingRight={"10px"}
                >
                  <img
                    className="serviceCenter"
                    src={item.icon}
                    alt={item.id}
                  />
                </Grid>
                <Grid
                  item
                  xs={10}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                >{`countinue with ${item.Text}`}</Grid>
              </Grid>
            </CustomButton>
          );
        })}
      </Grid>
      <Grid item xs={12} width={1} my={"20px"}>
        <HalfBorder text="Or" />
      </Grid>
      <Grid
        item
        xs={12}
        width={1}
        className="serviceCenter"
        flexDirection={"column"}
      >
        <CustomButton variant={"contained"} color={"primary"} margin="5px 0">
          Sign in with password
        </CustomButton>
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"nowrap"}
        justifyContent={"center"}
        my={"20px"}
      >
        =
        <Typography variant="span" color={"gray"}>
          Don't have an account?
        </Typography>
        <Typography variant="span" ml={"15px"} color={"primary"}>
          {" "}
          Sign up
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DefaultTemplate;
