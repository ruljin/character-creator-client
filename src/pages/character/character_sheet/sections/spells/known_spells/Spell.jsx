import PropTypes from "prop-types";
import { Button } from "../../../../../../components/button/Button";
import styles from "../../../../character.module.css";

export const Spell = ({ spell, onClick }) => {
  return (
      <div className={styles.spell}>
        {spell.name} ({`PL: ${spell.powerLevel}; MP: ${spell.cost}`}) <span><Button variant="label" onClick={() => onClick(spell._id)}>-</Button></span>
      </div>
  );
};

Spell.propTypes = {
  spell: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};