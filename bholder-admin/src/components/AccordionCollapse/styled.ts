import styled from 'styled-components';
import { defaultColors } from 'assets/colors';

export interface ISLink {
  color?: string;
  fontSize?: string;
}

export const AccordionText = styled.span<ISLink>`
  color: ${props => props.color || defaultColors.white};
  font-size: ${props => props.fontSize || '14px'};
  display: block;
  text-decoration: none;
  width: 100%;
  padding: 5px 10px;
  cursor: pointer;
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
  float: right;
  padding: 0 15px;
`;
