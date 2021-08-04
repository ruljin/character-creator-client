import React from "react";
import Pin from "../pin/Pin";
import "./ActionSummary.css";

export const ActionSummary = ({ mode, code }) => {
  return (
    <div className="action-summary">
      <Pin pinClass="pin--shaman pin--top" absolute={true} />
      <div className="action-summary__header">
        <h2>
          {mode === "create" ? "Character created" : "Character updated"}!
        </h2>
      </div>
      <p className="action-summary__paragraph">
        Character with code <b>{code}</b> was{" "}
        {mode === "create" ? "created" : "updated"} correctly! Click the button
        bellow, to return to editing.
      </p>
      <div className="action-summary__buttons">
        <button className="button button--negative">
          Go back to character page
        </button>
      </div>
      <Pin pinClass="pin--barbarian pin--bottom" absolute={true} />
    </div>
  );
};

export default ActionSummary;
