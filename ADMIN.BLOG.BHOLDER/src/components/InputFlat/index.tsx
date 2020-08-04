import React, { ChangeEvent, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { InputContainer, InputT, Label } from './styled';

export interface IInput {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: any;
}

const InputTextFlat: React.FC<IInput> = ({
  id,
  name,
  label,
  placeholder,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    });
  }, [registerField, inputRef, fieldName]);

  return (
    <InputContainer>
      <Label htmlFor={id} />
      <InputT
        ref={inputRef}
        className="teste"
        name={name}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </InputContainer>
  );
};
export default InputTextFlat;
