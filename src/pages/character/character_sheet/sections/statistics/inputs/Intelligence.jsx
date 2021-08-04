import clsx from 'clsx';
import { Tooltip } from "../../../../../../components/tooltip/Tooltip";
import styles from "../../../../character.module.css";

export const Intelligence = () => {
  const classes = clsx(styles.input, styles.input__tiny);

  return (
    <div className={styles.input__wrapper}>
      <label className={styles.label}>
        <span className={styles.label__wrapper}>
          Int <Tooltip hint="Int"/>
        </span>
        <input className={classes} type="number" placeholder="00" step={0.1}/>
      </label>
    </div>
  );
};
