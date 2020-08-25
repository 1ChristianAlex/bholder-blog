import React from 'react';
import { ButtonProps } from '@material-ui/core';
import { ButtonStyle, ButtonStyleProps } from './styles';

type ButtonBholderProps = ButtonProps & ButtonStyleProps;

const ButtonBholder: React.FC<ButtonBholderProps> = ({
  color = 'primary',
  children,
  variant = 'contained',
  ...props
}) => {
  return (
    <ButtonStyle {...props} color={color}>
      {children}
    </ButtonStyle>
  );
};

export default ButtonBholder;
