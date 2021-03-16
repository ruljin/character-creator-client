import React from "react";
import "./Pin.css";

const Pin = ({ pinClass }) => {
  return <div className={`pin ${pinClass}`}></div>;
};

export default Pin;
