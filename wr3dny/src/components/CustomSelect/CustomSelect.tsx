import { ChangeEvent } from "react";
import styles from "./CustomSelect.module.css";

export interface Option {
  label: string;
  value: string | number;
}

interface Props {
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const CustomSelect = ({
  options,
  value,
  onChange,
  name,
  placeholder,
  disabled = false,
}: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  console.log(value);

  return (
    <div className={styles.container}>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={styles.select}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            <div className={styles.value}> {opt.label}</div>
          </option>
        ))}
      </select>
    </div>
  );
};
