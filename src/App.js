import React from 'react';
import Home from './pages/Home/index';

import { GlobalStyle } from './GlobalStyle';

import theme from './theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
