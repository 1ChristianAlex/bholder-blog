import { Tab, Tabs } from '@material-ui/core';
import styled from 'styled-components';

const TabsStyled = styled(Tabs)`
  background-color: ${(props) => props.theme.darkBlue};
  margin-bottom: 24px;
  color: ${(props) => props.theme.white};
  .MuiTab-textColorInherit.Mui-selected {
    color: ${(props) => props.theme.yellow};
  }
  .PrivateTabIndicator-root-1 {
    background-color: ${(props) => props.theme.yellow};
  }
`;

const TabItemStyled = styled(Tab)``;

export { TabsStyled, TabItemStyled };
