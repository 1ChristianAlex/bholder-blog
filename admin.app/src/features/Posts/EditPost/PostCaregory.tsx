import React, { useContext } from 'react';
import { Divider, Grid } from '@material-ui/core';
import { CheckBoxList, PaperBholder, CheckBoxData } from '../../../components';
import { TitlePublish } from './styles';
import { EditPostContext } from './EditPostProvider';

const PostCategory: React.FC = () => {
  const { categoryIds, setCategoryIds } = useContext(EditPostContext);
  const checkBoxCategoryList = [
    new CheckBoxData('Filmes', 1),
    new CheckBoxData('Jogos', 2),
    new CheckBoxData('Series', 3),
  ];

  const handleCheckedList = (listItem: typeof categoryIds) => {
    setCategoryIds(listItem);
  };

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
          <CheckBoxList
            checkedList={categoryIds}
            setCheckedList={handleCheckedList}
            checkboxItems={checkBoxCategoryList}
          />
        </Grid>
      </Grid>
    </PaperBholder>
  );
};

export default PostCategory;
