import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./row.module.css";

export const Row = ({ children, className }) => {
  const classes = clsx(styles.row, className);

  return <div className={classes}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
