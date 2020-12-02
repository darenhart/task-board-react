import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/TASK MANAGEMENT BOARD/i);
  expect(title).toBeInTheDocument();
});
