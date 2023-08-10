import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import {
  AccountCircle,
  Notifications,
  Logout,
  Menu,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { BASE_COLOR } from '../../../style';
import logo from '../../../assets/logo.png';
import { ACCOUNT_PAGE_PATH } from '../../../const';

export const headerHeight = { pc: 80, mobile: 56 };

/** ロゴ */
const Logo = () => (
  <Box
    sx={{
      backgroundColor: BASE_COLOR,
      borderRadius: 2,
      height: { sm: 60, xs: 40 },
      width: { sm: 60, xs: 40 },
    }}
  >
    <Box
      component="img"
      alt="ロゴ"
      src={logo}
      sx={{ height: { sm: 60, xs: 40 }, width: { sm: 60, xs: 40 } }}
    />
  </Box>
);

const StyledHeader = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: headerHeight.pc,
  },
  height: headerHeight.mobile,
}));

type Props = {
  /** 冷蔵庫名 */
  fridgeName: string;
  /** お知らせ数 */
  notificationsCount: number;
};

/** ヘッダー */
const Header = ({ fridgeName, notificationsCount }: Props) => {
  const navigate = useNavigate();
  return (
    <StyledHeader position="sticky" elevation={0}>
      <Container sx={{ height: '100%' }}>
        <Toolbar disableGutters sx={{ height: '100%' }}>
          <Logo />
          <Typography fontWeight="bold" ml={2} fontSize={{ xs: 14, sm: 20 }}>
            {fridgeName}の冷蔵庫
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              color="inherit"
              onClick={() => navigate(ACCOUNT_PAGE_PATH)}
            >
              <Menu />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <IconButton
              size="large"
              color="inherit"
              // onClick={}
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              // onClick={}
            >
              <Badge badgeContent={notificationsCount} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton size="large" edge="end" color="inherit">
              <Logout />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledHeader>
  );
};
export default Header;
