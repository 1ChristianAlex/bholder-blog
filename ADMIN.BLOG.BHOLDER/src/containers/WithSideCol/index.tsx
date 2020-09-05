import React, { useRef, useEffect, useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import { ColBackground, ColMain } from './styles';
import { AppHeader } from 'components';

interface WithSideColProps {
  MainComponent: React.FC;
  ColComponent: React.FC;
  Col?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const WithSideCol: React.FC<WithSideColProps> = ({
  ColComponent,
  MainComponent,
}) => {
  const refSideCol = useRef<HTMLDivElement>(null);
  const [widthMain, setWidthMain] = useState(0);
  useEffect(() => {
    if (refSideCol.current) {
      const width = window.outerWidth - refSideCol.current.offsetWidth;
      setWidthMain(width);
    }
  }, [refSideCol]);

  return (
    <Grid container>
      <ColBackground ref={refSideCol} item md={'auto'}>
        <ColComponent />
      </ColBackground>
      <Grid>
        <AppHeader />
        <ColMain widthCss={widthMain}>
          <Container>
            <MainComponent />
          </Container>
        </ColMain>
      </Grid>
    </Grid>
  );
};

export default WithSideCol;
