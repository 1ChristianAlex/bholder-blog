import { Grid } from '@material-ui/core';
import React from 'react';
import AppBarBholder from '../AppBarBholder';
import SideDrawer from '../SideDrawer';
import { DashboardContext, DashboardProvider } from './DashboradProvider';
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
          <DashboardContext.Consumer>
            {(value) => (
              <ContainerItem $drawerOpen={value.drawerOpen}>
                {children}
              </ContainerItem>
            )}
          </DashboardContext.Consumer>
        </Grid>
      </Grid>
    </DashboardProvider>
  );
};

export default DashboardContainer;
