import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { Outlet } from 'react-router';
import { PublicLayout } from '../components/uniqueParts/PublicLayout';
import { lazyImport } from '../utils/lazyImport';

const { Register } = lazyImport(
  () => import('../components/pages/Register'),
  'Register'
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
        <div className="h-full w-full flex items-center justify-center">
          <CircularProgress />
        </div>
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
        element: <Register />,
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
