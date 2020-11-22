import React, { createContext, useState } from 'react';

// import { Container } from './styles';

interface IEditPostContext {
  textEditor: string;
  postTitle: string;
  setPostTitle(title: string): void;
  setTextValueEditor(textEditor: string): void;
}

const EditPostContext = createContext<IEditPostContext>({
  textEditor: '',
  postTitle: '',
  setPostTitle: (textEdito) => textEdito,
  setTextValueEditor: (textEdito) => textEdito,
});

const EditPostProvider: React.FC = ({ children }) => {
  const [textEditor, setTextValueEditor] = useState('');
  const [postTitle, setPostTitle] = useState('');

  return (
    <EditPostContext.Provider
      value={{ textEditor, setTextValueEditor, postTitle, setPostTitle }}
    >
      {children}
    </EditPostContext.Provider>
  );
};

export { EditPostProvider, EditPostContext };
