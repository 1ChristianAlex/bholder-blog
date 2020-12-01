import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { StoreProvider } from '../redux';
import AppRoutes from './AppRoutes';
import GlobalStyle from '../theme/global';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme } from '../theme/colors';
import { SnackbarProvider } from '../components';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <StyledThemeProvider theme={darkTheme}>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <AppRoutes />
          <SnackbarProvider />
        </StylesProvider>
      </StyledThemeProvider>
    </StoreProvider>
  );
};

export default App;
