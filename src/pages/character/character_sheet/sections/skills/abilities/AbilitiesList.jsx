import PropTypes from "prop-types";
import { Ability } from "./Ability";
import styles from "../../../../character.module.css";

export const AbilitiesList = ({ abilities, onClick }) => {
  return (
      <div className={styles.spells_and_abilities}>
        {abilities.length > 0 ? (
        <>
        {abilities.map((ability) => (
            <Ability key={ability._id} ability={ability} onClick={onClick}/>
        ))}
        </>) : null}
      </div>
  );
};

AbilitiesList.propTypes = {
  abilities: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};