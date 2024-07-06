import { ChangeEvent, FC } from "react";

import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

interface CheckboxProps {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, label, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <FormControlLabel
      control={<MuiCheckbox checked={checked} onChange={handleChange} />}
      label={label}
    />
  );
};
