import React, { FC, useState, useEffect, useRef } from 'react';
import { Editor, EditorState } from 'react-draft-wysiwyg';

import { useField } from '@unform/core';
import { DraftParser } from 'helpers';

import { EditorStyle } from './styled';

interface IDraftArea {
  name: string;
  defaultValue: string;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
}

const DraftArea: FC<IDraftArea> = ({ name, defaultValue, changeValue }) => {
  const [draftContent, setDrafContent] = useState<string>(defaultValue || '');
  const draftParse = new DraftParser();

  const [editorState, setEditorState] = useState(
    draftParse.htmlToDraft(defaultValue),
  );

  const draftRef = useRef<HTMLInputElement>(null);
  const { registerField, fieldName } = useField(name);

  const handleChange = (changeState: EditorState) => {
    const html = draftParse.draftToHtml(changeState);
    setDrafContent(html);
    changeValue(html);
    setEditorState(changeState);
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
      <Editor
        editorStyle={EditorStyle}
        onEditorStateChange={handleChange}
        defaultEditorState={editorState}
      />
    </>
  );
};

export default DraftArea;
