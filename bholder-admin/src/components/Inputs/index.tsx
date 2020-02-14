import React, { ChangeEvent } from 'react';
import { InputContainer, InputT, Label } from './styled';

export interface IInput {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  onChange?:
    | ((event: ChangeEvent<HTMLInputElement>) => void)
    | ((event: ChangeEvent<HTMLTextAreaElement>) => void);
  type?: any;
}

const InputText: React.FC<IInput> = ({
  id,
  name,
  label,
  placeholder,
  ...rest
}) => (
  <InputContainer className={!label ? 'mt-3 ' : ''}>
    {label && <Label htmlFor={id} />}
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
