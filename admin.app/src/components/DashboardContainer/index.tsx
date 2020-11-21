import { Grid } from '@material-ui/core';
import React from 'react';
import AppBarBholder from '../AppBarBholder';
import SideDrawer from '../SideDrawer';
import { DashboardProvider } from './DashboradProvider';
import { ContainerItem } from './styles';

const DashboardContainer: React.FC = ({ children }) => {
  return (
    <DashboardProvider>
      <Grid container>
        <Grid item xs={12}>
          <AppBarBholder />
        </Grid>
        <Grid item>
          <SideDrawer />
        </Grid>
        <Grid item>
          <ContainerItem>{children}</ContainerItem>
        </Grid>
      </Grid>
    </DashboardProvider>
  );
};

export default DashboardContainer;
