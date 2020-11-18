import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { StoreProvider } from '../redux';
import AppRoutes from './Routes';
import GlobalStyle from '../theme/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../theme/colors';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={darkTheme}>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <AppRoutes />
        </StylesProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
