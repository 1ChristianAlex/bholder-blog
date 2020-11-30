import React from 'react';
import { PaperStyle } from './styles';

interface PaperBholderProps {
  height?: number;
}

const PaperBholder: React.FC<PaperBholderProps> = ({ children, height }) => {
  return (
    <PaperStyle $height={height} elevation={2}>
      {children}
    </PaperStyle>
  );
};

export default PaperBholder;
