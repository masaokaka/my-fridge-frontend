import { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import {
  CalendarMonth,
  ChevronLeft,
  ChevronRight,
  EditCalendar,
  Home,
  Kitchen,
  LocalDining,
  Logout,
  List as ListIcon,
  MenuBook,
  Notifications,
  Person,
  SetMeal,
  ControlPoint,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { DRAWER_WIDTH, closedMixin, openedMixin } from './hooks';
import { WHITE_COLOR } from '../../../style';

type MenuType = {
  title: string;
  icon: JSX.Element;
  path: string;
};

/** Drawerスタイル */
const FridgeDrawer = styled(Drawer)(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  // 開いた時のスタイル追加
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  // 閉じた時のスタイル追加
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

/** Drawerのヘッダースタイル */
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: theme.spacing(1),
}));

/** サイドメニュー項目 */
const SIDE_MENU_ITEMS: MenuType[] = [
  {
    title: 'Home',
    icon: <Home />,
    path: '/',
  },
  {
    title: 'お知らせ',
    icon: <Notifications />,
    path: '/test',
  },
  {
    title: '所持食材一覧',
    icon: <Kitchen />,
    path: '',
  },
  {
    title: '食材登録',
    icon: <ControlPoint />,
    path: '',
  },
  {
    title: '食材セット一覧',
    icon: <ListIcon />,
    path: '',
  },
  {
    title: '食材セット登録',
    icon: <SetMeal />,
    path: '',
  },
  {
    title: 'レシピ一覧',
    icon: <MenuBook />,
    path: '',
  },
  {
    title: 'Myレシピ登録',
    icon: <LocalDining />,
    path: '',
  },
  {
    title: '献立表',
    icon: <CalendarMonth />,
    path: '',
  },
  {
    title: '献立登録',
    icon: <EditCalendar />,
    path: '',
  },
  {
    title: 'アカウント',
    icon: <Person />,
    path: '',
  },
  {
    title: 'ログアウト',
    icon: <Logout />,
    path: '',
  },
];

/**
 * サイドメニューコンポーネント
 *
 * @returns コンポーネント
 */
const SideMenuLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box sx={{ display: 'flex' }}>
      <FridgeDrawer variant="permanent" open={isOpen}>
        <DrawerHeader>
          <IconButton
            onClick={() => setIsOpen((open) => !open)}
            sx={{ color: WHITE_COLOR }}
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>

        <List>
          {SIDE_MENU_ITEMS.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              style={({ isActive }) => ({
                color: isActive ? '#FFE89A' : WHITE_COLOR,
                textDecoration: 'none',
              })}
            >
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderBottom: isOpen ? `1px solid ${WHITE_COLOR}` : 'none',
                    margin: isOpen ? '0 8px' : 'auto',
                  }}
                >
                  <ListItemIcon sx={{ color: 'unset' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </FridgeDrawer>
    </Box>
  );
};

export default SideMenuLayout;
