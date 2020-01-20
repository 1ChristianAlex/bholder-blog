import React from 'react';
import { AccordionCollapse, NavLink, Link } from 'components';
import { Row, Col } from 'react-bootstrap';
import {
  FaHome,
  FaMarker,
  FaImages,
  FaNewspaper,
  FaMailBulk,
  FaUserAlt,
  FaComment,
  FaCogs
} from 'react-icons/fa';
import { ViewContainer, LinksContainer } from './styled';

const SideBarDashboard: React.FC = () => (
  <ViewContainer>
    <Row>
      <Col md={12}>
        <Row>
          <Col md={12}>
            <LinksContainer>
              <Link text="Dashboard" url="/admin" Icon={FaHome} />
            </LinksContainer>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <LinksContainer>
              <AccordionCollapse TogleTitle="Posts" Icon={FaMarker}>
                <>
                  <NavLink text="New Post" url="/admin/posts/new" />
                  <NavLink text="List posts" url="/admin/posts/list" />
                  <NavLink text="Caterogies" url="/admin/posts/categories" />
                </>
              </AccordionCollapse>
            </LinksContainer>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <LinksContainer>
              <AccordionCollapse TogleTitle="Comments" Icon={FaComment}>
                <>
                  <NavLink text="New Post" url="/admin/posts/new" />
                  <NavLink text="List posts" url="/admin/posts/list" />
                  <NavLink text="Caterogies" url="/admin/posts/categories" />
                </>
              </AccordionCollapse>
            </LinksContainer>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <LinksContainer>
              <AccordionCollapse TogleTitle="Media" Icon={FaImages}>
                <>
                  <NavLink text="List media" url="/admin/media/list" />
                  <NavLink text="Caterogies" url="/admin/media/categories" />
                </>
              </AccordionCollapse>
            </LinksContainer>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <LinksContainer>
              <AccordionCollapse TogleTitle="Pages" Icon={FaNewspaper}>
                <>
                  <NavLink text="New Page" url="/admin/pages/new" />
                  <NavLink text="List pages" url="/admin/pages/list" />
                  <NavLink text="Caterogies" url="/admin/pages/categories" />
                </>
              </AccordionCollapse>
            </LinksContainer>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <LinksContainer>
              <AccordionCollapse TogleTitle="Contacts" Icon={FaMailBulk}>
                <>
                  <NavLink text="View Contacts" url="/admin/contacts/view" />
                  <NavLink text="Configure" url="/admin/contacts/configure" />
                </>
              </AccordionCollapse>
            </LinksContainer>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <LinksContainer>
              <AccordionCollapse TogleTitle="User" Icon={FaUserAlt}>
                <>
                  <NavLink text="New User" url="/admin/user/new" />
                  <NavLink text="List all" url="/admin/user/list" />
                </>
              </AccordionCollapse>
            </LinksContainer>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <LinksContainer>
              <AccordionCollapse TogleTitle="Settings" Icon={FaCogs}>
                <>
                  <NavLink text="New User" url="/admin/user/new" />
                  <NavLink text="List all" url="/admin/user/list" />
                </>
              </AccordionCollapse>
            </LinksContainer>
          </Col>
        </Row>
      </Col>
    </Row>
  </ViewContainer>
);

export default SideBarDashboard;
