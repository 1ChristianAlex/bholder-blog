import React from 'react';
import { TextAreaStyle } from './styles';

interface TextAreaProps {
  textEditor: string;
  minHeight?: number;
  setTextValueEditor(value: string): void;
}

const TextArea: React.FC<TextAreaProps> = ({
  textEditor,
  setTextValueEditor,
  minHeight,
}) => {
  return (
    <TextAreaStyle
      $minHeight={minHeight}
      value={textEditor}
      onChange={(event) => setTextValueEditor(event.target.value)}
    />
  );
};

export default TextArea;
