import React, { FC } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorStyle } from './styled';

const DraftArea: FC = () => {
  console.log(EditorStyle);

  return <Editor editorStyle={EditorStyle} editorClassName="testeasd" />;
};

export default DraftArea;
