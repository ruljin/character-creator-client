import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./pin.module.css";

export const Pin = ({ className, absolute }) => {
  const classes = clsx(styles.pin, className, {
    [styles.absolute]: absolute,
  });

  return <div className={classes} />;
};

Pin.propTypes = {
  className: PropTypes.string,
  absolute: PropTypes.bool,
};
