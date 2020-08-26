import React from 'react';
import { InputTextStyle } from './styles';
import { TextFieldProps } from '@material-ui/core';
import { WrappedFieldProps } from 'redux-form';

type InputTextProps = TextFieldProps & WrappedFieldProps;

const InputText: React.FC<InputTextProps> = ({ input, ...props }) => {
  return <InputTextStyle {...props} {...input} />;
};

export default InputText;
