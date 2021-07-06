import styles from "../../../../character.module.css";

export const Weight = () => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Weight
        <input
          className={`${styles.input} ${styles.input__small}`}
          placeholder="Weight"
        />
      </label>
    </div>
  );
};
