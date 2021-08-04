import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThematicBreak } from "../../../../../components/thematic_break/ThematicBreak";
import { Column } from "../../../../../components/column/Column";
import { Row } from "../../../../../components/row/Row";
import { SpellsList } from "./inputs/SpellsList";
import { Button } from "../../../../../components/button/Button";
import { KnownSpellsList } from "./known_spells/KnownSpellsList";
import styles from "../../../character.module.css";

export const Spells = ({ spells }) => {
  const [selectedSpellId, setSelectedSpellId] = useState(null);
  const [knownSpells, setKnownSpells] = useState([]);

  useEffect(() => {
    if (spells.length) {
      setSelectedSpellId(spells[0]._id);
    }
  }, [spells]);

  const onSelectingSpell = (e) => {
    setSelectedSpellId(e.target.value);
  }

  const onClick = () => {
    const searchedSpell = spells.find((spell) => {
      return spell._id === selectedSpellId;
    });
    setKnownSpells([...knownSpells, searchedSpell]);
  }

  const onRemovingSpell = (id) => {
    const filteredSpells = [...knownSpells].filter((spell) => {
      return spell._id !== id;
    })
    setKnownSpells(filteredSpells);
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Spells</h2>
      <ThematicBreak />
      <Column size="large">
        <Row className={styles.row}>
          <SpellsList spells={spells} knownSpells={knownSpells} onChange={onSelectingSpell}/>
          <Button variant="primary" onClick={onClick} disabled={spells.length === 0}>
            Add
          </Button>
        </Row>
      </Column>
      <Column size="large">
        <Row className={styles.row}>
          <KnownSpellsList knownSpells={knownSpells} onClick={onRemovingSpell}/>
        </Row>
      </Column>
    </section>
  );
};

Spells.propTypes = {
  spells: PropTypes.array,
};