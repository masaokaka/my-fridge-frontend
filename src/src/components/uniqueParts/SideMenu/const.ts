import {
  Home,
  CalendarMonth,
  EditCalendar,
  Kitchen,
  LocalDining,
  List,
  MenuBook,
  Notifications,
  Person,
  SetMeal,
  ControlPoint,
} from '@mui/icons-material';
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
} from '../../../const';
import { MenuType } from './types';

/** サイドメニュー項目 */
export const SIDE_MENU_ITEMS: MenuType[] = [
  {
    title: 'Home',
    icon: Home,
    path: HOME_PATH,
  },
  {
    title: 'お知らせ',
    icon: Notifications,
    path: NEWS_PATH,
  },
  {
    title: '所持食材一覧',
    icon: Kitchen,
    path: MY_FOOD_PATH,
  },
  {
    title: '食材登録',
    icon: ControlPoint,
    path: ADD_MY_FOOD_PATH,
  },
  {
    title: '食材セット一覧',
    icon: List,
    path: MY_FOOD_SET_PATH,
  },
  {
    title: '食材セット登録',
    icon: SetMeal,
    path: ADD_MY_FOOD_SET_PATH,
  },
  {
    title: 'レシピ一覧',
    icon: MenuBook,
    path: RECIPE_PATH,
  },
  {
    title: 'Myレシピ登録',
    icon: LocalDining,
    path: ADD_MY_RECIPE_PATH,
  },
  {
    title: '献立表',
    icon: CalendarMonth,
    path: MENU_PATH,
  },
  {
    title: '献立登録',
    icon: EditCalendar,
    path: ADD_MENU_PATH,
  },
  {
    title: 'アカウント',
    icon: Person,
    path: ACCOUNT_PATH,
  },
];
