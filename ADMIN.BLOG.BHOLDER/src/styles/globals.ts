import { createGlobalStyle } from 'styled-components';
import 'bootstrap/scss/bootstrap.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { defaultColors } from 'assets/colors';

const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap|Raleway:400,400i,500,500i,700,900,900i&display=swap');
*{
   box-sizing: border-box;  
    margin: 0;
    padding: 0;
    border: 0;
}
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
`;
export { GlobalStyled };
