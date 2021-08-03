import styles from "../../../../character.module.css";

export const Description = () => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Description
        <input className={styles.input} placeholder="Description" />
      </label>
    </div>
  );
};
