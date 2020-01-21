import { createGlobalStyle } from 'styled-components';
import 'bootstrap/scss/bootstrap.scss';
import { defaultColors } from 'assets/colors';
import './reset.css';

const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap|Raleway:400,400i,500,500i,700,900,900i&display=swap');

body{
    font-family: 'Raleway', sans-serif;
}
.active-nav{
    background-color: ${defaultColors.yellow}
}
:root {
  --primary: ${defaultColors.purple};
  --secondary: ${defaultColors.yellow}
}
`
export { GlobalStyled }
