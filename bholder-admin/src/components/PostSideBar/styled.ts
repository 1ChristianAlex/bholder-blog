import styled from 'styled-components';
import { defaultColors } from 'assets/colors';

export const CardItemSide = styled.div`
  margin: 5px 0;
  text-align: left;
  display: flex;
`;
export const Icon = styled.div`
  flex: 1;
`;
export const TextItem = styled.div`
  flex: 5;
  color: ${defaultColors.black};
`;
export const ButtonContainer = styled.div`
  text-align: right;
`;
export const ImagePreview = styled.img`
  width: 100%;
`;
