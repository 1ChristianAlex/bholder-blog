import React from 'react';
import { Grid } from '@material-ui/core';
import { BackgroundHeader } from './styles';
import { useUser } from '../../hooks';

const AppHeader: React.FC = () => {
  const user = useUser();

  return (
    <BackgroundHeader container alignContent="center" alignItems="center">
      <Grid item md={2}>
        <Grid container>
          <Grid item md={6}></Grid>
        </Grid>
      </Grid>
      <Grid item md={6} />
      <Grid item md={2}>
        {user.firstName}
      </Grid>
      <Grid item md={2}>
        option
      </Grid>
    </BackgroundHeader>
  );
};

export default AppHeader;
