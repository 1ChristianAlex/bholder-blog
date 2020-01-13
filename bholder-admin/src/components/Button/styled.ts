import styled from 'styled-components';
import { Button as BTButton } from 'react-bootstrap';
import { defaultColors } from 'assets/colors';

export const ButtonStyled = styled(BTButton)`
color:${(props) => props.color || defaultColors.black};
background:${(props) => props.background || defaultColors.yellow};
border:1px solid ${(props) => props.background || defaultColors.yellow};
font-size: 16px;
font-weight: 800;
:hover{
    background:${(props) => props.color || defaultColors.black};
    color:${(props) => props.background || defaultColors.yellow};
}
`
