import { AppBar, Button, IconButton, TextField } from '@material-ui/core';
import styled from 'styled-components';

const AppBarStyle = styled(AppBar)`
  background-color: ${(props) => props.theme.darkBlue};
  .app-bar-itens {
    margin: auto;
  }
`;

const ButtonIcon = styled(Button)`
  color: ${(props) => props.theme.white};
`;

interface MenuButtonProps {
  $isSelected?: boolean;
}
const MenuButton = styled(IconButton)<MenuButtonProps>`
  color: ${(props) =>
    props.$isSelected ? props.theme.yellow : props.theme.white};
`;

const SearchBar = styled(TextField)`
  input {
    color: ${(props) => props.theme.white};
  }
  label {
    color: ${(props) => props.theme.white};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.yellow};
  }
  .MuiFilledInput-underline:hover:before,
  .MuiFilledInput-underline:after {
    border-bottom: 1px solid ${(props) => props.theme.yellow};
  }
`;

export { AppBarStyle, ButtonIcon, SearchBar, MenuButton };
