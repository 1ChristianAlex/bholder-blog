import styled from 'styled-components';

const LogoImage = styled.img`
  width: ${(props) => props.width || 50}px;
`;

const LogoContainer = styled.div`
  text-align: center;
`;
export { LogoImage, LogoContainer };
