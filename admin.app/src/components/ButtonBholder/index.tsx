import { ButtonProps } from '@material-ui/core';
import React from 'react';
import { ButtonStyle } from './styles';

interface ButtonBholderProps extends ButtonProps {
  primary?: boolean;
}

const ButtonBholder: React.FC<ButtonBholderProps> = ({
  primary = true,
  children,
  ...props
}) => {
  return (
    <ButtonStyle {...props} variant="contained" primary={primary}>
      {children}
    </ButtonStyle>
  );
};

export default ButtonBholder;
