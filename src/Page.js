import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";

export const Page = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};
