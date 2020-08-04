import styled from 'styled-components';
import { defaultColors } from 'assets/colors';

interface IDropZoneContainer {
  isDrag: boolean | undefined;
}
interface IDropZoneIcon {
  hasFile: boolean;
}
export const DropZoneContainer = styled.div<IDropZoneContainer>`
  padding: 5px;
  border: 1px dotted
    ${props => (props.isDrag ? defaultColors.purple : defaultColors.coal)};
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;
export const DropZoneContent = styled.div`
  display: flex;
  flex-flow: column;
`;
export const DropZoneText = styled.p`
  font-size: 12px;
  text-align: center;
`;
export const DropZoneIcon = styled.span<IDropZoneIcon>`
  font-size: 35px;
  display: block;
  text-align: center;
  color: ${props =>
    props.hasFile ? defaultColors.purple : defaultColors.coal};
`;

export const DropZonePreviewImage = styled.div`
  display: block;
  text-align: center;
`;
export const ImagePreview = styled.img`
  width: 300px;
  height: auto;
  flex: 1;
  text-align: center;
  margin: 0 auto;
`;
export const RemoveFile = styled.span`
  color: ${defaultColors.yellow};
  text-align: center;
  margin: 15px;
  cursor: pointer;
  text-decoration: underline;
`;
