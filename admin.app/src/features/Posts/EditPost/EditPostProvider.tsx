import React, { createContext, useState } from 'react';
import {
  PostPublication,
  PostStatus,
  PostVisibility,
} from '../../../enums/PostEnums';
import { Post } from '../../../models/PostModel';
import PostService from '../../../services/posts';
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
  categoryIds: number[];
  setPostTitle(title: string): void;
  setTextValueEditor(textEditor: string): void;
  setShortDescription(textEditor: string): void;
  setThumbUrl(textEditor: string): void;
  setKeywordlist(keywordList: string[]): void;
  setPostStatus(postStatus: PostStatus): void;
  setPostVisibility(postStatus: PostVisibility): void;
  setPostPublication(postStatus: PostPublication): void;
  setDatePublish(postStatus: Date): void;
  setCategoryIds(categoryIds: number[]): void;

  publishPost(): Promise<void>;
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
  categoryIds: [],
  setPostTitle: (textEdito) => textEdito,
  setTextValueEditor: (textEdito) => textEdito,
  setShortDescription: (textEdito) => textEdito,
  setThumbUrl: (textEdito) => textEdito,
  setKeywordlist: (textEdito) => textEdito,
  setPostStatus: (postStatus: PostStatus) => postStatus,
  setPostVisibility: (postVisibility: PostVisibility) => postVisibility,
  setPostPublication: (postVisibility: PostPublication) => postVisibility,
  setDatePublish: (date: Date) => date,
  setCategoryIds: (ids: number[]) => ids,
  publishPost: async () => {},
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
  const [categoryIds, setCategoryIds] = useState<number[]>([]);

  const publishPost = async () => {
    const postBody = new Post(
      postTitle,
      textEditor,
      shortDescription,
      thumbUrl,
      keywordList,
      categoryIds.map(Number),
      datePublish,
      postPublication,
      postStatus,
      postVisibility
    );
    await PostService.createPost(postBody);
  };

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
        categoryIds,
        setCategoryIds,
        publishPost,
      }}
    >
      {children}
    </EditPostContext.Provider>
  );
};

export { EditPostProvider, EditPostContext };
