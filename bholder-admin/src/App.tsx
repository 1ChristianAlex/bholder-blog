import React, { FC } from 'react';
import { GlobalStyled } from 'styles/globals';
import { Provider } from 'context/Provider';
import Routes from './routes';

const App: FC = () => (
  <>
    <GlobalStyled />
    <Provider>
      <Routes />
    </Provider>
  </>
);

export default App;
