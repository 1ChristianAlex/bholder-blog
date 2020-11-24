import { Grid } from '@material-ui/core';
import React from 'react';
import EditorPostArea from './EditorPostArea';
import { EditPostProvider } from './EditPostProvider';
import PostTitle from './PostTitle';
import PostPublish from './PostPublish';
import PostCaregory from './PostCaregory';
import PostShortDescription from './PostShortDescription';
import PostThumbnail from './PostThumbnail';
import KeywordSection from './KeywordSection';

const EditPost: React.FC = () => {
  return (
    <EditPostProvider>
      <Grid container>
        <Grid item xs={9}>
          <Grid container direction="column">
            <Grid item>
              <PostTitle />
            </Grid>
            <Grid item>
              <EditorPostArea />
            </Grid>
            <Grid item>
              <PostShortDescription />
            </Grid>
            <Grid item>
              <KeywordSection />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="column">
            <Grid item xs>
              <PostPublish />
            </Grid>
            <Grid item xs>
              <PostCaregory />
            </Grid>
            <Grid item xs>
              <PostThumbnail />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </EditPostProvider>
  );
};

export default EditPost;
