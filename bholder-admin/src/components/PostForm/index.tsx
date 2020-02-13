import React, { FC } from 'react';
import { InputText, DraftArea } from 'components';
import { Row, Col } from 'react-bootstrap';
import { SubmitHandler } from '@rocketseat/unform';
import { FormPostContainer } from './styled';

interface IPostData {
  postName?: string;
  postContent?: string;
  [key: string]: any;
}
const PostForm: FC = () => {
  const handleSubmit: SubmitHandler<IPostData> = data => {
    console.log(data);
  };

  return (
    <FormPostContainer onSubmit={handleSubmit}>
      <Row>
        <Col md={12}>
          <InputText name="postName" type="text" placeholder="Post name" />
        </Col>
        <Col md={12}>
          <DraftArea />
        </Col>
      </Row>
    </FormPostContainer>
  );
};

export default PostForm;
