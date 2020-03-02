import React, { FC, useEffect, useRef, ChangeEvent } from 'react';
import { useField } from '@unform/core';
import { CodeArea } from './styled';

interface ITextArea {
  name: string;
  defaultValue: string;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
}

const TextArea: FC<ITextArea> = ({ name, defaultValue, changeValue }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [registerField, fieldName, textAreaRef]);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeValue(e.target.value);
  };
  return (
    <CodeArea
      name={name}
      ref={textAreaRef}
      value={defaultValue}
      onChange={handleChange}
    />
  );
};

export default TextArea;
