import React, { useState, useContext } from "react";
import { AuthorizationContext } from "../../context/authorizationContext";
import { getCharacter } from "../../resources/characters/index";
import { Login } from "./login/Login";
import styles from "./auth.module.css";

export const Auth = () => {
  const { onSetCharacter } = useContext(AuthorizationContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGetCharacter = (code) => {
    setLoading(true);
    return new Promise((resolve) => {
      getCharacter(code)
        .then((response) => {
          onSetCharacter(response.character);
          setError(false);
          setLoading(false);
          resolve("OK");
        })
        .catch((error) => {
          console.log("error", error);
          setError(true);
          setLoading(false);
          resolve("error");
        });
    });
  };

  return (
    <div className={styles.auth}>
      <Login
        loading={loading}
        error={error}
        handleGetCharacter={handleGetCharacter}
      />
    </div>
  );
};
