import styled from 'styled-components';
import { Input } from '@rocketseat/unform';
import { defaultColors } from 'assets/colors';

export const InputT = styled(Input)`
display: block;
width: 100%;
height: calc(1.5em + .75rem + 2px);
padding: .375rem .75rem;
font-weight: 400;
line-height: 1.5;
border: none;
background: transparent;
border-bottom: 1px solid ${defaultColors.black};
`
export const Label = styled.label`
display: inline-block;
margin-bottom: .5rem;
`
export const InputContainer = styled.div`
margin-bottom: 1rem;
`
