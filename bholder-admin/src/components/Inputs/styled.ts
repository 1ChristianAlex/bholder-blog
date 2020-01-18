import styled from 'styled-components';
import { Input } from '@rocketseat/unform';
import { defaultColors } from 'assets/colors';

export const InputT = styled(Input)`
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${defaultColors.black};
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid ${defaultColors.black};
    border-radius: .25rem;
    -webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`
export const Label = styled.label`
display: inline-block;
    margin-bottom: .5rem;
`
export const InputContainer = styled.div`
    margin-bottom: 1rem;
`