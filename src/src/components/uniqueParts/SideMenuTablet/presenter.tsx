import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import { Close, Logout } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { UseToggleType } from '../../../utils/useToggle';
import { SIDE_MENU_ITEMS } from '../SideMenu/const';
import { MAIN_COLOR, WHITE_COLOR } from '../../../style';

type Props = {
  /** タブレット用サイドメニュー開閉 */
  drawerTabletSize: UseToggleType;
};

/** Drawerスタイル */
const FridgeDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    backgroundColor: MAIN_COLOR,
  },
}));

/** Drawerのヘッダースタイル */
const DrawerHeader = styled('div')(({ theme }) => ({
  textAlign: 'right',
  paddingTop: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

/**
 * タブレット以下のサイドメニュー
 *
 * @returns コンポーネント
 */
const SideMenuTablet = ({ drawerTabletSize }: Props) => {
  const { isOpen, close } = drawerTabletSize;
  return (
    <FridgeDrawer open={isOpen}>
      <DrawerHeader>
        <IconButton onClick={() => close()} sx={{ color: WHITE_COLOR }}>
          <Close />
        </IconButton>
      </DrawerHeader>
      <List>
        {SIDE_MENU_ITEMS.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            onClick={() => close()}
            style={{
              color: WHITE_COLOR,
              textDecoration: 'none',
            }}
          >
            <ListItem>
              <ListItemButton sx={{ flexGrow: 'unset', marginRight: '8px' }}>
                <ListItemIcon sx={{ color: 'unset', minWidth: 'unset' }}>
                  <item.icon />
                </ListItemIcon>
              </ListItemButton>
              <ListItemText primary={item.title} />
            </ListItem>
          </NavLink>
        ))}
        {/* ログアウト部分 */}
        <ListItem
          style={{ color: WHITE_COLOR }}
          onClick={() => {
            // TODO: ログアウト処理の実装
            close();
          }}
        >
          <ListItemButton sx={{ flexGrow: 'unset', marginRight: '8px' }}>
            <ListItemIcon sx={{ color: 'unset', minWidth: 'unset' }}>
              <Logout />
            </ListItemIcon>
          </ListItemButton>
          <ListItemText primary="ログアウト" />
        </ListItem>
      </List>
    </FridgeDrawer>
  );
};

export default SideMenuTablet;
