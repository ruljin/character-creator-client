import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { getCharacterFromStorage } from "./utils/getCharacterFromStorage";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";

export function Routes() {
  const characterLoaded = getCharacterFromStorage();

  return (
    <Switch>
      {characterLoaded ? (
        <Redirect from="/" to="/character" />
      ) : (
        <Route path="/">
          <Auth />
        </Route>
      )}

      {characterLoaded ? (
        // <Page>
        <Home />
      ) : (
        // </Page>
        <Redirect to="/" />
      )}
    </Switch>
  );
}
