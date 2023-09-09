import { ReactNode } from 'react';
import { Box, Container, styled } from '@mui/material';
import {
  FOOTER_HEIGHT_MOBILE,
  FOOTER_HEIGHT_PC,
  PUBLIC_HEADER_HEIGHT_PC,
  PUBLIC_HEADER_HEIGHT_MOBILE,
} from '../../../const';
import { WHITE_COLOR } from '../../../style';
import { PublicHeader } from '../PublicHeader';

type Props = {
  children?: ReactNode;
};

const PublicLayoutWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingBottom: 0,
  },
  display: 'flex',
}));

const StyledFooter = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: FOOTER_HEIGHT_PC,
    fontSize: 14,
  },
  height: FOOTER_HEIGHT_MOBILE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  color: WHITE_COLOR,
  backgroundColor: theme.palette.primary.main,
}));

/** フッター */
const Footer = () => (
  <StyledFooter>©️2022 MyFridge. All Rights Reserved.</StyledFooter>
);

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
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  </PublicLayoutWrapper>
);
export default PublicLayout;
