import { Divider, FormControl, Grid } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import {
  PaperBholder,
  SelectBholder,
  SelectItens,
  KeyDatePicker,
  ButtonBholder,
} from '../../../components';
import { TitlePublish, ItemPublishLabel } from './styles';
import {
  PostStatus,
  PostStatusDescription,
  PostVisibility,
  PostVisibilityDescription,
  PostPublication,
  PostPublicationDescription,
} from '../../../enums/PostEnums';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PublicIcon from '@material-ui/icons/Public';
import SaveIcon from '@material-ui/icons/Save';

const PostPublish: React.FC = () => {
  const [postStatus, setPostStatus] = useState<PostStatus>(PostStatus.draft);

  const selectOptionStatus = [
    new SelectItens(PostStatus.saved, PostStatusDescription[PostStatus.saved]),
    new SelectItens(PostStatus.draft, PostStatusDescription[PostStatus.draft]),
    new SelectItens(
      PostStatus.deleted,
      PostStatusDescription[PostStatus.deleted]
    ),
  ];

  const onPostStatusChange = (
    event: ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setPostStatus(event?.target.value as PostStatus);
  };

  const selectOptionVisibility = [
    new SelectItens(
      PostVisibility.visible,
      PostVisibilityDescription[PostVisibility.visible]
    ),
    new SelectItens(
      PostVisibility.hidden,
      PostVisibilityDescription[PostVisibility.hidden]
    ),
  ];

  const [postVisibility, setPostVisibility] = useState<PostVisibility>(
    PostVisibility.visible
  );

  const onPostVisibility = (
    event: ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setPostVisibility(event?.target.value as PostVisibility);
  };

  const selectOptionPublication = [
    new SelectItens(
      PostPublication.imediat,
      PostPublicationDescription[PostPublication.imediat]
    ),
    new SelectItens(
      PostPublication.scheduling,
      PostPublicationDescription[PostPublication.scheduling]
    ),
  ];

  const [postPublication, setPostPublication] = useState<PostPublication>(
    PostPublication.imediat
  );

  const onPostPublication = (
    event: ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setPostPublication(event?.target.value as PostPublication);
  };

  const [datePublish, setDatePublish] = useState(new Date());

  const handleDatePublish = (date: Date) => {
    setDatePublish(date);
  };

  return (
    <PaperBholder>
      <Grid container direction="column" spacing={1}>
        <Grid item xs>
          <TitlePublish>Publish</TitlePublish>
        </Grid>
        <Grid item xs>
          <Divider />
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction="column">
            <Grid item xs>
              <Grid container alignItems="center">
                <Grid item xs={2}>
                  <ItemPublishLabel>
                    <SaveIcon />
                  </ItemPublishLabel>
                </Grid>
                <Grid item xs>
                  <FormControl fullWidth>
                    <SelectBholder
                      selectItens={selectOptionStatus}
                      currentValue={postStatus}
                      inputLabel={'Status'}
                      onChange={onPostStatusChange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid container alignItems="center">
                <Grid item xs={2}>
                  <ItemPublishLabel>
                    <VisibilityIcon />
                  </ItemPublishLabel>
                </Grid>
                <Grid item xs>
                  <FormControl fullWidth>
                    <SelectBholder
                      selectItens={selectOptionVisibility}
                      currentValue={postVisibility}
                      inputLabel={'Visibilidade'}
                      onChange={onPostVisibility}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <ItemPublishLabel>
                    <PublicIcon />
                  </ItemPublishLabel>
                </Grid>
                <Grid item xs>
                  <FormControl fullWidth>
                    <SelectBholder
                      selectItens={selectOptionPublication}
                      currentValue={postPublication}
                      inputLabel={'Publicação'}
                      onChange={onPostPublication}
                    />
                  </FormControl>
                </Grid>
                {postPublication === PostPublication.scheduling && (
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <KeyDatePicker
                        handleDateChange={handleDatePublish}
                        selectedDate={datePublish}
                      />
                    </FormControl>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <ButtonBholder primary={false}>Deletar</ButtonBholder>
          </Grid>
          <Grid item xs={6}>
            <ButtonBholder>Publicar</ButtonBholder>
          </Grid>
        </Grid>
      </Grid>
    </PaperBholder>
  );
};

export default PostPublish;
