import { createGlobalStyle } from 'styled-components';
import { yellow, black } from './colors';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500;600;700;900&display=swap');

:root{
    --primary:${yellow};
    --secundary:${black};
}
body{
    margin:0;
    padding: 0;
    width:100vw;
    font-family: 'Roboto Slab', serif;
}
`;

export default GlobalStyle;
