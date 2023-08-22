import { Home, CalendarMonth, Kitchen, Person } from '@mui/icons-material';
import {
  ACCOUNT_PATH,
  HOME_PATH,
  MENU_PATH,
  MY_FOOD_PATH,
} from '../../../const';

export const BOTTOM_NAV_MENU_LIST = [
  { label: 'ホーム', icon: Home, path: HOME_PATH },
  { label: '食材一覧', icon: Kitchen, path: MY_FOOD_PATH },
  { label: 'アカウント', icon: Person, path: ACCOUNT_PATH },
  { label: '献立表', icon: CalendarMonth, path: MENU_PATH },
];
