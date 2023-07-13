import { ErrorBoundary } from 'react-error-boundary';
import { ReactNode, Suspense } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// import { Button, Spinner } from './components/Elements';
// import { Notifications } from './components/Notifications/Notifications';
// import { AuthProvider } from './lib/auth';
import { queryClient } from '../lib/reactQuery';

const ErrorFallback = () => (
  <div
    className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
    role="alert"
  >
    <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
    <Button
      className="mt-4"
      onClick={() => window.location.assign(window.location.origin)}
    >
      Refresh
    </Button>
  </div>
);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <Suspense
    fallback={
      <div className="flex items-center justify-center w-screen h-screen">
        <CircularProgress size="xl" />
      </div>
    }
  >
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {import.meta.env.DEV && <ReactQueryDevtools />}
          {/* <Notifications /> */}
          {/* <AuthProvider> */}
          <Router>{children}</Router>
          {/* </AuthProvider> */}
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </Suspense>
);
