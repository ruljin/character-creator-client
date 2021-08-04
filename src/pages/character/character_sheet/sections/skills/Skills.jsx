import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThematicBreak } from "../../../../../components/thematic_break/ThematicBreak";
import { Column } from "../../../../../components/column/Column";
import { Row } from "../../../../../components/row/Row";
import { SkillsList } from "./inputs/SkillsList";
import { Button } from "../../../../../components/button/Button";
import { AbilitiesList } from "./abilities/AbilitiesList";
import styles from "../../../character.module.css";

export const Skills = ({ skills }) => {
  const [selectedSkillId, setSelectedSkillId] = useState(null);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    if (skills.length) {
      setSelectedSkillId(skills[0]._id);
    }
  }, [skills]);

  const onSelectingSkill = (e) => {
    setSelectedSkillId(e.target.value);
  }

  const onClick = () => {
    const searchedAbility = skills.find((skill) => {
      return skill._id === selectedSkillId;
    });
    setAbilities([...abilities, searchedAbility]);
  }

  const onRemovingSkill = (id) => {
    const filteredAbilities = [...abilities].filter((ability) => {
      return ability._id !== id;
    })
    setAbilities(filteredAbilities);
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Skills</h2>
      <ThematicBreak />
      <Column size="large">
        <Row className={styles.row}>
          <SkillsList skills={skills} abilities={abilities} onChange={onSelectingSkill}/>
          <Button variant="primary" onClick={onClick} disabled={skills.length === 0}>
            Add
          </Button>
        </Row>
      </Column>
      <Column size="large">
        <Row className={styles.row}>
          <AbilitiesList abilities={abilities} onClick={onRemovingSkill}/>
        </Row>
      </Column>
    </section>
  );
};

Skills.propTypes = {
  skills: PropTypes.array,
};