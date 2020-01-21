import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { useUser, useDispatch } from 'context/hooks';
import { deleteUser } from 'context/user/action';
import { Logo } from 'components';
import { Auth } from 'services';

import {
  BgBar,
  LinkTop,
  LogoContainer,
  DropdownToggle,
  DropdownConteiner
} from './styled';

const InfoBar: React.FC = () => {
  const { first_name } = useUser();
  const dispatch = useDispatch();
  const logOut = () => {
    const auth = Auth.getInstance();
    auth.LogOut();
    dispatch(deleteUser());
  };
  return (
    <BgBar>
      <Row style={{ width: '100vw' }}>
        <Col md={2}>
          <LogoContainer>
            <Logo hiddeText height={30} />
          </LogoContainer>
        </Col>
        <Col md={2}>
          <LinkTop to="/">Notification</LinkTop>
        </Col>
        <Col md={2}>
          <LinkTop to="/">Comments</LinkTop>
        </Col>
        <Col md={2}>
          <LinkTop to="/">New</LinkTop>
        </Col>
        {first_name && (
          <Col md={4}>
            <DropdownConteiner>
              <DropdownToggle id="dropdown-basic">{first_name}</DropdownToggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Config</Dropdown.Item>
                <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </DropdownConteiner>
          </Col>
        )}
      </Row>
    </BgBar>
  );
};

export default InfoBar;
