import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// import { Spinner } from '@/components/Elements';
import { CircularProgress } from '@mui/material';
import { Home } from '../components/pages/Home';
import { Layout } from '../components/uniqueParts/Layout';
// import { MainLayout } from '@/components/Layout';
// import { lazyImport } from '@/utils/lazyImport';

// const { DiscussionsRoutes } = lazyImport(
//   () => import('@/features/discussions'),
//   'DiscussionsRoutes'
// );
// const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');
// const { Profile } = lazyImport(() => import('@/features/users'), 'Profile');
// const { Users } = lazyImport(() => import('@/features/users'), 'Users');

const App = () => (
  <Layout>
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center">
          <CircularProgress />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  </Layout>
);

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      // { path: '/discussions/*', element: <DiscussionsRoutes /> },
      // { path: '/users', element: <Users /> },
      // { path: '/profile', element: <Profile /> },
      { path: '/', element: <Home /> },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];
