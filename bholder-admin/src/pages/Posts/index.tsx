import React from 'react';
import { PageTitle, PostForm, PostSideBar } from 'components';
import { ContainerRight } from 'containers';
import { Row, Col } from 'react-bootstrap';
import { Form } from '@unform/web';
import { FormBholder } from 'context/Provider';

const Posts: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormBholder>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={12}>
            <PageTitle title="New Post" />
            <ContainerRight Main={PostForm} SideRight={PostSideBar} />
          </Col>
        </Row>
      </Form>
    </FormBholder>
  );
};

export default Posts;
