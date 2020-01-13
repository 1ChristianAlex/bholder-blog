import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker|Raleway:400,400i,500,500i,700,900,900i&display=swap');

body{
    font-family: 'Raleway', sans-serif;
}

`
export { GlobalStyled }
