import React, { useState } from "react";

import Layout from "../Modules/Layout";

const SignUp = () => {
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
      text="Create Your Account"
      type={"SignUp"}
      values={RegisterationInfo}
      onChangeHandler={handleChange}
    />
  );
};

export default SignUp;
