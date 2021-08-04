import React from "react";
import "./CharacterSheet.css";

const CharacterSheet = () => {
  return (
    <div className="character">
      <section className="character__section">
        <h2 className="character__header">General</h2>
        <div className="character__separator" />
      </section>
      <section className="character__section">
        <h2 className="character__header">Statistics</h2>
        <div className="character__separator" />
      </section>
      <section className="character__section">
        <h2 className="character__header">Skills</h2>
        <div className="character__separator" />
      </section>
      <section className="character__section">
        <h2 className="character__header">Spells</h2>
        <div className="character__separator" />
      </section>
      <section className="character__section">{/* Description */}</section>
    </div>
  );
};

export default CharacterSheet;
