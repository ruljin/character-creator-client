import React, { useState, useEffect, useCallback } from "react";
import { getFormData } from "../../resources/characters/index";
import { CharacterSheet } from "./character_sheet/CharacterSheet";
import styles from "./character.module.css";

export const Character = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGetForm = useCallback(() => {
    setLoading(true);
    return new Promise((resolve) => {
      getFormData()
        .then((data) => {
          setFormData(data);
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
  }, [setFormData, setError, setLoading]);

  useEffect(() => {
    handleGetForm();
  }, [handleGetForm]);

  return (
    <div className={styles.character}>
      <CharacterSheet formData={formData} />
    </div>
  );
};
