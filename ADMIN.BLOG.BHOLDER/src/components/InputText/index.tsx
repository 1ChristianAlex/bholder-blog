import React from 'react';
import { InputTextStyle, InputTextStyleProps } from './styles';
import { TextFieldProps } from '@material-ui/core';

type InputTextProps = TextFieldProps & InputTextStyleProps;

const InputText: React.FC<InputTextProps> = ({ ...props }) => {
  return <InputTextStyle {...props} />;
};

export default InputText;
