import React, { useContext, useMemo, useState } from 'react';
import { Divider, Grid } from '@material-ui/core';
import { CheckBoxList, PaperBholder, CheckBoxData } from '../../../components';
import { TitlePublish } from './styles';
import { EditPostContext } from './EditPostProvider';
import CategoryService from '../../../services/category';

const PostCategory: React.FC = () => {
  const { categoryIds, setCategoryIds } = useContext(EditPostContext);

  const [checkBoxCategoryList, setCheckBoxCategoryList] = useState<
    CheckBoxData[]
  >([]);

  useMemo(() => {
    if (checkBoxCategoryList.length === 0) {
      CategoryService.getCategory().then((categoryResponse) => {
        const categoryCheckBoxList = categoryResponse.map(
          (categoryItem) => new CheckBoxData(categoryItem.name, categoryItem.id)
        );
        setCheckBoxCategoryList(categoryCheckBoxList);
      });
    }
  }, [checkBoxCategoryList]);

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
          {checkBoxCategoryList.length > 0 && (
            <CheckBoxList
              checkedList={categoryIds.map((item) => item.toString())}
              setCheckedList={handleCheckedList}
              checkboxItems={checkBoxCategoryList}
            />
          )}
        </Grid>
      </Grid>
    </PaperBholder>
  );
};

export default PostCategory;
