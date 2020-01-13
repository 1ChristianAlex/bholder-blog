import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Logo, LoginForm } from 'components';
import { ContentCenter } from 'containers';

const Login: React.FC = () => (
  <Container>
    <Row className="vh-100 justify-content-center">
      <Col md={6}>
        <ContentCenter>
          <Logo height={150} />
          <LoginForm />
        </ContentCenter>
      </Col>
    </Row>
  </Container>
);

export default Login;
