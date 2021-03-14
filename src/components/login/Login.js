import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [error, setSerror] = useState();

  const onLoadingCharacter = () => {
    console.log("onLoadingCharacter");
  };

  const onCreatingNewCharacter = () => {
    console.log("onCreatingNewCharacter");
  };

  const buttons = [
    {
      text: "Load character",
      class: "button--negative",
      function: onLoadingCharacter,
    },
    {
      text: "Create new character",
      class: "button--positive",
      function: onCreatingNewCharacter,
    },
  ];

  return (
    <div className="login">
      <div className="login__background" />
      <div className="login__header">
        <h1>Character creator</h1>
      </div>
      <div className="login__buttons">
        <input
          className="input"
          name="characterCode"
          placeholder="Enter character code"
        />
        {buttons.map((button) => (
          <button
            key={`button-${button.text}`}
            className={`button ${button.class}`}
            onClick={button.function}
          >
            {button.text}
          </button>
        ))}
      </div>
      <div className="login__errors">{error}</div>
      <div className="login__copyrights">
        &#169; Ruljin & Ulwothar, All rights reserved
      </div>
    </div>
  );
};

export default Login;
