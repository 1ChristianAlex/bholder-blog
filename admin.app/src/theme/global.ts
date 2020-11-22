import { createGlobalStyle } from 'styled-components';
import { darkTheme } from './colors';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500;600;700;900&display=swap');

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
::-webkit-scrollbar {
    width: 8px;
}
 
::-webkit-scrollbar-track {
    border-radius: 5px;
}
 
::-webkit-scrollbar-thumb {
    background-color:${(prop) => prop.theme.darkBlue};
    border-radius: 5px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
`;

export default GlobalStyle;
