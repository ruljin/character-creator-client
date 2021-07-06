import styles from "../../../../character.module.css";

export const Class = () => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Class *
        <input className={styles.input} placeholder="Class" />
      </label>
      <div className={styles.error}>Class is required!</div>
    </div>
  );
};
