import PropTypes from "prop-types";
import { Button } from "../../../../../../components/button/Button";
import styles from "../../../../character.module.css";

export const Ability = ({ ability, onClick }) => {
  return (
      <div className={styles.ability}>
        {ability.name} <span><Button variant="label" onClick={() => onClick(ability._id)}>-</Button></span>
      </div>
  );
};

Ability.propTypes = {
  ability: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};