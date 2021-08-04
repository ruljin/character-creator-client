import PropTypes from "prop-types";
import styles from "../../../../character.module.css";

export const Class = ({ classes }) => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Class *
        {classes?.length > 0 && (
          <select className={styles.input} placeholder="Class">
            {classes.map((cls) => (
              <option key={cls.name} value={cls._id}>{cls.name}</option>
            ))}
          </select>
        )}
      </label>
      <div className={styles.error}>Class is required!</div>
    </div>
  );
};

Class.propTypes = {
  classes: PropTypes.array,
};