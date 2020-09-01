import React from 'react';
import { Grid } from '@material-ui/core';
import { BackgroundHeader } from './styles';

const AppHeader: React.FC = () => {
  return (
    <BackgroundHeader container>
      <Grid item>nomeusuario</Grid>
      <Grid item>option</Grid>
    </BackgroundHeader>
  );
};

export default AppHeader;
