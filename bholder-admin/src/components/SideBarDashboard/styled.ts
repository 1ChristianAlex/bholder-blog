import styled from 'styled-components';
import { defaultColors } from 'assets/colors';

interface ISViewContainer {
  ref?: any;
}
interface ISFixedMenu {
  width: string;
}
export const ViewContainer = styled.div<ISViewContainer>`
  height: calc(100vh - 30px);
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
export const FixedMenu = styled.div<ISFixedMenu>`
  position: fixed;
  width: ${props => props.width};
`;
export const CollpaseSideBarContainer = styled.div`
    position: fixed;
    bottom: 15px;
    left: 15px;
    cursor: pointer;
    width: fit-content;
    `
export const CollapseSideText = styled.span`
padding: 5px 10px;
`
