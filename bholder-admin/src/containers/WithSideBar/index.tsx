import React, { FC } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSideBar } from 'context/hooks/';

interface SideBarContainer {
  SideBarComponent?: FC<any>;
  MainComponent?: FC<any>;
}

const WithSideBar: FC<SideBarContainer> = ({
  SideBarComponent,
  MainComponent
}) => {
  const collapseSideBar = useSideBar();

  return (
    <Row style={{ paddingTop: '30px', width: '100vw' }}>
      {SideBarComponent && (
        <Col md={!collapseSideBar ? 1 : 2}>
          <SideBarComponent />
        </Col>
      )}
      {MainComponent && (
        <Col md={!collapseSideBar ? 11 : 10} className="mt-4">
          <Row>
            <Container>
              <MainComponent />
            </Container>
          </Row>
        </Col>
      )}
    </Row>
  );
};

export default WithSideBar;
