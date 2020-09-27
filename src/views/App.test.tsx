import React from 'react';
import {render} from '@testing-library/react';

import App from './App';

test('should render header', () => {
  const {getByText} = render(<App />);
  const header = getByText('Header');
  expect(header).toBeInTheDocument();
});
