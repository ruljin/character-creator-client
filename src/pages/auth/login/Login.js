import React, { useState, useContext } from "react";
import { AuthorizationContext } from "../../context/authorizationContext";
import PropTypes from "prop-types";
import { Header } from "./header/Header";
import { Actions } from "./actions/Actions";
import { Error } from "./error/Error";
import { Footer } from "./footer/Footer";
import styles from "../auth.module.css";

export const Login = ({ loading, error, handleGetCharacter }) => {
  const { onSetAuthentication } = useContext(AuthorizationContext);
  const [value, setValue] = useState("");

  async function onLoadingCharacter() {
    const callback = await handleGetCharacter(value);
    callback === "OK" && onSetAuthentication(true);
  }

  const onCreatingNewCharacter = () => {
    onSetAuthentication(true);
  };

  const onInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

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

Login.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  handleGetCharacter: PropTypes.func.isRequired,
};
