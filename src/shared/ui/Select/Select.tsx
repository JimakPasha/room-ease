import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { IOption } from "../../types";

interface SortingOptionsProps<T> {
  value: T;
  label: string;
  options: IOption[];
  fullWidth?: boolean;
  onChange: (value: T) => void;
}

export const Select = <T,>({
  value,
  label,
  options,
  fullWidth,
  onChange,
}: SortingOptionsProps<T>) => {
  const handleChange = ({ target }: SelectChangeEvent<T>) =>
    onChange(target.value as T);

  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={`select-${label}`}>{label}</InputLabel>
      <MuiSelect
        value={value}
        onChange={handleChange}
        size="small"
        label={label}
        labelId={`select-${label}`}
      >
        {options.map(({ id, value, label }) => (
          <MenuItem key={id} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
