import { Box, Container } from '@mui/material';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { headerHeight } from '../Header/presenter';
import { footerHeight } from '../Footer/presenter';

type Props = {
  children: React.ReactNode;
};

const sideNavWidth = 230;

const Layout = ({ children }: Props) => (
  <Box display="flex">
    {/* サイドナビがここ */}
    <Box width={sideNavWidth}>サイドナビ</Box>
    <Box sx={{ width: `calc(100% - ${sideNavWidth}px)` }}>
      <Header />
      <Container
        sx={{
          minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`,
          // TODO: 後で消す
          outline: 'solid 1px black',
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  </Box>
);
export default Layout;
