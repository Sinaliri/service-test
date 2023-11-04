import { Box, Grid } from "@mui/material";
import "../../../assets/styles/customdatePicker.scss";
import React, { useEffect, useState } from "react";
import PushBack from "../../Modules/PushBack/PushBack";
import Custominput from "../../MuiShared/Custominput";
import EmailIcon from "@mui/icons-material/Email";
import { editData, getUserData } from "../../../Utils/Api";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { MobileDatePicker } from "@mui/x-date-pickers";
import BadgeIcon from "@mui/icons-material/Badge";
import dayjs from "dayjs";
import CustomButton from "../../MuiShared/Button";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Redux/UserSlice/userSlice";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  const [registerationInfo, setRegisterationInfo] = useState();
  let userId = localStorage.getItem("userId");
  userId = JSON.parse(userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getUserData(userId.id).then((res) => {
      console.log(res.data);
      setRegisterationInfo(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  const updateInfo = () => {
    editData(userId.id, registerationInfo).then((res) => {
      dispatch(setUser(res.data));
      navigate("/profile");
    });
  };
  const handleChange = (e, name) => {
    const value = e;

    setRegisterationInfo({
      ...registerationInfo,
      [name]: value,
    });
  };
  return (
    <Grid container my={"50px"}>
      <Grid item xs={12}>
        <PushBack title={"Edit Profile"} link={"/profile"} />
      </Grid>

      {registerationInfo ? (
        <>
          <Grid item xs={12} container my={"40px"}>
            <Custominput
              value={registerationInfo.name}
              name={"name"}
              placeHolder={"name"}
              onChangeHandler={handleChange}
              validationIsNeeded={true}
              type="text"
              icon={<BadgeIcon />}
              helperText="name Required"
            />
            <Custominput
              value={registerationInfo.email}
              name={"email"}
              placeHolder={"email"}
              onChangeHandler={handleChange}
              helperText="email is required"
              icon={<EmailIcon />}
              validationIsNeeded={true}
              type="text"
            />
            <Custominput
              value={registerationInfo.password}
              name={"password"}
              placeHolder={"password"}
              onChangeHandler={handleChange}
              validationIsNeeded={true}
              type="password"
              helperText="password required"
            />

            <Box
              display={"flex"}
              bgcolor={"#0000000f"}
              width={1}
              height={"40px !important"}
              borderRadius={"20px"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              padding={"10px 0"}
              mt={"5px"}
            >
              <Box width={"10%"} pl={2} className="serviceCenter">
                <CalendarMonthIcon sx={{ fontSize: "18px", color: "grey" }} />
              </Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  className="customDatePicker"
                  sx={{ width: "90%", px: "0", ml: "0" }}
                  views={["year", "day", "month"]}
                  value={dayjs.unix(registerationInfo.age)}
                  onChange={(newValue) =>
                    handleChange(dayjs(newValue).unix(), "age")
                  }
                />
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <CustomButton
              variant={"contained"}
              onClickHandler={() => updateInfo()}
            >
              update
            </CustomButton>
          </Grid>
        </>
      ) : (
        "data is loading"
      )}
    </Grid>
  );
};

export default EditProfile;
