import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styled";

export interface IButton extends ButtonHTMLAttributes<any> {
  color?: "primary" | "secundary";
  background?: string;
  text?: string;
  type?: "submit" | "reset" | "button";
  block?: boolean;
}

const Button: React.FC<IButton> = ({
  text,
  block = false,
  color,
  children,
  ...props
}) => (
  <ButtonStyled block={block} color={color} {...props}>
    {text}
    {children}
  </ButtonStyled>
);

export default Button;
