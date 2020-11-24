import React, { createContext, useState } from 'react';

// import { Container } from './styles';

interface IEditPostContext {
  textEditor: string;
  postTitle: string;
  shortDescription: string;
  thumbUrl: string;
  keywordList: string[];
  setPostTitle(title: string): void;
  setTextValueEditor(textEditor: string): void;
  setShortDescription(textEditor: string): void;
  setThumbUrl(textEditor: string): void;
  setKeywordlist(keywordList: string[]): void;
}

const EditPostContext = createContext<IEditPostContext>({
  textEditor: '',
  postTitle: '',
  shortDescription: '',
  thumbUrl: '',
  keywordList: [''],
  setPostTitle: (textEdito) => textEdito,
  setTextValueEditor: (textEdito) => textEdito,
  setShortDescription: (textEdito) => textEdito,
  setThumbUrl: (textEdito) => textEdito,
  setKeywordlist: (textEdito) => textEdito,
});

const EditPostProvider: React.FC = ({ children }) => {
  const [textEditor, setTextValueEditor] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [thumbUrl, setThumbUrl] = useState('');
  const [keywordList, setKeywordlist] = useState<string[]>(['']);

  return (
    <EditPostContext.Provider
      value={{
        textEditor,
        setTextValueEditor,
        postTitle,
        setPostTitle,
        shortDescription,
        setShortDescription,
        thumbUrl,
        setThumbUrl,
        keywordList,
        setKeywordlist,
      }}
    >
      {children}
    </EditPostContext.Provider>
  );
};

export { EditPostProvider, EditPostContext };
