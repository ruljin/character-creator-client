import styles from "../../../../character.module.css";

export const Weight = () => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Weight
        <input
          className={`${styles.input} ${styles.input__small}`}
          type="number"
          placeholder="Weight"
          step={0.1}
        />
      </label>
    </div>
  );
};
