import styled from 'styled-components';

interface ContainerItemProps {
  $drawerOpen: boolean;
}

const ContainerItem = styled.div<ContainerItemProps>`
  padding: 24px;

  max-height: calc(100vh - 112px);
  height: calc(100vh - 112px);

  min-width: ${(props) =>
    !props.$drawerOpen ? 'unset' : 'calc(100vw - 18.6vw)'};
  width: ${(props) => (!props.$drawerOpen ? 'unset' : 'calc(100vw - 18.6vw)')};

  overflow: auto;
`;
export { ContainerItem };
