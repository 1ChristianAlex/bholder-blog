import React, { createRef, useEffect, useState } from 'react';
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
  FaCogs,
  FaChevronCircleLeft,
  FaChevronCircleRight
} from 'react-icons/fa';

import { useDispatch, useSideBar } from 'context/hooks';
import { ToggleSideBar } from 'context/sidebar/action';
import {
  ViewContainer,
  LinksContainer,
  FixedMenu,
  CollpaseSideBarContainer,
  CollapseSideText
} from './styled';

const SideBarDashboard: React.FC = () => {
  const widthRef = createRef<HTMLDivElement>();
  const [widthMenu, setWidthMenu] = useState(0);
  const sideBarStatus = useSideBar();
  const dispacth = useDispatch();

  const handleCollapse = () => {
    dispacth(ToggleSideBar());
  };
  useEffect(() => {
    if (widthRef.current?.offsetWidth) {
      setWidthMenu(widthRef.current?.offsetWidth);
    }
  }, [widthRef]);

  return (
    <ViewContainer ref={widthRef}>
      <FixedMenu width={`${widthMenu}px`}>
        <Row>
          <Col md={12}>
            <Row>
              <Col md={12}>
                <LinksContainer>
                  <Link text={sideBarStatus ? 'Dashboard' : ''} url="/admin" Icon={FaHome} />
                </LinksContainer>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <LinksContainer>
                  <AccordionCollapse TogleTitle={sideBarStatus ? 'Posts' : ''} Icon={FaMarker}>
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
                  <AccordionCollapse TogleTitle={sideBarStatus ? 'Comments' : ''} Icon={FaComment}>
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
                  <AccordionCollapse TogleTitle={sideBarStatus ? 'Media' : ''} Icon={FaImages}>
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
                  <AccordionCollapse TogleTitle={sideBarStatus ? 'Pages' : ''} Icon={FaNewspaper}>
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
                  <AccordionCollapse TogleTitle={sideBarStatus ? 'Contacts' : ''} Icon={FaMailBulk}>
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
                  <AccordionCollapse TogleTitle={sideBarStatus ? 'User' : ''} Icon={FaUserAlt}>
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
                  <AccordionCollapse TogleTitle={sideBarStatus ? 'Settings' : ''} Icon={FaCogs}>
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
      </FixedMenu>
      <CollpaseSideBarContainer onClick={handleCollapse}>
        {sideBarStatus ? (
          <>
            <FaChevronCircleLeft />
            <CollapseSideText>Close</CollapseSideText>
          </>
        ) : (
          <>
            <FaChevronCircleRight />
          </>
        )}
      </CollpaseSideBarContainer>
    </ViewContainer>
  );
};
export default SideBarDashboard;
