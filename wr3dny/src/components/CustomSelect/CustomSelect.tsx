import { ChangeEvent } from "react";
import styles from "./CustomSelect.module.css";

interface Props {
  options: string[];
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
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}

        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
