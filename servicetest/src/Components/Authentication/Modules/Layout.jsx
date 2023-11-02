import CustomButton from "../../MuiShared/Button";
import HalfBorder from "../../Modules/Halfborder";
import { Box, Button, Grid, Typography } from "@mui/material";
import { groupButton } from "../../../Utils/Variant";
import EmailIcon from "@mui/icons-material/Email";
import Custominput from "../../MuiShared/Custominput";
import CustomCheckBox from "../../MuiShared/CustomCheckBox";
import PushBack from "../../Modules/PushBack/PushBack";
import { Link } from "react-router-dom";
const Layout = ({ text, type, values, onChangeHandler }) => {
  return (
    <Grid
      container
      //   spacing={2}
      margin={"0px"}
      pt={"52px"}
      flexDirection={"column"}
    >
      <PushBack />
      <Grid
        item
        xs={12}
        m={"35px 0 52px 0"}
        // className="serviceCenter"
        justifyContent={"felx-start"}
      >
        <Typography lineHeight={"40px"} variant="h1" m={0} p={0}>
          {text}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        width={1}
        className="serviceCenter"
        flexDirection={"column"}
      >
        <Custominput
          type="text"
          onChangeHandler={onChangeHandler}
          value={values.email}
          helperText="email is not valid"
          name="email"
          placeHolder="email"
          icon={<EmailIcon />}
          validationIsNeeded={true}
        />
        <Custominput
          type="password"
          onChangeHandler={onChangeHandler}
          value={values.password}
          helperText="password is not valid"
          name="password"
          placeHolder="password"
          validationIsNeeded={true}
          icon={<EmailIcon style={{ fontSize: "inherit" }} />}
        />
        <CustomCheckBox
          value={values.rememberPassword}
          text="remember me"
          onChangleHandler={onChangeHandler}
        />

        <CustomButton variant={"contained"} color={"primary"} margin="5px 0">
          {type === "login" ? "Sign in" : "Sign up"}
        </CustomButton>
        {type === "login" && (
          <Box
            width={1}
            display={"flex"}
            flexDirection={"row"}
            flexWrap={"nowrap"}
            justifyContent={"center"}
            my={"20px"}
          >
            <Typography variant="span" ml={"15px"} color={"primary"}>
              {" "}
              Forgot password?{" "}
            </Typography>
          </Box>
        )}
      </Grid>
      <Grid item xs={12} width={1} my={"45px"}>
        <HalfBorder text={type === "login" ? "Or" : "or countinue with"} />
      </Grid>
      <Grid
        item
        xs={12}
        container
        padding={0}
        width={1}
        spacing={1}
        className="serviceCenter"
        flexDirection={"row"}
        margin={"auto auto 38px auto"}
        justifyContent={"center"}
      >
        {groupButton.map((item) => {
          return (
            <CustomButton
              key={item.id}
              variant={"outlined"}
              color={"primary"}
              margin="5px 13px"
              width="fit-content"
            >
              <img className="serviceCenter" src={item.icon} alt={item.id} />
            </CustomButton>
          );
        })}
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"nowrap"}
        justifyContent={"center"}
        mt={"20px"}
      >
        <Typography variant="span" color={"gray"}>
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
        </Typography>
        <Link to={type === "login" ? "/signup" : "/login"}>
          <Typography variant="span" ml={"15px"} color={"primary"}>
            {" "}
            {type === "login" ? "Sign up" : "Sign in"}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Layout;
