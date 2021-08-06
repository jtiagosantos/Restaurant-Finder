import React from 'react';
import Home from './pages/Home/index';

import { GlobalStyle } from './GlobalStyle';

import theme from './theme';
import { ThemeProvider } from 'styled-components';

import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
