/* eslint-disable @typescript-eslint/no-explicit-any */
import { List } from '@material-ui/core';
import React, { useCallback, useMemo, useState } from 'react';
import { Post } from '../../../models/PostModel';
import PostService from '../../../services/posts';
import { PaperBholder } from '../../../components';
import ItemListPost from './ItemListPost';

const CardListPosts: React.FC = () => {
  const [postList, setPostList] = useState<NonNullable<Post[]>>([]);

  const listPosts = useCallback(async () => {
    const postListData = await PostService.listPosts({ limit: 100 });
    setPostList(postListData);
  }, []);

  useMemo(() => {
    listPosts();
  }, [listPosts]);

  return (
    <PaperBholder>
      {postList.length > 0 && (
        <List component="nav">
          {postList.map((postItem) => (
            <ItemListPost key={postItem.id} postItem={postItem} />
          ))}
        </List>
      )}
    </PaperBholder>
  );
};

export default CardListPosts;
