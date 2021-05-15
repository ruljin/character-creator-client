import React, { useState } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  const { loading, error, handleGetCharacter } = props;
  const [value, setValue] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);

  async function onLoadingCharacter() {
    const callback = await handleGetCharacter(value);
    callback === "OK" && setShouldRedirect(true);
  }

  const onCreatingNewCharacter = () => {
    setShouldRedirect(true);
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

  const onInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  if (shouldRedirect) {
    return <Redirect to="/character" />;
  }

  return (
    <div className="login">
      <div className="login__background" />
      <div className="login__header">
        <h1>Character creator</h1>
      </div>
      <div className="login__buttons">
        <input
          className="input"
          type="text"
          name="characterCode"
          placeholder="Enter character code"
          value={value}
          onChange={(e) => onInputChange(e)}
          disabled={loading}
        />
        {buttons.map((button) => (
          <button
            key={`button-${button.text}`}
            className={`button ${button.class}`}
            onClick={button.function}
            disabled={loading}
          >
            {button.text}
          </button>
        ))}
      </div>
      <div className="login__errors">
        {error && <>Provided code is invalid!</>}
      </div>
      <div className="login__copyrights">
        &#169;{" "}
        <a
          className="login__link"
          href="https://github.com/ruljin"
          target="_blank"
          rel="noreferrer"
        >
          Ruljin
        </a>
        &{" "}
        <a
          className="login__link"
          href="https://github.com/Ulwothar"
          target="_blank"
          rel="noreferrer"
        >
          Ulwothar
        </a>
        , All rights reserved
      </div>
    </div>
  );
};

export default Login;
