import { Button, ButtonProps, styled } from '@mui/material';
import { ACCENT_COLOR, MAIN_COLOR } from '../../../style';

type Props = ButtonProps;

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  height: '40px',
  minWidth: '120px',
  fontWeight: 'bold',
  fontSize: '14px',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
  '&.MuiButton-outlinedPrimary': {
    backgroundColor: '#fff',
    '&:hover': {
      // セカンダリーカラーのrgbが(239,125,60)
      backgroundColor: MAIN_COLOR,
      color: '#fff',
    },
  },
  '&.MuiButton-outlinedSecondary': {
    backgroundColor: '#fff',
    '&:hover': {
      // セカンダリーカラーのrgbが(239,125,60)
      backgroundColor: ACCENT_COLOR,
      color: '#fff',
    },
  },
  [theme.breakpoints.up('sm')]: {
    height: '45px',
    fontSize: '16px',
  },
}));
/** 共通ボタン
 * @param startIcon アイコン
 * @param variant ボタンUIの種類
 * @param onClick クリック時処理
 * @param disabled 非活性フラグ
 */
const CustomButton = ({
  startIcon,
  disabled,
  onClick,
  variant,
  children,
  color = 'secondary',
  type,
}: Props) => (
  <StyledButton
    type={type}
    variant={variant}
    color={color}
    startIcon={startIcon}
    onClick={onClick}
    disabled={disabled}
    disableRipple
    disableTouchRipple
  >
    {children}
  </StyledButton>
);

export default CustomButton;
