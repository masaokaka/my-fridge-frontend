import { useRoutes } from 'react-router-dom';

import { useAuth } from '../lib/auth';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  //   const commonRoutes = [{ path: '/', element: <Landing /> }];
  // TODO: 認証処理実装後に修正する
  const isAuthorized = useAuth();
  const routes = isAuthorized ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return element;
};
