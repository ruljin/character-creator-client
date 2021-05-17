import React, { useState, useContext } from "react";
import { AuthorizationContext } from "../../context/authorizationContext";
import { getCharacter } from "../../services/characterCrud";
import Login from "../../components/login/Login";
import "./Auth.css";

const Auth = () => {
  const { onSetCharacter } = useContext(AuthorizationContext);
  const [loading, setLoading] = useState(false);
  const [error, setSerror] = useState(false);

  const handleGetCharacter = (code) => {
    setLoading(true);
    return new Promise((resolve) => {
      getCharacter(code)
        .then((response) => {
          onSetCharacter(response.character);
          setSerror(false);
          setLoading(false);
          resolve("OK");
        })
        .catch((error) => {
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
