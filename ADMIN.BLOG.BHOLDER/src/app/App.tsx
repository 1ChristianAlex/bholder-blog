import React from 'react';
import AppRoutes from './Routes';
import GlobalStyle from '../assets/theme/global';
import { StylesProvider } from '@material-ui/core/styles';
import { ReduxStore } from '../redux/store';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from 'assets/theme/colors';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href={
            'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500;600;700;900&display=swap'
          }
        />
        <link
          rel="stylesheet"
          href={
            'https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap'
          }
        />
      </Helmet>

      <ReduxStore>
        <ThemeProvider theme={darkTheme}>
          <StylesProvider injectFirst>
            <GlobalStyle />
            <AppRoutes />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <ToastContainer />
          </StylesProvider>
        </ThemeProvider>
      </ReduxStore>
    </>
  );
}

export default App;
