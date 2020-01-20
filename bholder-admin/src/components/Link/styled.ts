import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { defaultColors } from 'assets/colors';

export interface ISLink{
    color?:string
    fontSize?:string
}

export const LinkItem = styled(Link)<ISLink>`
color:${(props) => props.color || defaultColors.white};
font-size: ${(props) => props.fontSize || '14px'};
display: block;
text-decoration: none;
width: 100%;
padding: 5px 10px;

:hover {
    color:${defaultColors.yellow};
    text-decoration: none;
    display: block;
    width: 100%;
    
};
:focus {
    color:${(props) => props.color || defaultColors.white};
    text-decoration: none;
    width: 100%;
    display: block;
}
`;
export const IconContainer = styled.span`
float: right;
padding: 0 15px;
`;
