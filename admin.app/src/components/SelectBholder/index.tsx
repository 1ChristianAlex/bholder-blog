import { InputLabel, MenuItem, Select, SelectProps } from '@material-ui/core';
import React from 'react';

class SelectItens {
  constructor(public value: string | number, public label: string) {}
}

interface SelectBholderProps {
  selectItens: SelectItens[];
  inputLabel: string;
  currentValue: string | number;
}

const SelectBholder: React.FC<SelectBholderProps & SelectProps> = ({
  selectItens,
  inputLabel,
  currentValue,
  ...props
}) => {
  return (
    <>
      <InputLabel>{inputLabel}</InputLabel>
      <Select variant="filled" autoWidth value={currentValue} {...props}>
        {selectItens.map(({ label, value }) => (
          <MenuItem key={`${label}${value}`} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export { SelectBholder, SelectItens };
