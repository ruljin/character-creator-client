import React from "react";
import "./Pin.css";

const Pin = ({ pinClass, absolute }) => {
  return (
    <div className={`pin ${pinClass} ${absolute && "pin--absolute"}`}></div>
  );
};

export default Pin;
