import React, { useState } from "react";
import { getCharacter } from "../../resources/characters/index";
import { setInStorage } from "../../utils/setInStorage";
import { Login } from "./login/Login";
import styles from "./auth.module.css";

export const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGetCharacter = (code) => {
    setLoading(true);
    return new Promise((resolve) => {
      getCharacter(code)
        .then((response) => {
          setInStorage("character", JSON.stringify(response.character));
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
