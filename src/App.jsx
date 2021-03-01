import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
    <ToastContainer autoClose={4000} />
  </>
);

export default App;
