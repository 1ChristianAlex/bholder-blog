import React from 'react';
import { ChipItemStyled } from './styles';

interface ChipItemProps {
  label: string;
  onClick?(event?: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  onDelete?(event?: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

const ChipItem: React.FC<ChipItemProps> = ({ label, onDelete, onClick }) => {
  return <ChipItemStyled label={label} onClick={onClick} onDelete={onDelete} />;
};

export default ChipItem;
