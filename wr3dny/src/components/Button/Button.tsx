import React from "react";
import styles from "./Button.module.css";

interface Props {
  label: string;
  onClick: () => void;
  icon?: React.ElementType;
}

export const Button = ({ label, onClick, icon: Icon }: Props) => {
  return (
    <button onClick={onClick} className={styles.container}>
      {Icon && <Icon />}
      <span>{label}</span>
    </button>
  );
};
