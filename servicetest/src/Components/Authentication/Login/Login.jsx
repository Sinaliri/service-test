import React, { useState } from "react";

import Layout from "../Modules/Layout";

const Login = () => {
  const [RegisterationInfo, setRegisterationInfo] = useState({
    email: "",
    password: "",
    rememberPassword: false,
  });
  const handleChange = (e, name) => {
    const value = e;

    setRegisterationInfo({
      ...RegisterationInfo,
      [name]: value,
    });
  };

  return (
    <Layout
      text="Login to your
  Account"
      type={"login"}
      values={RegisterationInfo}
      onChangeHandler={handleChange}
    />
  );
};

export default Login;
