import { Drawer, ListItemIcon, ListItemText } from '@material-ui/core';
import styled from 'styled-components';

const DrawerBholder = styled(Drawer)`
  flex-shrink: 0;
  .MuiDrawer-paper {
    background-color: ${(props) => props.theme.darkBlue};
    width: 15vw;
    height: calc(100vh - 64px);
    max-height: calc(100vh - 64px);
    top: ${(props) => (props.open ? '0px' : '64px')};
    position: ${(props) => (props.open ? 'relative' : 'fixed')};
  }
`;

interface ListItemTextBhProps {
  $currentRoute?: boolean;
}

const ListItemIconBh = styled(ListItemIcon)<ListItemTextBhProps>`
  color: ${(props) =>
    props.$currentRoute ? props.theme.yellow : props.theme.white};
`;
const ListItemTextBh = styled(ListItemText)<ListItemTextBhProps>`
  color: ${(props) =>
    props.$currentRoute ? props.theme.yellow : props.theme.white};
`;
export { DrawerBholder, ListItemIconBh, ListItemTextBh };
