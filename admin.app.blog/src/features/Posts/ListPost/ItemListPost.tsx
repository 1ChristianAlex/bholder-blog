import React from 'react';
import {
  Divider,
  Grid,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Post } from '../../../models/PostModel';
import { PostImagem } from './styles';
import { PostVisibilityDescription } from '../../../enums/PostEnums';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

interface ItemListPost {
  postItem: Post;
}

const ItemListPost: React.FC<ItemListPost> = ({ postItem }) => {
  return (
    <Link to={`/dashboard/posts/edit/${postItem.id}`}>
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
                primary={PostVisibilityDescription[postItem.postVisibilityId]}
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
  );
};

export default ItemListPost;
