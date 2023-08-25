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
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { closedMixin, openedMixin } from './hooks';
import { WHITE_COLOR } from '../../../style';
import { SIDE_MENU_ITEMS } from './const';
import {
  HEADER_HEIGHT_MOBILE,
  HEADER_HEIGHT_PC,
  SIDE_MENU_WIDTH,
} from '../../../const';

/** Drawerスタイル */
const FridgeDrawer = styled(Drawer)(({ theme, open }) => ({
  width: SIDE_MENU_WIDTH,
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
  height: HEADER_HEIGHT_MOBILE,
  [theme.breakpoints.up('sm')]: {
    height: HEADER_HEIGHT_PC,
  },
}));

type Props = {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

/**
 * PCのサイドメニューコンポーネント
 *
 * @returns コンポーネント
 */
const SideMenuLayout = ({ isOpen, openDrawer, closeDrawer }: Props) => (
  <Box sx={{ display: 'flex' }}>
    <FridgeDrawer variant="permanent" open={isOpen}>
      <DrawerHeader>
        <IconButton
          onClick={isOpen ? closeDrawer : openDrawer}
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
              <ListItemButton sx={{ margin: isOpen ? '0 8px' : 'auto' }}>
                <ListItemIcon sx={{ color: 'unset' }}>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ borderRadius: 4 }} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </FridgeDrawer>
  </Box>
);

export default SideMenuLayout;
