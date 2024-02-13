import { useMemo } from 'react';
import { Box, Container, styled } from '@mui/material';
import { Header } from '../Header';
import { Footer } from '../Footer';
import {
  BOTTOM_NAV_HEIGHT,
  CLOSED_SIDE_MENU_WIDTH,
  FOOTER_HEIGHT_MOBILE,
  FOOTER_HEIGHT_PC,
  HEADER_HEIGHT_MOBILE,
  HEADER_HEIGHT_PC,
  SIDE_MENU_WIDTH,
} from '../../../const';
import { SideMenu } from '../SideMenu';
import { BottomNavBar } from '../BottomNavBar';
import { useToggle } from '../../../utils/useToggle';
import { SideMenuTablet } from '../SideMenuTablet';

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingBottom: 0,
  },
  display: 'flex',
  paddingBottom: BOTTOM_NAV_HEIGHT,
}));

const Layout = ({ children }: Props) => {
  /** PC画面用のサイドメニュー開閉フラグ */
  const drawerPCSize = useToggle(true);
  /**  タブレット以下のサイドメニュー開閉フラグ */
  const drawerTabletSize = useToggle(false);

  const sideMenuWidth = useMemo(
    () => (drawerPCSize.isOpen ? SIDE_MENU_WIDTH : CLOSED_SIDE_MENU_WIDTH),
    [drawerPCSize]
  );
  return (
    <>
      <LayoutWrapper display="flex">
        <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
          <SideMenu
            isOpen={drawerPCSize.isOpen}
            openDrawer={drawerPCSize.open}
            closeDrawer={drawerPCSize.close}
          />
        </Box>
        <Box
          sx={(theme) => ({
            width: { sm: `calc(100% - ${sideMenuWidth}px)`, xs: '100%' },
            transition: {
              sm: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: drawerPCSize.isOpen
                  ? theme.transitions.duration.enteringScreen
                  : theme.transitions.duration.leavingScreen,
              }),
            },
          })}
        >
          <Header
            fridgeName="田中"
            notificationsCount={25}
            drawerTabletSize={drawerTabletSize}
          />
          <Container
            sx={{
              pt: { xs: `${HEADER_HEIGHT_MOBILE}px`, sm: 0 },
              minHeight: {
                sm: `calc(100vh - ${HEADER_HEIGHT_PC + FOOTER_HEIGHT_PC}px)`,
                xs: `calc(100vh - ${FOOTER_HEIGHT_MOBILE}px)`,
              },
            }}
          >
            {children}
          </Container>
          <Footer isPublicPage={false} />
          <BottomNavBar />
        </Box>
      </LayoutWrapper>
      <SideMenuTablet drawerTabletSize={drawerTabletSize} />
    </>
  );
};
export default Layout;
