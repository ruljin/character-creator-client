import PropTypes from "prop-types";
import styles from "../../../../character.module.css";

export const SkillsList = ({ skills, abilities, onChange }) => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
       Skill
        {skills?.length > 0 && (
          <select className={styles.input} placeholder="Skill" onChange={(e) => onChange(e)}>
            {skills.map((skill) => (
              <option key={skill.name} value={skill._id}>{skill.name}</option>
            ))}
          </select>
        )}
      </label>
    </div>
  );
};

SkillsList.propTypes = {
  skills: PropTypes.array,
  abilities: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};