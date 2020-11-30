import React, { useContext } from 'react';

import { PostTileInput } from './styles';
import { EditPostContext } from './EditPostProvider';
import { PaperBholder } from '../../../components';

const PostTitle: React.FC = () => {
  const { postTitle, setPostTitle } = useContext(EditPostContext);

  return (
    <PaperBholder>
      <PostTileInput
        fullWidth
        value={postTitle}
        onChange={(event) => setPostTitle(event.target.value)}
        label="Titulo da postagem"
        variant="filled"
      />
    </PaperBholder>
  );
};

export default PostTitle;
