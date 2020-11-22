import React, { useContext } from 'react';

import { PostTileInput } from './styles';
import { EditPostContext } from './EditPostProvider';

const PostTitle: React.FC = () => {
  const { postTitle, setPostTitle } = useContext(EditPostContext);

  return (
    <PostTileInput
      fullWidth
      value={postTitle}
      onChange={(event) => setPostTitle(event.target.value)}
      label="Titulo da postagem"
      variant="filled"
    />
  );
};

export default PostTitle;
