import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, CSSReset} from '@chakra-ui/core';

import App from './views/App';

import myTheme from './theme';

import './toasty';

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
