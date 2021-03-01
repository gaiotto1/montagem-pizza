import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Routes from './routes';

import './config/reactotronConfig';
import store from './store';

const App = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
    </Provider>
  </>
);

export default App;
