import { ThemeProvider } from '@mui/styles';
import { render, screen } from '@testing-library/react';

import App from 'containers/App';
import theme from 'theme';

test('renders learn react link', () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  );
  const linkElement = screen.getByText(/To do/i);
  expect(linkElement).toBeInTheDocument();
});
