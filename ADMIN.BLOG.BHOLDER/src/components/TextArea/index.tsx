import React, { FC, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { insertValue } from 'context/form/action';
import { useFormDispatch, useForm } from 'context/hooks';
import { CodeArea } from './styled';

interface ITextArea {
  name: string;
}

const TextArea: FC<ITextArea> = ({ name }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { registerField, fieldName } = useField(name);
  const dispatch = useFormDispatch();
  const formValue = useForm(name);
  const handleChange = () => {
    dispatch(insertValue({ name, value: textAreaRef.current?.value }));
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value'
    });
  }, [registerField, fieldName, textAreaRef]);

  return (
    <CodeArea
      name={name}
      ref={textAreaRef}
      value={formValue || ''}
      onChange={handleChange}
    />
  );
};

export default TextArea;
