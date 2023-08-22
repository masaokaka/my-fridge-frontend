import { useMemo, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(true);
  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
  const sidebarWidth = useMemo(
    () => (isOpen ? SIDE_MENU_WIDTH : CLOSED_SIDE_MENU_WIDTH),
    [isOpen]
  );
  return (
    <LayoutWrapper display="flex">
      {/* サイドナビがここ */}
      <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
        <SideMenu
          isOpen={isOpen}
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
        />
      </Box>
      <Box
        sx={(theme) => ({
          width: { sm: `calc(100% - ${sidebarWidth}px)`, xs: '100%' },
          transition: {
            sm: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: isOpen
                ? theme.transitions.duration.enteringScreen
                : theme.transitions.duration.leavingScreen,
            }),
          },
        })}
      >
        <Header fridgeName="田中" notificationsCount={25} />
        <Container
          sx={{
            pt: { xs: `${HEADER_HEIGHT_MOBILE}px` },
            minHeight: {
              sm: `calc(100vh - ${HEADER_HEIGHT_PC + FOOTER_HEIGHT_PC}px)`,
              xs: `calc(100vh - ${FOOTER_HEIGHT_MOBILE}px)`,
            },
          }}
        >
          {children}
        </Container>
        <Footer />
        <BottomNavBar />
      </Box>
    </LayoutWrapper>
  );
};
export default Layout;
