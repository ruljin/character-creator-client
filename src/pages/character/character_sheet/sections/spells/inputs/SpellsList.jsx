import PropTypes from "prop-types";
import styles from "../../../../character.module.css";

export const SpellsList = ({ spells, knownSpells, onChange }) => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
       Spell
        {spells?.length > 0 && (
          <select className={styles.input} placeholder="Spell" onChange={(e) => onChange(e)}>
            {spells.map((spell) => (
              <option key={spell.name} value={spell._id}>{spell.name}</option>
            ))}
          </select>
        )}
      </label>
    </div>
  );
};

SpellsList.propTypes = {
  spells: PropTypes.array,
  knownSpells: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};