import { useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Container, styled, AppBar, Toolbar } from '@mui/material';
import { Login, Edit } from '@mui/icons-material';
import {
  PUBLIC_HEADER_HEIGHT_MOBILE,
  PUBLIC_HEADER_HEIGHT_PC,
} from '../../../const';
import logo from '../../../assets/logo.png';
import { CustomButton } from '../../uiParts/CustomButton';

/** ロゴ */
const Logo = () => (
  <Link to="/">
    <Box
      sx={{
        backgroundColor: 'transparent',
        height: { sm: 80, xs: 60 },
        width: { sm: 80, xs: 60 },
      }}
    >
      <Box
        component="img"
        alt="ロゴ"
        src={logo}
        sx={{ height: { sm: 80, xs: 60 }, width: { sm: 80, xs: 60 } }}
      />
    </Box>
  </Link>
);

const StyledHeader = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: PUBLIC_HEADER_HEIGHT_PC,
    position: 'sticky',
  },
  height: PUBLIC_HEADER_HEIGHT_MOBILE,
  position: 'fixed',
  backgroundColor: theme.palette.background.default,
}));

const PublicHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isPasswordResetPage = location.pathname === '/password';
  const HeaderButtons = useMemo(() => {
    if (isPasswordResetPage) {
      return (
        <>
          <Box mr={2}>
            <CustomButton
              startIcon={<Login />}
              variant="contained"
              color="primary"
              onClick={() => navigate('./')}
            >
              ログイン
            </CustomButton>
          </Box>
          <Box>
            <CustomButton
              startIcon={<Edit />}
              variant="contained"
              onClick={() => navigate('./register')}
            >
              新規登録
            </CustomButton>
          </Box>
        </>
      );
    }
    if (isLoginPage) {
      return (
        <Box>
          <CustomButton
            startIcon={<Edit />}
            variant="contained"
            onClick={() => navigate('./register')}
          >
            新規登録
          </CustomButton>
        </Box>
      );
    }
    return (
      <Box>
        <CustomButton
          startIcon={<Login />}
          variant="contained"
          color="primary"
          onClick={() => navigate('./')}
        >
          ログイン
        </CustomButton>
      </Box>
    );
  }, [isLoginPage, isPasswordResetPage, navigate]);
  return (
    <StyledHeader elevation={0}>
      <Container sx={{ height: '100%' }}>
        <Toolbar disableGutters sx={{ height: '100%' }}>
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
          {HeaderButtons}
        </Toolbar>
      </Container>
    </StyledHeader>
  );
};
export default PublicHeader;
