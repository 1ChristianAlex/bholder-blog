import styled from "styled-components";
import { defaultColors } from "assets/colors";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export const BgBar = styled.div`
  background-color: ${defaultColors.black};
  color: ${defaultColors.white};
  position: fixed;
  z-index: 99;
  width: 100vw;
`;
export const LogoContainer = styled.div`
  background-color: ${defaultColors.gray};
`;
export const LinkTop = styled(Link)`
  color: ${defaultColors.white};
  font-size: ${"14px"};
  display: block;
  text-decoration: none;
  width: 100%;
  text-align: left;
  height: auto;
  margin: 5px;
  :hover {
    color: ${defaultColors.yellow};
    text-decoration: none;
    display: block;
    width: 100%;
  }
  :focus {
    color: ${props => props.color || defaultColors.white};
    text-decoration: none;
    width: 100%;
    display: block;
  }
`;
export const DropdownToggle = styled(Dropdown.Toggle)`
  color: #f8f8f8;
  font-size: 14px;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-align: left;
  height: auto;
  margin: 5px;
  background-color: transparent;
  border-color: transparent;
  padding: 0;
  :focus,
  :hover,
  :active {
    color: unset !important;
    background-color: unset !important;
    border-color: unset !important;
    box-shadow: unset !important;
  }
`;
export const DropdownConteiner = styled(Dropdown)`
  text-align: right;
  margin: 0 15px;
`;
