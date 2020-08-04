import React, { FC, useState, useEffect, useRef } from 'react';
import { Editor, EditorState } from 'react-draft-wysiwyg';

import { useField } from '@unform/core';
import { DraftParser } from 'helpers';

import { useFormDispatch, useForm } from 'context/hooks';
import { insertValue } from 'context/form/action';
import { EditorStyle } from './styled';

interface IDraftArea {
  name: string;
}

const DraftArea: FC<IDraftArea> = ({ name }) => {
  const dispatch = useFormDispatch();
  const formValue = useForm(name);
  const [draftContent, setDrafContent] = useState<string>(formValue || '');
  const draftParse = new DraftParser();

  const [editorState, setEditorState] = useState(
    draftParse.htmlToDraft(draftContent)
  );

  const draftRef = useRef<HTMLInputElement>(null);
  const { registerField, fieldName } = useField(name);

  const handleChange = (changeState: EditorState) => {
    const html = draftParse.draftToHtml(changeState);
    setDrafContent(html);
    setEditorState(changeState);
    dispatch(insertValue({ name, value: html }));
  };

  useEffect(() => {
    const target = draftRef.current as HTMLInputElement;

    registerField({
      name: fieldName,
      path: 'value',
      ref: target
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
