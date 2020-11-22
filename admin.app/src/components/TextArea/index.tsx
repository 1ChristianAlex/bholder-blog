import React from 'react';
import { TextAreaStyle } from './styles';

interface TextAreaProps {
  textEditor: string;
  setTextValueEditor(value: string): void;
}

const TextArea: React.FC<TextAreaProps> = ({
  textEditor,
  setTextValueEditor,
}) => {
  return (
    <TextAreaStyle
      value={textEditor}
      onChange={(event) => setTextValueEditor(event.target.value)}
    />
  );
};

export default TextArea;
