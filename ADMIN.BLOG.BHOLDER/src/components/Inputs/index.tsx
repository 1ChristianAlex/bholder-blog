import React, { useEffect, useRef, ChangeEvent } from 'react';
import { useField } from '@unform/core';
import { useFormDispatch } from 'context/hooks';
import { insertValue } from 'context/form/action';
import { InputContainer, InputT, Label } from './styled';

export interface IInput {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: any;
}

const InputText: React.FC<IInput> = ({
  id,
  name,
  label,
  placeholder,
  ...rest
}) => {
  const { fieldName, registerField } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useFormDispatch();

  const handleChange = () => {
    dispatch(insertValue({ name: fieldName, value: inputRef.current?.value }));
  };
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef?.current
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer className={!label ? 'mt-3 ' : ''}>
      {label && <Label htmlFor={id} />}
      <InputT
        name={name}
        id={id}
        placeholder={placeholder}
        {...rest}
        ref={inputRef}
        onChange={handleChange}
      />
    </InputContainer>
  );
};
export default InputText;
