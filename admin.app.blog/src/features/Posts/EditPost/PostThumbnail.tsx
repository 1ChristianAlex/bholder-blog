import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';

import { PaperBholder, DropZone } from '../../../components';
import { EditPostContext } from './EditPostProvider';
import { ImageThumbPreview } from './styles';
const PostThumbnail: React.FC = () => {
  const { thumbUrl, setThumbUrl } = useContext(EditPostContext);

  return (
    <PaperBholder>
      <Grid container>
        {thumbUrl && (
          <Grid item>
            <ImageThumbPreview src={thumbUrl} />
          </Grid>
        )}

        <Grid item>
          <DropZone setDropZoneBase={setThumbUrl} />
        </Grid>
      </Grid>
    </PaperBholder>
  );
};

export default PostThumbnail;
