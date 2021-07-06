import PropTypes from "prop-types";
import styles from "./column.module.css";

export const Column = ({ children }) => {
  return <div className={styles.column}>{children}</div>;
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
};
