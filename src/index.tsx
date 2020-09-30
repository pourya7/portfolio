import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, CSSReset, ColorModeProvider} from '@chakra-ui/core';

import App from './views/App';

import myTheme from './theme';

import './toasty';

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <ColorModeProvider>
      <CSSReset />
      <App />
    </ColorModeProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
