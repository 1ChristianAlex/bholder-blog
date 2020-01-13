import React from 'react';
import { IInput } from 'interfaces/IComponents';
import { InputContainer, InputT, Label } from './styled';

const InputText: React.FC<IInput> = ({
  id,
  name,
  label,
  placeholder,
  ...rest
}) => (
  <InputContainer>
    <Label htmlFor={id} />
    <InputT
      name={name}
      label={label}
      id={id}
      placeholder={placeholder}
      {...rest}
    />
  </InputContainer>
);
export default InputText;
