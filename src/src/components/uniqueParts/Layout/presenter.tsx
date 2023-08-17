import { useMemo, useState } from 'react';
import { Box, Container } from '@mui/material';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { headerHeight } from '../Header/presenter';
import { footerHeight } from '../Footer/presenter';
import { CLOSED_SIDE_MENU_WIDTH, SIDE_MENU_WIDTH } from '../../../const';
import { SideMenu } from '../SideMenu';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
  const sidebarWidth = useMemo(
    () => (isOpen ? SIDE_MENU_WIDTH : CLOSED_SIDE_MENU_WIDTH),
    [isOpen]
  );
  return (
    <Box display="flex">
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
            pt: { xs: `${headerHeight.mobile}px` },
            minHeight: {
              sm: `calc(100vh - ${headerHeight.pc + footerHeight.pc}px)`,
              xs: `calc(100vh - ${footerHeight.mobile}px)`,
            },
          }}
        >
          {children}
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};
export default Layout;
