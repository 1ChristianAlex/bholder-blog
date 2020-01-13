import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<any> {
    color?:string
    background?:string;
    text?:string;
    type?:'submit' | 'reset' | 'button' ;
  }
