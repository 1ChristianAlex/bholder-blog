import { Textarea } from '@rocketseat/unform';
import styled from 'styled-components';
import { defaultColors } from 'assets/colors';


export const CodeArea = styled(Textarea)`
padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: rgb(35, 35, 35);
    background-color: white;
    background-clip: padding-box;
    border: 1px solid ${defaultColors.gray};
    border-radius: 5px;
    height: 50vh;
    width: 100%;
    margin: 15px 0;
    display: inline-block;
`
