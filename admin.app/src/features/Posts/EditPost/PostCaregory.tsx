import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import { CheckBoxList, PaperBholder } from '../../../components';
import { TitlePublish } from './styles';

const PostCategory: React.FC = () => {
  return (
    <PaperBholder height={180}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs>
          <TitlePublish>Categorias</TitlePublish>
        </Grid>
        <Grid item xs>
          <Divider />
        </Grid>
        <Grid item>
          <CheckBoxList />
        </Grid>
      </Grid>
    </PaperBholder>
  );
};

export default PostCategory;
