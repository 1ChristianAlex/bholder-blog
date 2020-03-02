import { Form } from '@unform/web';
import styled from 'styled-components';
import { defaultColors } from 'assets/colors';

interface IPTabItem {
  active: boolean;
}

export const FormPostContainer = styled(Form)`
  width: 100%;
`;
export const FormItem = styled.div`
  margin: 15px 0;
`;
export const TabContainer = styled.div`
  display: flex;
  flex-flow: row;
`;
export const TabItem = styled.div<IPTabItem>`
  padding: 0.375rem 0.75rem;
  border: 1px solid ${defaultColors.gray};
  ${props => props.active
    && `border-bottom: unset; border-top:2px solid 
    ${defaultColors.purple}`}

  border-radius: 3px;
  cursor: pointer;
`;
