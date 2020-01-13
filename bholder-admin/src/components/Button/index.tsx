import React from 'react';
import { IButton } from 'interfaces/IComponents';
import { ButtonStyled } from './styled';

const Button: React.FC<IButton> = ({ text, ...props }) => (
  <ButtonStyled {...props}>{text}</ButtonStyled>
);

export default Button;
