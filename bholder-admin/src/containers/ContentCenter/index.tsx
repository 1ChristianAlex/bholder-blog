import React, { FC } from 'react';
import { MidleAling, ColAling } from './styled';

const MIddleAlingContainer: FC = ({ children }) => (
  <ColAling md={6}>
    <MidleAling>{children}</MidleAling>
  </ColAling>
);

export default MIddleAlingContainer;
