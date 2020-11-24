import React, { createContext, useState } from 'react';
import {
  PostPublication,
  PostStatus,
  PostVisibility,
} from '../../../enums/PostEnums';

// import { Container } from './styles';

interface IEditPostContext {
  textEditor: string;
  postTitle: string;
  shortDescription: string;
  thumbUrl: string;
  keywordList: string[];
  postStatus: PostStatus;
  postVisibility: PostVisibility;
  postPublication: PostPublication;
  datePublish: Date;
  categoryId: number[] | undefined;
  setPostTitle(title: string): void;
  setTextValueEditor(textEditor: string): void;
  setShortDescription(textEditor: string): void;
  setThumbUrl(textEditor: string): void;
  setKeywordlist(keywordList: string[]): void;
  setPostStatus(postStatus: PostStatus): void;
  setPostVisibility(postStatus: PostVisibility): void;
  setPostPublication(postStatus: PostPublication): void;
  setDatePublish(postStatus: Date): void;
  setCategoryid(categoryId: number[]): void;
}

const EditPostContext = createContext<IEditPostContext>({
  textEditor: '',
  postTitle: '',
  shortDescription: '',
  thumbUrl: '',
  keywordList: [''],
  postStatus: PostStatus.draft,
  postVisibility: PostVisibility.visible,
  postPublication: PostPublication.imediat,
  datePublish: new Date(),
  categoryId: [],
  setPostTitle: (textEdito) => textEdito,
  setTextValueEditor: (textEdito) => textEdito,
  setShortDescription: (textEdito) => textEdito,
  setThumbUrl: (textEdito) => textEdito,
  setKeywordlist: (textEdito) => textEdito,
  setPostStatus: (postStatus: PostStatus) => postStatus,
  setPostVisibility: (postVisibility: PostVisibility) => postVisibility,
  setPostPublication: (postVisibility: PostPublication) => postVisibility,
  setDatePublish: (date: Date) => date,
  setCategoryid: (ids: number[]) => ids,
});

const EditPostProvider: React.FC = ({ children }) => {
  const [textEditor, setTextValueEditor] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [thumbUrl, setThumbUrl] = useState('');
  const [keywordList, setKeywordlist] = useState<string[]>(['']);
  const [postStatus, setPostStatus] = useState<PostStatus>(PostStatus.draft);
  const [postVisibility, setPostVisibility] = useState<PostVisibility>(
    PostVisibility.visible
  );
  const [postPublication, setPostPublication] = useState<PostPublication>(
    PostPublication.imediat
  );
  const [datePublish, setDatePublish] = useState(new Date());
  const [categoryId, setCategoryid] = useState<number[]>();

  console.log({
    textEditor,
    postTitle,
    shortDescription,
    thumbUrl,
    keywordList,
    postStatus,
    postVisibility,
    postPublication,
    datePublish,
  });

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
        postStatus,
        setPostStatus,
        postVisibility,
        setPostVisibility,
        postPublication,
        setPostPublication,
        datePublish,
        setDatePublish,
        categoryId,
        setCategoryid,
      }}
    >
      {children}
    </EditPostContext.Provider>
  );
};

export { EditPostProvider, EditPostContext };
