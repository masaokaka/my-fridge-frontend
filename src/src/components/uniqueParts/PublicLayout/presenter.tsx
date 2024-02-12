import { ReactNode } from 'react';
import { Box, Container, styled } from '@mui/material';
import {
  FOOTER_HEIGHT_MOBILE,
  FOOTER_HEIGHT_PC,
  PUBLIC_HEADER_HEIGHT_PC,
  PUBLIC_HEADER_HEIGHT_MOBILE,
} from '../../../const';
import { PublicHeader } from '../PublicHeader';
import { Footer } from '../Footer';

type Props = {
  children?: ReactNode;
};

const PublicLayoutWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingBottom: 0,
  },
  display: 'flex',
}));

const PublicLayout = ({ children }: Props) => (
  <PublicLayoutWrapper display="flex">
    <Box width="100%">
      <PublicHeader />
      <Container
        sx={{
          pt: { xs: `${PUBLIC_HEADER_HEIGHT_MOBILE}px`, sm: 0 },
          minHeight: {
            sm: `calc(100vh - ${PUBLIC_HEADER_HEIGHT_PC + FOOTER_HEIGHT_PC}px)`,
            xs: `calc(100vh - ${FOOTER_HEIGHT_MOBILE}px)`,
          },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </Container>
      <Footer isPublicPage />
    </Box>
  </PublicLayoutWrapper>
);
export default PublicLayout;
