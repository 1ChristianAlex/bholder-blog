import { Grid } from '@material-ui/core';
import React from 'react';
import CardListPosts from './CardListPosts';
import { TextTitle } from './styles';

const ListPost: React.FC = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <TextTitle>Postagens</TextTitle>
      </Grid>
      <Grid item>
        <CardListPosts />
      </Grid>
    </Grid>
  );
};

export default ListPost;
