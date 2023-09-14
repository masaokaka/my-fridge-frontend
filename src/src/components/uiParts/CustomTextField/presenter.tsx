import { HTMLInputTypeAttribute, ReactNode } from 'react';
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
  styled,
} from '@mui/material';
import { WHITE_COLOR } from '../../../style';

type Props = TextFieldProps & {
  type?: HTMLInputTypeAttribute;
  icon?: ReactNode;
  onClickIcon?: () => void;
};

const StyledTextField = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {},
  '& .MuiOutlinedInput-root': {
    backgroundColor: WHITE_COLOR,
  },
}));
/** 共通テキストフィールド
 * @param label フォームラベル
 * @param variant フォームUIの種類
 * @param onChange 入力時処理
 * @param disabled 非活性フラグ
 * @param icon アイコン
 * @param onClickIcon アイコンクリック時処理
 */
const CustomTextField = ({
  type,
  label,
  disabled,
  onChange,
  icon,
  onClickIcon,
}: Props) => (
  <StyledTextField
    type={type}
    label={label}
    InputProps={{
      sx: { borderRadius: 10, px: 1 },
      endAdornment: (
        <InputAdornment position="start">
          <IconButton onClick={onClickIcon}>{icon}</IconButton>
        </InputAdornment>
      ),
    }}
    variant="outlined"
    color="secondary"
    disabled={disabled}
    onChange={onChange}
    fullWidth
  />
);

export default CustomTextField;
