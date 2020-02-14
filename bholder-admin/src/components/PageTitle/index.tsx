import React from "react";
import { Row, Col } from "react-bootstrap";
import { TextTitle } from "./styled";

interface IPPageTitle {
  title: string;
}

const PageTitle: React.FC<IPPageTitle> = ({ title }) => (
  <Row>
    <Col md={12}>
      <TextTitle>{title}</TextTitle>
    </Col>
  </Row>
);

export default PageTitle;
