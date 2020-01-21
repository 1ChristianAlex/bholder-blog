import styled from 'styled-components';
import { defaultColors } from 'assets/colors';

interface ISViewContainer {
  ref?: any;
}
export const ViewContainer = styled.div<ISViewContainer>`
  height: 101vh;
  background-color: ${defaultColors.black};
  color: ${defaultColors.white};
  padding: 15px 0;
`;
export const LogoContaiener = styled.div`
  text-align: center;
`;
export const LinksContainer = styled.div`
  text-align: left;
`;
interface ISFixedMenu {
  width: string;
}
export const FixedMenu = styled.div<ISFixedMenu>`
  position: fixed;
  width: ${props => props.width};
`;
