import styled from 'styled-components';

const BackGroundBlack = styled.div`
  background-color: ${(props) => props.theme.darkBlue};
  height: 100vh;
  width: 100vw;
`;

const ContainerCenter = styled.div`
  margin: auto;
  height: 100%;
  display: flex;
  width: 50%;
`;

export { BackGroundBlack, ContainerCenter };
