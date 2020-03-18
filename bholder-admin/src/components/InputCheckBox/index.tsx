import React, { FC } from 'react';
import { Checkbox, InputContainer, InputLabel } from './styled';

interface IInputCheckboxProps {
  inputId: string;
  InputText: string;
}

const InputCheckbox: FC<IInputCheckboxProps> = ({ InputText, inputId }) => {
  return (
    <InputContainer>
      <Checkbox
        id={inputId}
        type="checkbox"
        aria-label="Checkbox for following text input"
      />
      <InputLabel htmlFor={inputId}>{InputText}</InputLabel>
    </InputContainer>
  );
};

export default InputCheckbox;
