import PropTypes from "prop-types";
import styles from "../../../../character.module.css";

export const Race = ({ races }) => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        Race *
        {races?.length > 0 && (
          <select className={styles.input} placeholder="Race">
            {races.map((race) => (
              <option key={race.name} value={race._id}>{race.name}</option>
            ))}
          </select>
        )}
      </label>
      <div className={styles.error}>Race is required!</div>
    </div>
  );
};

Race.propTypes = {
  races: PropTypes.array,
};