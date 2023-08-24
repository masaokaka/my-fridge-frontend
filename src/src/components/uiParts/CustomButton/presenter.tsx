import { Button, styled } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  /** アイコン */
  icon?: ReactNode;
  /** タイプ */
  type?: 'outlined' | 'contained';
  /** 非活性フラグ */
  disabled?: boolean;
  /** クリック時処理 */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** テキスト */
  text: string;
};

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
 * @param icon アイコン
 * @param text テキスト
 * @param type タイプ
 * @param onClick クリック時処理
 * @param disabled 非活性フラグ
 */
const CustomButton = ({
  text,
  icon,
  disabled,
  onClick,
  type = 'contained',
}: Props) => (
  <StyledButton
    variant={type}
    color="secondary"
    startIcon={icon}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </StyledButton>
);

export default CustomButton;
