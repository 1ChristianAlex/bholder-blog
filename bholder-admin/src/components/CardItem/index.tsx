import React, { forwardRef } from "react";
import { Card } from "react-bootstrap";
import { CardStyle } from "./styled";

export interface ICardItem {
  title?: string;
  textContent?: string;
  children?: any;
}

const CardItem = forwardRef<any, ICardItem>((props, ref) => {
  const { children, textContent, title } = props;
  return (
    <div ref={ref}>
      <CardStyle>
        {title && <Card.Header>{title}</Card.Header>}
        {(children || textContent) && (
          <Card.Body>
            {children && children}
            {textContent && textContent}
          </Card.Body>
        )}
      </CardStyle>
    </div>
  );
});

export default CardItem;
