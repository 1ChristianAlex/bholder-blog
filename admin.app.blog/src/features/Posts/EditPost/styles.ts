import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const PostTileInput = styled(TextField)``;

const TitlePublish = styled.h2`
  font-size: 18px;
  margin: 8px 0;
`;

const ItemPublishLabel = styled.span`
  font-size: 14px;
  padding: 8px 0;
  display: block;
`;

const ImageThumbPreview = styled.img`
  width: 100%;
`;

const ChipContainer = styled.div`
  background-color: #cecece;
  padding: 8px;
`;

const ChipInput = styled.input`
  background-color: transparent;
  border: unset;
  &:focus {
    border: unset;
    outline: unset;
  }
`;

export {
  PostTileInput,
  TitlePublish,
  ItemPublishLabel,
  ImageThumbPreview,
  ChipContainer,
  ChipInput,
};
