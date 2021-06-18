import React from "react";
import { CharacterSheet } from "./character_sheet/CharacterSheet";
import styles from "./character.module.css";

export const Character = () => {
  return (
    <div className={styles.character}>
      <CharacterSheet />
    </div>
  );
};
