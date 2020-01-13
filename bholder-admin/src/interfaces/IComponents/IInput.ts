import { ChangeEvent } from 'react';

export interface IInputProps {
    id?: string;
    name: string;
    label?: string;
    placeholder?: string;
    onChange?:
      | ((event: ChangeEvent<HTMLInputElement>) => void)
      | ((event: ChangeEvent<HTMLTextAreaElement>) => void);
    type?: any;
  }
