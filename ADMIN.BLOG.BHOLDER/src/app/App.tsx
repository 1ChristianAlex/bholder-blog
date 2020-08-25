import React from 'react';
import AppRoutes from './Routes';
import GlobalStyle from '../assets/theme/global';
import { StylesProvider } from '@material-ui/core/styles';
import { ReduxStore } from '../redux/store';

function App() {
  return (
    <ReduxStore>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <AppRoutes />
      </StylesProvider>
    </ReduxStore>
  );
}

export default App;
