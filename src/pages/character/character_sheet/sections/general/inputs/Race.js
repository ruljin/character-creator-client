import styles from "../../../../character.module.css";

export const Race = () => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Race *
        <input className={styles.input} placeholder="Race" />
      </label>
      <div className={styles.error}>Race is required!</div>
    </div>
  );
};
