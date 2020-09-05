import styled from 'styled-components';

export interface MenuContainerProps {
  width?: number | 'auto';
}

const MenuContainer = styled.div<MenuContainerProps>`
  width: ${(props) => `${props.width || 10}vw`};
`;

const LogoName = styled.h1`
  font-family: 'Black Ops One', cursive;
  font-size: 14px;
`;
export { MenuContainer, LogoName };
