import { render, screen } from '@testing-library/react';
import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';

test('renders learn react link', () => {
  render(
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});
