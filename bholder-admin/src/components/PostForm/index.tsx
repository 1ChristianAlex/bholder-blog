import React, { FC, useState } from 'react';
import { InputText, DraftArea, TextArea } from 'components';
import { Row, Col } from 'react-bootstrap';
import { FormItem, TabContainer, TabItem } from './styled';

interface IPostData {
  postName?: string;
  postContent?: string;
  [key: string]: any;
}
const PostForm: FC = () => {
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const [textSelection, setTextSelection] = useState<boolean>(true);

  const changeTextSelection = (idText: number) => {
    setTextSelection(idText === 1);
  };

  return (
    <Row>
      <Col md={12}>
        <InputText name="postName" type="text" placeholder="Post name" />
      </Col>
      <Col md={12}>
        <FormItem>
          <TabContainer>
            <TabItem
              active={textSelection}
              onClick={() => {
                changeTextSelection(1);
              }}
            >
              Visual
            </TabItem>
            <TabItem
              active={!textSelection}
              onClick={() => {
                changeTextSelection(2);
              }}
            >
              Code
            </TabItem>
          </TabContainer>
          {textSelection ? (
            <DraftArea
              name="visualArea"
              defaultValue={textAreaValue}
              changeValue={setTextAreaValue}
            />
          ) : (
            <TextArea
              name="codeArea"
              defaultValue={textAreaValue}
              changeValue={setTextAreaValue}
            />
          )}
        </FormItem>
      </Col>
    </Row>
  );
};

export default PostForm;
