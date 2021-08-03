import PropTypes from "prop-types";
import styles from "../../../../character.module.css";

export const Alignment = ({ alignments }) => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Alignment *
        {alignments?.length > 0 && (
          <select className={styles.input} placeholder="Class">
            {alignments.map((alignment) => (
              <option key={alignment.name} value={alignment._id}>{alignment.name}</option>
            ))}
          </select>
        )}
      </label>
      <div className={styles.error}>Alignment is required!</div>
    </div>
  );
};

Alignment.propTypes = {
  alignments: PropTypes.array,
};