import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./column.module.css";

export const Column = ({ children, className, size }) => {
  const classes = clsx(styles.column, className, {
    [styles.large]: size === "large",
    [styles.medium]: size === "medium",
  });

  return <div className={classes}>{children}</div>;
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string.isRequired,
};
