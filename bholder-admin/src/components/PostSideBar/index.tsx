import React, { FC } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Button, FileDropble, ModalButton } from 'components';
import { FaFontAwesomeFlag, FaCalendar } from 'react-icons/fa';
import { useForm } from 'context/hooks';
import {
  CardItemSide,
  Icon,
  TextItem,
  ButtonContainer,
  ImagePreview
} from './styled';

const PostSideBar: FC = () => {
  const mokeDate = new Date();
  const fileValue = useForm<{ file: File; baseUrl: string }>('input-post-file');

  return (
    <div className="mt-3">
      <Card>
        <Card.Header>Publish</Card.Header>
        <Card.Body>
          <CardItemSide>
            <Icon>
              <FaFontAwesomeFlag />
            </Icon>
            <TextItem>Publish</TextItem>
          </CardItemSide>
          <CardItemSide>
            <Icon>
              <FaCalendar />
            </Icon>
            <TextItem>{mokeDate.toDateString()}</TextItem>
          </CardItemSide>
        </Card.Body>
        <Card.Footer>
          <ButtonContainer>
            <Button text="Publish" type="submit" color="primary" />
          </ButtonContainer>
        </Card.Footer>
      </Card>
      <Card className="mt-4">
        <Card.Header>
          <Row>
            <Col>
              <TextItem>Thumbnail</TextItem>
            </Col>
            <Col>
              <ModalButton>
                <FileDropble name="input-post-file" />
              </ModalButton>
            </Col>
          </Row>
        </Card.Header>
        {fileValue?.baseUrl && (
          <Card.Body>
            <ImagePreview src={fileValue?.baseUrl} />
          </Card.Body>
        )}
      </Card>
    </div>
  );
};
export default PostSideBar;
