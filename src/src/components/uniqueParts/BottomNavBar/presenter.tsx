import { memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  styled,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import { MAIN_COLOR, WHITE_COLOR } from '../../../style';
import { BOTTOM_NAV_HEIGHT } from '../../../const';
import { BOTTOM_NAV_MENU_LIST } from './const';

const BottomNavWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: BOTTOM_NAV_HEIGHT,
}));
const StyledBottomNavigation = styled(BottomNavigation)(() => ({
  backgroundColor: MAIN_COLOR,
  height: '100%',
}));
const StyledBottomNavigationAction = styled(BottomNavigationAction)(() => ({
  color: WHITE_COLOR,
  '.Mui-selected': {
    color: '#FFE89A',
  },
}));

const BottomNavBar = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <BottomNavWrapper>
      <StyledBottomNavigation showLabels>
        {BOTTOM_NAV_MENU_LIST.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <StyledBottomNavigationAction
              label={item.label}
              icon={<item.icon />}
              sx={{ color: isActive ? '#FFE89A' : WHITE_COLOR }}
              onClick={() => navigate(item.path)}
            />
          );
        })}
      </StyledBottomNavigation>
    </BottomNavWrapper>
  );
});

export default BottomNavBar;
