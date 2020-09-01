import React from 'react';
import { Grid } from '@material-ui/core';

const Menu: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        Dashboard
      </Grid>
    </Grid>
  );
};

export default Menu;
