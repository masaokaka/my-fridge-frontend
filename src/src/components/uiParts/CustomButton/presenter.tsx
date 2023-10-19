import { Button, ButtonProps, styled } from '@mui/material';

type Props = ButtonProps;

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 24,
  height: 45,
  minWidth: 120,
  fontWeight: 'bold',
  fontSize: 14,
  '&.MuiButton-outlinedSecondary': {
    backgroundColor: '#fff',
    '&:hover': {
      // セカンダリーカラーのrgbが(239,125,60)
      backgroundColor: 'rgba(239, 125, 60, 0.04)',
    },
  },
  [theme.breakpoints.up('sm')]: {
    height: 50,
    fontSize: 16,
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
  >
    {children}
  </StyledButton>
);

export default CustomButton;
