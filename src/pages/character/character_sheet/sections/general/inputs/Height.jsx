import styles from "../../../../character.module.css";

export const Height = () => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Height
        <input
          className={`${styles.input} ${styles.input__small}`}
          type="number"
          placeholder="Height"
          step={0.1}
        />
      </label>
    </div>
  );
};
