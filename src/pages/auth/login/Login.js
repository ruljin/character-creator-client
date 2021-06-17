import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Header } from "./header/Header";
import { Actions } from "./actions/Actions";
import { Error } from "./error/Error";
import { Footer } from "./footer/Footer";
import styles from "../auth.module.css";

export const Login = ({ loading, error, handleGetCharacter }) => {
  const [value, setValue] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function onLoadingCharacter() {
    const callback = await handleGetCharacter(value);
    callback === "OK" && setRedirect(true);
  }

  const onCreatingNewCharacter = () => {
    setRedirect(true);
  };

  const onInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  if (redirect) {
    return <Redirect to="/character" />;
  }

  return (
    <div className={styles.login}>
      <Header />
      <Actions
        value={value}
        loading={loading}
        onInputChange={onInputChange}
        onLoadingCharacter={onLoadingCharacter}
        onCreatingNewCharacter={onCreatingNewCharacter}
      />
      {error ? <Error /> : null}
      <Footer />
    </div>
  );
};
