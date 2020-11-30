import { Paper } from '@material-ui/core';
import styled from 'styled-components';

interface PaperStyleProps {
  $height?: number;
}

const PaperStyle = styled(Paper)<PaperStyleProps>`
  padding: 8px;
  margin: 0px 8px 8px 8px;
  width: inherit;
  max-width: 100%;
  overflow: scroll;
  max-height: ${(props) => (props.$height ? `${props.$height}px` : 'unset')};
`;

export { PaperStyle };
