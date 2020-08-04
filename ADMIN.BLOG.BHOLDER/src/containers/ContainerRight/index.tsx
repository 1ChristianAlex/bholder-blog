import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface IPContainerRight {
  Main: React.FC;
  SideRight?: React.FC;
}

const ContainerRight: React.FC<IPContainerRight> = ({ Main, SideRight }) => (
  <Row>
    <Col md={9}>
      <Main />
    </Col>
    <Col md={3}>{SideRight && <SideRight />}</Col>
  </Row>
);

export default ContainerRight;
