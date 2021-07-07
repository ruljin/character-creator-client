import { ThematicBreak } from "../../../../../components/thematic_break/ThematicBreak";
import { Column } from "../../../../../components/column/Column.js";
import { Row } from "../../../../../components/row/Row.js";
import { Strength } from "./inputs/Strength";
import { Consitution } from "./inputs/Consitution";
import { Dexterity } from "./inputs/Dexterity";
import { Intelligence } from "./inputs/Intelligence";
import { Wisdom } from "./inputs/Wisdom";
import { Charisma } from "./inputs/Charisma";
import styles from "../../../character.module.css";

export const Statistics = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Statistics</h2>
      <ThematicBreak />
      <Column>
        <Row>
          <Strength />
          <Consitution />
          <Dexterity />
          <Intelligence />
          <Wisdom />
          <Charisma />
        </Row>
      </Column>
    </section>
  );
};
