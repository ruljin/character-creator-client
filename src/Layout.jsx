import React from "react";

export const Layout = (props) => {
  const { children } = props;

  return <div className="layout">{children}</div>;
};
