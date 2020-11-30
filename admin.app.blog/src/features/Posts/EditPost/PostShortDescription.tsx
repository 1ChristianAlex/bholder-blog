import React, { useContext } from 'react';
import { Divider, Grid } from '@material-ui/core';
import { PaperBholder, TextArea } from '../../../components';
import { TitlePublish } from './styles';
import { EditPostContext } from './EditPostProvider';
// import { Container } from './styles';

const PostShortDescription: React.FC = () => {
  const { shortDescription, setShortDescription } = useContext(EditPostContext);

  return (
    <PaperBholder>
      <Grid container direction="column">
        <Grid item xs>
          <TitlePublish>Descrição curta</TitlePublish>
        </Grid>
        <Grid item xs>
          <Divider />
        </Grid>
        <Grid item>
          <TextArea
            minHeight={10}
            textEditor={shortDescription}
            setTextValueEditor={setShortDescription}
          />
        </Grid>
      </Grid>
    </PaperBholder>
  );
};

export default PostShortDescription;
