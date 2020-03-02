import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import { Button, FileDropble } from 'components';
import { FaFontAwesomeFlag, FaCalendar } from 'react-icons/fa';
import { CardItemSide, Icon, TextItem, ButtonContainer } from './styled';

const PostSideBar: FC = () => {
  const mokeDate = new Date();
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
            <Button text="Save" type="submit" color="primary" />
          </ButtonContainer>
        </Card.Footer>
      </Card>
      <Card className="mt-4">
        <Card.Header>Publish</Card.Header>
        <Card.Body>
          <FileDropble name="input-post-file" />
        </Card.Body>
      </Card>
    </div>
  );
};
export default PostSideBar;
