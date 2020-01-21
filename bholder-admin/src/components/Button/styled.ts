import styled from 'styled-components';
import { Button as BTButton } from 'react-bootstrap';
import { defaultColors } from 'assets/colors';

interface ISButton {
    color?:'primary' | 'secundary';
    block?: boolean;
}

export const ButtonStyled = styled(BTButton)<ISButton>`
color:${(props) => (props.color === 'secundary' ? defaultColors.black : defaultColors.white)};
background:${(props) => (props.color === 'secundary' ? defaultColors.yellow : defaultColors.purple)};
border:1px solid ${(props) => (props.color === 'secundary' ? defaultColors.yellow : defaultColors.purple)};
font-size: 16px;
font-weight: 800;
border-radius: 3px;
${props => props.block && `display: block;
    width: 50%;
    margin: 0 auto;`}
:hover,:active,:focus{
    background-color:${(props) => (props.color === 'secundary' ? defaultColors.black : defaultColors.white)}!important;
    color:${(props) => (props.color === 'secundary' ? defaultColors.yellow : defaultColors.purple)}!important;
    border-color:${(props) => (props.color === 'secundary' ? defaultColors.yellow : defaultColors.purple)}!important;
}
`
