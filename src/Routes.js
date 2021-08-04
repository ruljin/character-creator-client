import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { AuthorizationContext } from "./context/authorizationContext";
import { Auth } from "./pages/auth/Auth";
import { Layout } from "./Layout";
import { Page } from "./Page";

export function Routes() {
  const { isAuthenticated } = useContext(AuthorizationContext);

  return (
    <Switch>
      {isAuthenticated ? (
        <Layout>
          <Page />
        </Layout>
      ) : (
        <Route path="/">
          <Auth />
        </Route>
      )}
    </Switch>
  );
}
