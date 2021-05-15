import React, { useState } from "react";
import { getCharacter } from "../../services/characterCrud";
import { setInStorage } from "../../utils/setInStorage";
import Login from "../../components/login/Login";
import "./Auth.css";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setSerror] = useState(false);

  const handleGetCharacter = (code) => {
    setLoading(true);
    return new Promise((resolve) => {
      getCharacter(code)
        .then((response) => {
          setInStorage("character", JSON.stringify(response.character));
          setSerror(false);
          setLoading(false);
          resolve("OK");
        })
        .catch((error) => {
          console.log("error", error);
          setSerror(true);
          setLoading(false);
          resolve("error");
        });
    });
  };

  return (
    <div className="auth">
      <Login
        loading={loading}
        error={error}
        handleGetCharacter={handleGetCharacter}
      />
    </div>
  );
};

export default Auth;
