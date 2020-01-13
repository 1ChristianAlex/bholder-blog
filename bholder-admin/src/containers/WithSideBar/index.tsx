import React, { FC } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const WithSideBar: FC = () => (
  <Row>
    <Col md={1}>teste</Col>
    <Col md={11}>
      <Container>teste</Container>
    </Col>
  </Row>
);

export default WithSideBar;
