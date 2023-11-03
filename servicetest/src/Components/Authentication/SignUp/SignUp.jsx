import React, { useState } from "react";

import Layout from "../Modules/Layout";
import { login, signup } from "../../../Utils/Api";
import { stringify } from "uuid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Redux/UserSlice/userSlice";

const SignUp = () => {
  const [RegisterationInfo, setRegisterationInfo] = useState({
    email: "",
    password: "",
    rememberPassword: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e, name) => {
    const value = e;

    setRegisterationInfo({
      ...RegisterationInfo,
      [name]: value,
    });
  };
  const submitHandler = async (data) => {
    await signup(data).then((res) => {
      console.log(res.data);
      dispatch(setUser(res.data));
      localStorage.setItem("userId", JSON.stringify({ id: res.data.id }));
      navigate("/main");
    });
  };

  return (
    <Layout
      text="Create Your Account"
      type={"SignUp"}
      values={RegisterationInfo}
      onChangeHandler={handleChange}
      submitHandler={submitHandler}
    />
  );
};

export default SignUp;
