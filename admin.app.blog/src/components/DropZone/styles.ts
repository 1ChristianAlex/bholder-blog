import styled from 'styled-components';

interface DropZoneContainerProps {
  $isDragActive: boolean;
}

const DropZoneContainer = styled.div<DropZoneContainerProps>`
  border: 1px solid
    ${(props) =>
      props.$isDragActive ? props.theme.yellow : props.theme.darkBlue};
  border-style: dotted;
  padding: 8px;
  cursor: pointer;
`;

export { DropZoneContainer };
