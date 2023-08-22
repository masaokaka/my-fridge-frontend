import { Button, styled } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  /** アイコン */
  icon?: ReactNode;
  /** タイプ */
  type?: 'outlined' | 'contained';
  /** テキスト */
  text: string;
};

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 24,
  height: 45,
  minWidth: 120,
  '&.MuiButton-outlinedSecondary': {
    backgroundColor: '#fff',
  },
  [theme.breakpoints.up('sm')]: {
    height: 50,
  },
}));
/** 共通ボタン
 * @param icon アイコン
 * @param text テキスト
 * @param type タイプ
 */
const CustomButton = ({ text, icon, type = 'contained' }: Props) => (
  <StyledButton variant={type} color="secondary" startIcon={icon}>
    {text}
  </StyledButton>
);

export default CustomButton;
