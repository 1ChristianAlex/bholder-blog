import styled from "styled-components";
import { Col } from "react-bootstrap";

export interface IMidleAling {
  height?: string;
}

export const MidleAling = styled.div<IMidleAling>`
  height: fit-content;
`;
export const ColAling = styled(Col)`
  margin: auto auto;
`;
