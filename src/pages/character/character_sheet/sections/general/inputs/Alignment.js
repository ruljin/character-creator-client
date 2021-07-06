import styles from "../../../../character.module.css";

export const Alignment = () => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Alignment *
        <input className={styles.input} placeholder="Alignment" />
      </label>
      <div className={styles.error}>Alignment is required!</div>
    </div>
  );
};
