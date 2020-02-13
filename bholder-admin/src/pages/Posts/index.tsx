import React from 'react';
import { PageTitle, PostForm } from 'components';
import { ContainerRight } from 'containers';
import { Row, Col } from 'react-bootstrap';

const Posts: React.FC = () => (
  <Row>
    <Col md={12}>
      <PageTitle title="New Post" />
      <ContainerRight Main={PostForm} />
    </Col>
  </Row>
);

export default Posts;
