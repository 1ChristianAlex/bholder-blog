/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React, { useCallback, useMemo, useState } from 'react';
import { Post } from '../../../models/PostModel';
import PostService from '../../../services/posts';
import { PaperBholder } from '../../../components';
import { PostImagem } from './styles';
import { PostVisibilityDescription } from '../../../enums/PostEnums';
import { Link } from 'react-router-dom';

const CardListPosts: React.FC = () => {
  const [postList, setPostList] = useState<NonNullable<Post[]>>([]);

  const listPosts = useCallback(async () => {
    const postListData = await PostService.listPosts({ limit: 100 });
    setPostList(postListData);
  }, []);

  useMemo(() => {
    listPosts();
  }, [listPosts]);
  console.log(postList);

  return (
    <PaperBholder>
      {postList.length > 0 && (
        <List component="nav">
          {postList.map((postItem) => (
            <Link key={postItem.id} to={`/dashboard/posts/edit/${postItem.id}`}>
              <ListItem button>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <PostImagem alt={postItem.title} src={postItem.thumbnail} />
                  </Grid>
                  <Grid item xs>
                    <ListItemText
                      primary={postItem.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            de - {postItem.user?.firstName}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </Grid>
                  {postItem.postVisibilityId && (
                    <Grid item xs>
                      <ListItemText
                        primary={
                          PostVisibilityDescription[postItem.postVisibilityId]
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="textPrimary"
                            >
                              {new Date(postItem.datePublish).toLocaleString(
                                navigator.language
                              )}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </Grid>
                  )}
                </Grid>
              </ListItem>
              <Divider variant="inset" />
            </Link>
          ))}
        </List>
      )}
    </PaperBholder>
  );
};

export default CardListPosts;
