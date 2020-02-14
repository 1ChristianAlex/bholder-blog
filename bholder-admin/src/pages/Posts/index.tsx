import React from "react";
import { PageTitle, PostForm, PostSideBar } from "components";
import { ContainerRight } from "containers";
import { Row, Col } from "react-bootstrap";
import { Form } from "@rocketseat/unform";

const Posts: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={12}>
          <PageTitle title="New Post" />
          <ContainerRight Main={PostForm} SideRight={PostSideBar} />
        </Col>
      </Row>
    </Form>
  );
};

export default Posts;
