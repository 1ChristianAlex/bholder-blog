import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { Logo, LoginForm } from 'components';
import { ContentCenter } from 'containers';
import { BackgroundLogin, BackgroundInner } from './styled';

const Login: React.FC = () => (
  <BackgroundLogin>
    <Container>
      <Row className="vh-100 justify-content-center">
        <ContentCenter>
          <Logo height={90} />
          <BackgroundInner>
            <LoginForm />
          </BackgroundInner>
        </ContentCenter>
      </Row>
    </Container>
  </BackgroundLogin>
);

export default Login;
