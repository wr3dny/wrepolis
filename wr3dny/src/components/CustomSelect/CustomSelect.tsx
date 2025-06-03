import React, { ChangeEvent } from "react";

export interface Option {
  label: string;
  value: string | number;
}

interface Props {
  label?: string;
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const CustomSelect = ({
  label,
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

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
      {label && (
        <label htmlFor={name} style={{ marginBottom: 4 }}>
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        style={{
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: 4,
          fontSize: "1rem",
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
