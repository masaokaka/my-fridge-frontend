import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// import { Spinner } from '@/components/Elements';
import { CircularProgress } from '@mui/material';
import {
  ACCOUNT_PATH,
  ADD_MENU_PATH,
  ADD_MY_FOOD_PATH,
  ADD_MY_FOOD_SET_PATH,
  ADD_MY_RECIPE_PATH,
  HOME_PATH,
  MENU_PATH,
  MY_FOOD_PATH,
  MY_FOOD_SET_PATH,
  NEWS_PATH,
  RECIPE_PATH,
} from '../const';
import { Layout } from '../components/uniqueParts/Layout';
import { Home } from '../components/pages/Home';
import { News } from '../components/pages/News';
import { MyFood } from '../components/pages/MyFood';
import { AddMyFood } from '../components/pages/AddMyFood';
import { MyFoodSet } from '../components/pages/MyFoodSet';
import { AddMyFoodSet } from '../components/pages/AddMyFoodSet';
import { Recipe } from '../components/pages/Recipe';
import { AddMyRecipe } from '../components/pages/AddMyRecipe';
import { Menu } from '../components/pages/Menu';
import { AddMenu } from '../components/pages/AddMenu';
import { Account } from '../components/pages/Account';
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
      { path: HOME_PATH, element: <Home /> },
      { path: NEWS_PATH, element: <News /> },
      { path: MY_FOOD_PATH, element: <MyFood /> },
      { path: ADD_MY_FOOD_PATH, element: <AddMyFood /> },
      { path: MY_FOOD_SET_PATH, element: <MyFoodSet /> },
      { path: ADD_MY_FOOD_SET_PATH, element: <AddMyFoodSet /> },
      { path: RECIPE_PATH, element: <Recipe /> },
      { path: ADD_MY_RECIPE_PATH, element: <AddMyRecipe /> },
      { path: MENU_PATH, element: <Menu /> },
      { path: ADD_MENU_PATH, element: <AddMenu /> },
      { path: ACCOUNT_PATH, element: <Account /> },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];
