import React, { FC, useEffect, useRef } from 'react';
import { CodeArea } from './styled';
import { useField } from '@unform/core';

interface ITextArea {
  name: string;
}

const TextArea: FC<ITextArea> = ({ name }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [registerField, fieldName, textAreaRef]);

  return <CodeArea name={name} ref={textAreaRef} />;
};

export default TextArea;
