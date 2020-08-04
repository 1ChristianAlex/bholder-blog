import React, { FC } from 'react';
import { Accordion } from 'react-bootstrap';
import {
  AccordionText,
  AccordionContent,
  IconContainer,
  AccordionTextContainer,
} from './styled';

export interface IAccordionCollapse {
  TogleTitle?: string;
  keyBinding?: string;
  CollapseColor?: string;
  Icon?: FC;
}

const AccordionCollapse: React.FC<IAccordionCollapse> = ({
  TogleTitle,
  keyBinding,
  CollapseColor,
  children,
  Icon,
}) => (
  <Accordion defaultActiveKey={keyBinding}>
    <Accordion.Toggle as="div" eventKey={keyBinding || '0'}>
      <AccordionTextContainer>
        {TogleTitle && <AccordionText>{TogleTitle}</AccordionText>}
        {Icon && (
          <IconContainer>
            <Icon />
          </IconContainer>
        )}
      </AccordionTextContainer>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={keyBinding || '0'} color={CollapseColor}>
      <AccordionContent>{children}</AccordionContent>
    </Accordion.Collapse>
  </Accordion>
);

export default AccordionCollapse;
