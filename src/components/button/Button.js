import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./button.module.css";

export const Button = ({
  children,
  variant,
  type = "button",
  onClick,
  disabled,
}) => {
  const classes = clsx(styles.button, {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
  });

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
