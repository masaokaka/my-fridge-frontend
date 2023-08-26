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
import { Link, useNavigate } from 'react-router-dom';
import { BASE_COLOR } from '../../../style';
import logo from '../../../assets/logo.png';
import {
  ACCOUNT_PATH,
  HEADER_HEIGHT_MOBILE,
  HEADER_HEIGHT_PC,
  NEWS_PATH,
} from '../../../const';
import { UseToggleType } from '../../../utils/useToggle';

/** ロゴ */
const Logo = () => (
  <Link to="/">
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
  </Link>
);

const StyledHeader = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: HEADER_HEIGHT_PC,
    position: 'sticky',
  },
  height: HEADER_HEIGHT_MOBILE,
  position: 'fixed',
}));

type Props = {
  /** 冷蔵庫名 */
  fridgeName: string;
  /** お知らせ数 */
  notificationsCount: number;
  /** タブレット用サイドメニュー開閉 */
  drawerTabletSize: UseToggleType;
};

/** ヘッダー */
const Header = ({
  fridgeName,
  notificationsCount,
  drawerTabletSize,
}: Props) => {
  const navigate = useNavigate();
  return (
    <StyledHeader elevation={0}>
      <Container sx={{ height: '100%' }}>
        <Toolbar disableGutters sx={{ height: '100%' }}>
          <Logo />
          <Typography fontWeight="bold" ml={2} fontSize={{ xs: 16, sm: 20 }}>
            {fridgeName}の冷蔵庫
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton color="inherit" onClick={() => drawerTabletSize.open()}>
              <Menu />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => navigate(ACCOUNT_PATH)}
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => navigate(NEWS_PATH)}
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
