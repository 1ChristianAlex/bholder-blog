import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { ColBackground } from './styles';

interface WithSideColProps {
  MainComponent: React.FC;
  ColComponent: React.FC;
  Col?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const WithSideCol: React.FC<WithSideColProps> = ({
  ColComponent,
  Col = 2,
  MainComponent,
}) => {
  return (
    <Grid container>
      <ColBackground item md={Col}>
        <ColComponent />
      </ColBackground>
      <Grid item md={'auto'}>
        <Container>
          <MainComponent />
        </Container>
      </Grid>
    </Grid>
  );
};

export default WithSideCol;
