import PropTypes from 'prop-types';
import styles from './tooltip.module.css';

export const Tooltip = ({ hint }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.symbol}>i</span>
            <div className={styles.hint}>{hint}</div>
        </div>
    )
}

Tooltip.propTypes = {
    hint: PropTypes.string,
  };