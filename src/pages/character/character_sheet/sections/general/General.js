import { ThematicBreak } from "../../../../../components/thematic_break/ThematicBreak";
import { Column } from "../../../../../components/column/Column.js";
import { Row } from "../../../../../components/row/Row.js";
import { Name } from "./inputs/Name";
import { Race } from "./inputs/Race";
import { Class } from "./inputs/Class";
import { Height } from "./inputs/Height";
import { Weight } from "./inputs/Weight";
import { Gender } from "./inputs/Gender";
import { Alignment } from "./inputs/Alignment";
import { Description } from "./inputs/Description";
import styles from "../../../character.module.css";

export const General = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>General</h2>
      <ThematicBreak />
      <Column>
        <Row>
          <Name />
        </Row>
        <Row>
          <Column>
            <Race />
            <Class />
            <Row>
              <Height />
              <Weight />
            </Row>
          </Column>
          <Column>
            <Gender />
            <Alignment />
            <Description />
          </Column>
        </Row>
      </Column>
    </section>
  );
};
