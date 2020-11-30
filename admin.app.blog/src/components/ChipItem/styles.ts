import styled from 'styled-components';
import { Chip } from '@material-ui/core';

const ChipItemStyled = styled(Chip)`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.darkBlue};

  &.MuiChip-deletable:focus {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};
  }
`;

export { ChipItemStyled };
