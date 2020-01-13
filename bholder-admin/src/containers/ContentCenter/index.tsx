import React, { FC, createRef, useEffect, useState } from 'react';
import { MidleAling } from './styled';

const MIddleAlingContainer: FC = ({ children }) => {
  const refContainer = createRef<HTMLDivElement>();
  const [divHeigh, setDivHeigh] = useState<number>(0);

  useEffect(() => {
    const div = refContainer.current?.clientHeight;

    if (div) {
      setDivHeigh(div);
    }
  }, [refContainer]);

  return (
    <MidleAling height={divHeigh} ref={refContainer}>
      {children}
    </MidleAling>
  );
};

export default MIddleAlingContainer;
