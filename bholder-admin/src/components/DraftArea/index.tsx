import React, { FC, useState, useEffect, useRef } from 'react';
import { Editor, EditorState } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';
import { useField } from '@unform/core';
import draftToHtml from 'draftjs-to-html';
import { EditorStyle } from './styled';

interface IDraftArea {
  name: string;
}

const DraftArea: FC<IDraftArea> = ({ name }) => {
  const [draftContent, setDrafContent] = useState<string>('');
  const draftRef = useRef<HTMLInputElement>(null);
  const { registerField, fieldName } = useField(name);

  const handleChange = (changeState: EditorState) => {
    const currentContent = changeState.getCurrentContent();
    const html = draftToHtml(convertToRaw(currentContent));
    setDrafContent(html);
  };
  useEffect(() => {
    const target = draftRef.current as HTMLInputElement;

    registerField({
      name: fieldName,
      path: 'value',
      ref: target,
    });
  }, [fieldName, draftRef, registerField]);

  return (
    <>
      <input type="hidden" ref={draftRef} value={draftContent} />
      <Editor editorStyle={EditorStyle} onEditorStateChange={handleChange} />
    </>
  );
};

export default DraftArea;
