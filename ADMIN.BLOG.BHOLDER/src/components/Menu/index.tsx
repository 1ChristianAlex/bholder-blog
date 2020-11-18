import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { MenuContainer, LogoName } from './styles';
import Logo from 'components/Logo';
import { AiOutlineMenuFold } from 'react-icons/ai';

const Menu: React.FC = () => {
  const [width] = useState(15);

  return (
    <MenuContainer width={width}>
      <Grid container alignItems="center">
        <Grid item md={12}>
          <Grid container alignItems="center">
            <Grid item md={3}>
              <Logo width={30} />
            </Grid>
            <Grid item md={6}>
              <LogoName>Bholder</LogoName>
            </Grid>
            <Grid item md={3}>
              <AiOutlineMenuFold />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={12}>
          Dashboard
        </Grid>
      </Grid>
    </MenuContainer>
  );
};

export default Menu;
