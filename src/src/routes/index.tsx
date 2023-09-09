import { useRoutes } from 'react-router-dom';

// import { useAuth } from '../lib/auth';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  // const auth = useAuth();

  //   const commonRoutes = [{ path: '/', element: <Landing /> }];
  // TODO: 認証処理実装後に修正する
  const isAuthorized = false;
  const routes = isAuthorized ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return element;
};
