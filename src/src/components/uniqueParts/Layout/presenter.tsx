import { Box, Container } from '@mui/material';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { headerHeight } from '../Header/presenter';
import { footerHeight } from '../Footer/presenter';

type Props = {
  children: React.ReactNode;
};

export const sideNavWidth = 230;

const Layout = ({ children }: Props) => (
  <Box display="flex">
    {/* サイドナビがここ */}
    <Box width={sideNavWidth} sx={{ display: { sm: 'block', xs: 'none' } }}>
      サイドナビ
    </Box>
    <Box sx={{ width: { sm: `calc(100% - ${sideNavWidth}px)`, xs: '100%' } }}>
      <Header fridgeName="田中" notificationsCount={25} />
      <Container
        sx={{
          minHeight: {
            sm: `calc(100vh - ${headerHeight.pc + footerHeight.pc}px)`,
            xs: `calc(100vh - ${headerHeight.mobile + footerHeight.mobile}px)`,
          },
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  </Box>
);
export default Layout;
