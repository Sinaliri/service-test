import React from "react";
import backArrow from "./BackArrow.svg";
const BackAngel = ({ clickHandler }) => {
  return (
    <div onClick={clickHandler}>
      <img src={backArrow} alt="BackAngel" />
    </div>
  );
};

export default BackAngel;
