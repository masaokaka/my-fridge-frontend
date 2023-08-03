import { ReactNode, useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  styled,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { DRAWER_WIDTH, closedMixin, openedMixin } from './hooks';

type Props = {
  children: ReactNode;
};

/** Drawerスタイル */
const FridgeDrawer = styled(Drawer)(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
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
 * @param children メインコンテンツ
 * @returns コンポーネント
 */
const SideMenuLayout = ({ children }: Props) => {
  const [open, setOpen] = useState(true);
  return (
    <Box sx={{ display: 'flex' }}>
      <FridgeDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen((isOpen) => !isOpen)}>
            {open ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Toolbar />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </FridgeDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default SideMenuLayout;
