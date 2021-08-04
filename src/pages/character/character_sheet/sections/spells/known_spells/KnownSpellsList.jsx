import PropTypes from "prop-types";
import { Spell } from "./Spell";
import styles from "../../../../character.module.css";

export const KnownSpellsList = ({ knownSpells, onClick }) => {
  return (
      <div className={styles.spells_and_abilities}>
        {knownSpells.length > 0 ? (
        <>
        {knownSpells.map((spell) => (
            <Spell key={spell._id} spell={spell} onClick={onClick}/>
        ))}
        </>) : null}
      </div>
  );
};

KnownSpellsList.propTypes = {
  abilities: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};