import styled from 'styled-components';
import { defaultColors } from 'assets/colors';

export interface ISLink {
  color?: string;
  fontSize?: string;
}

export const AccordionText = styled.span<ISLink>`
  color: ${props => props.color || defaultColors.white};
  font-size: ${props => props.fontSize || '14px'};
  padding: 10px 10px;
  cursor: pointer;
  flex: 2;
  :hover {
    color: ${defaultColors.yellow};
    text-decoration: none;
  }
  :focus {
    color: ${props => props.color || defaultColors.white};
    text-decoration: none;
  }
`;
export const AccordionContent = styled.div<ISLink>`
  color: ${props => props.color || defaultColors.white};
  font-size: ${props => props.fontSize || '14px'};
  display: block;
  text-decoration: none;
  background-color: ${props => props.color || defaultColors.gray};
  width: 100%;
  :hover {
    color: ${defaultColors.yellow};
    text-decoration: none;
    display: block;
    width: 100%;
  }
  :focus {
    color: ${props => props.color || defaultColors.white};
    text-decoration: none;
    width: 100%;
    display: block;
  }
`;
export const IconContainer = styled.span`
    padding: 10px 20px;
    flex: 1;
    text-align: center;
`;
export const AccordionTextContainer = styled.div`
display:flex;
`
