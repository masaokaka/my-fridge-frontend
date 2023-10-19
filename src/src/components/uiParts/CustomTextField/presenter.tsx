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
  helperText,
  error,
  placeholder,
  size,
}: Props) => (
  <StyledTextField
    size={size}
    type={type}
    label={label}
    InputProps={{
      sx: { borderRadius: 10, px: 1 },
      endAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
    }}
    placeholder={placeholder}
    variant="outlined"
    color="secondary"
    disabled={disabled}
    onChange={onChange}
    fullWidth
    error={error}
    helperText={helperText}
  />
);

export default CustomTextField;
