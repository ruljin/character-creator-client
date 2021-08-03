import styles from "../../../../character.module.css";

export const Gender = () => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Gender *
        <input className={styles.input} placeholder="Gender" />
      </label>
      <div className={styles.error}>Gender is required!</div>
    </div>
  );
};
