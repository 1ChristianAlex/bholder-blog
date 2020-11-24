import { TextareaAutosize } from '@material-ui/core';
import styled from 'styled-components';

interface TextAreaStyleProps {
  $minHeight?: number;
}

const TextAreaStyle = styled(TextareaAutosize)<TextAreaStyleProps>`
  max-width: 100%;
  width: 100%;
  min-height: ${(props) => props.$minHeight || 40}vh !important;
`;
export { TextAreaStyle };
