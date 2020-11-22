import React from 'react';
// import { Container } from './styles';
import EditorPostArea from './EditorPostArea';
import { EditPostProvider } from './EditPostProvider';

const EditPost: React.FC = () => {
  return (
    <EditPostProvider>
      <EditorPostArea />
    </EditPostProvider>
  );
};

export default EditPost;
