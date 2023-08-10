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
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { DRAWER_WIDTH, closedMixin, openedMixin } from './hooks';
import { WHITE_COLOR } from '../../../style';
import { SIDE_MENU_ITEMS } from './const';

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
          {SIDE_MENU_ITEMS.map((item) =>
            item.title !== 'ログアウト' ? (
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
                      borderBottom: isOpen
                        ? `1px solid ${WHITE_COLOR}`
                        : 'none',
                      margin: isOpen ? '0 8px' : 'auto',
                    }}
                  >
                    <ListItemIcon sx={{ color: 'unset' }}>
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ) : (
              <ListItem
                disablePadding
                sx={{
                  color: WHITE_COLOR,
                }}
              >
                <ListItemButton
                  sx={{
                    borderBottom: isOpen ? `1px solid ${WHITE_COLOR}` : 'none',
                    margin: isOpen ? '0 8px' : 'auto',
                  }}
                  onClick={() => {}}
                >
                  <ListItemIcon sx={{ color: 'unset' }}>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </FridgeDrawer>
    </Box>
  );
};

export default SideMenuLayout;
