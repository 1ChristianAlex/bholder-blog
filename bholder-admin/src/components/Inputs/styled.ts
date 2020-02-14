import styled from 'styled-components';
import { Input } from '@rocketseat/unform';
import { defaultColors } from 'assets/colors';

export const InputT = styled(Input)`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${defaultColors.black};
  background-color: white;
  background-clip: padding-box;
  border: 1px solid ${defaultColors.gray};
  border-radius: 5px;
  -webkit-transition: border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;
export const InputContainer = styled.div`
  margin-bottom: 1rem;
`;
