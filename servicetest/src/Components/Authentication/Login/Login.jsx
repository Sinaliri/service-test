import React, { useState } from "react";

import Layout from "../Modules/Layout";
import { login } from "../../../Utils/Api";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../Redux/UserSlice/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [RegisterationInfo, setRegisterationInfo] = useState({
    email: "",
    password: "",
    rememberPassword: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e, name) => {
    const value = e;

    setRegisterationInfo({
      ...RegisterationInfo,
      [name]: value,
    });
  };

  const submitHandler = async (data) => {
    await login(data).then((res) => {
      console.log(res.data);
      dispatch(setUser(res.data));
      localStorage.setItem("userId", JSON.stringify({ id: res.data.id }));

      // localStorage.setItem("userId", stringify({ id: res.data.id }));
      navigate("/main");
    });
  };
  return (
    <Layout
      text="Login to your
  Account"
      type={"login"}
      values={RegisterationInfo}
      onChangeHandler={handleChange}
      submitHandler={submitHandler}
    />
  );
};

export default Login;
