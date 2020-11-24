import React, { useRef, useState } from 'react';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';

import { EditorStyle } from './styles';

interface TextEditorProps {
  editorState?: string;
  onChange(valueMd: string): void;
}

const TextEditor: React.FC<TextEditorProps> = ({ editorState, onChange }) => {
  const draftToHtmlContent = (changeState: EditorState) => {
    const currentContent = changeState.getCurrentContent();
    const html = draftToHtml(convertToRaw(currentContent));
    return html;
  };

  const htmlToDraftContent = (draftContent: string) => {
    const { contentBlocks, entityMap } = htmlToDraft(draftContent);
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const state = EditorState.createWithContent(contentState);
    return state;
  };

  const [editorInside, setEditorInside] = useState(
    htmlToDraftContent(editorState || '')
  );

  const onEditorChange = (stage: EditorState) => {
    const htmlContent = draftToHtmlContent(stage);
    setEditorInside(stage);
    onChange(htmlContent);
  };

  return (
    <Editor
      editorState={editorInside}
      onEditorStateChange={onEditorChange}
      editorStyle={EditorStyle}
    />
  );
};

export default TextEditor;
