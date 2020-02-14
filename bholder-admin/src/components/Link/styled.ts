import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { defaultColors } from 'assets/colors';

export interface ISLink{
    color?:string
    fontSize?:string
}

export const LinkItem = styled(Link)<ISLink>`
 color: ${props => props.color || defaultColors.white};
  font-size: ${props => props.fontSize || '14px'};
display: flex;
text-decoration: none;
:hover {
    color:${defaultColors.yellow};
    text-decoration: none;
    width: 100%;
};
:focus {
    color:${(props) => props.color || defaultColors.yellow};
    text-decoration: none;
    width: 100%;
}
`;
export const IconContainer = styled.span`
padding:10px 20px;
flex: 1;
text-align: center;
`;
interface ISLinkText {
    color?: 'primary' | 'secundary';
}
export const TextContainer = styled.div<ISLinkText>`
flex: 2;
padding: 10px 10px;
color:${({ color }) => (color === 'primary' ? defaultColors.black : defaultColors.white)};

`
