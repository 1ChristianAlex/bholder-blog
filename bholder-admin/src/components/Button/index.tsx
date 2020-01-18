import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styled';

export interface IButton extends ButtonHTMLAttributes<any> {
  color?: string;
  background?: string;
  text?: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<IButton> = ({ text, ...props }) => (
  <ButtonStyled {...props}>{text}</ButtonStyled>
);

export default Button;
