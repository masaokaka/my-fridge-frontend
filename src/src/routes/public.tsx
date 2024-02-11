import { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Outlet } from 'react-router';
import { PublicLayout } from '../components/uniqueParts/PublicLayout';
import { lazyImport } from '../utils/lazyImport';

const { RegisterUser } = lazyImport(
  () => import('../components/pages/RegisterUser'),
  'RegisterUser'
);
const { ResetPassword } = lazyImport(
  () => import('../components/pages/ResetPassword'),
  'ResetPassword'
);
const { Login } = lazyImport(
  () => import('../components/pages/Login'),
  'Login'
);

const App = () => (
  <PublicLayout>
    <Suspense
      fallback={
        <Box>
          <CircularProgress />
        </Box>
      }
    >
      <Outlet />
    </Suspense>
  </PublicLayout>
);

export const publicRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'register',
        element: <RegisterUser />,
      },
      {
        path: 'password',
        element: <ResetPassword />,
      },
      {
        path: '*',
        element: <Login />,
      },
    ],
  },
];
