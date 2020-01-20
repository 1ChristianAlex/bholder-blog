import React, { FC } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

interface SideBarContainer {
  SideBarComponent?: FC<any>;
  MainComponent?: FC<any>;
}

const WithSideBar: FC<SideBarContainer> = ({
  SideBarComponent,
  MainComponent
}) => (
  <Row style={{ paddingTop: '30px', width: '99vw' }}>
    {SideBarComponent && (
      <Col md={2}>
        <SideBarComponent />
      </Col>
    )}
    {MainComponent && (
      <Col md={10} className="mt-3 ">
        <Row>
          <Container>
            <MainComponent />
          </Container>
        </Row>
      </Col>
    )}
  </Row>
);

export default WithSideBar;
