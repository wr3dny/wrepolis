import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

type ButtonType = "black" | "white";

interface Props {
  label: string;
  onClick: () => void;
  icon?: React.ElementType;
  type: ButtonType;
}

export const Button = ({ label, onClick, icon: Icon, type }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.container, styles[type])}
    >
      {Icon && <Icon />}
      <span>{label}</span>
    </button>
  );
};
