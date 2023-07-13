import { lazyImport } from '../utils/lazyImport';

const { Login } = lazyImport(
  () => import('../components/pages/Login'),
  'Login'
);

export const publicRoutes = [
  {
    path: '*',
    element: <Login />,
  },
];
