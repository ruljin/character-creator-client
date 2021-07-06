import styles from "../../../../character.module.css";

export const Height = () => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Height
        <input
          className={`${styles.input} ${styles.input__small}`}
          placeholder="Height"
        />
      </label>
    </div>
  );
};
