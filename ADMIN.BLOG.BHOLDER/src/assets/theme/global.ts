import { createGlobalStyle } from 'styled-components';
import { darkTheme } from './colors';

const GlobalStyle = createGlobalStyle`

:root{
    --primary:${darkTheme.yellow};
    --secundary:${darkTheme.black};
}
body{
    margin:0;
    padding: 0;
    width:100vw;
    font-family: 'Roboto Slab', serif;
}

h1{
    font-family: 'Roboto Slab', serif;
    /* font-family: 'Black Ops One', cursive; */
}
`;

export default GlobalStyle;
