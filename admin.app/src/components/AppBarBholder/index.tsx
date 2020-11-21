import React, { useContext } from 'react';
import { Grid, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { AppBarStyle, ButtonIcon, SearchBar, MenuButton } from './styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { DashboardContext } from '../DashboardContainer/DashboradProvider';

const AppBarBholder: React.FC = () => {
  const { setDrawerOpen, drawerOpen } = useContext(DashboardContext);
  return (
    <AppBarStyle position="static">
      <Grid container alignContent="center">
        <Grid item>
          <Toolbar>
            <MenuButton
              onClick={() => setDrawerOpen(!drawerOpen)}
              $isSelected={drawerOpen}
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </MenuButton>
          </Toolbar>
        </Grid>
        <Grid item xs={11} className="app-bar-itens">
          <Grid container spacing={3} alignContent="center" justify="flex-end">
            <Grid item>
              <Grid
                container
                spacing={1}
                alignContent="center"
                alignItems="center"
              >
                <Grid item>
                  <SearchIcon />
                </Grid>
                <Grid item>
                  <SearchBar variant="filled" label="Buscar" size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ButtonIcon>
                <AccountCircleIcon />
              </ButtonIcon>
            </Grid>
            <Grid item>
              <ButtonIcon>
                <MoreVertIcon />
              </ButtonIcon>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBarStyle>
  );
};

export default AppBarBholder;
