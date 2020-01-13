import React, { FC } from 'react';
import { GlobalStyled } from 'styles/globals';
import Routes from './routes';

const App: FC = () => (
  <>
    <GlobalStyled />
    <Routes />
  </>
);

export default App;
