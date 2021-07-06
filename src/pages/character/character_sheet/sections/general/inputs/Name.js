import styles from "../../../../character.module.css";

export const Name = () => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Name *
        <input className={styles.input} placeholder="Name" />
      </label>
      <div className={styles.error}>Character name is required!</div>
    </div>
  );
};
