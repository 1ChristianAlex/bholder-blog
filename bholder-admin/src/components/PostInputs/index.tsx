import React, { FC } from 'react';
import { InputText, DraftArea, TextArea } from 'components';
import { Row, Col, Tab, Tabs } from 'react-bootstrap';
import { FormItem } from './styled';

interface IPostData {
  postName?: string;
  postContent?: string;
  [key: string]: any;
}
const PostForm: FC = () => (
  <Row>
    <Col md={12}>
      <InputText name="postName" type="text" placeholder="Post name" />
    </Col>
    <Col md={12}>
      <FormItem>
        <Tabs id="controle-tab-editor">
          <Tab eventKey="visual" title="Visual" tabClassName="tab-text">
            <DraftArea name="visualArea" />
          </Tab>
          <Tab eventKey="code" title="Code">
            <TextArea name="codeArea" />
          </Tab>
        </Tabs>
      </FormItem>
    </Col>
  </Row>
);

export default PostForm;
