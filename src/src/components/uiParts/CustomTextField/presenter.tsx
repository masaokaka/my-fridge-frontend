import { ReactNode } from 'react';
import {
  InputAdornment,
  TextField,
  TextFieldProps,
  colors,
  styled,
} from '@mui/material';

type Props = TextFieldProps & {
  icon?: ReactNode;
};

const StyledTextField = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {},
  '& .MuiOutlinedInput-root': {
    backgroundColor: colors.common.white,
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
  id,
  type,
  label,
  disabled,
  onChange,
  icon,
  helperText,
  error,
  placeholder,
  size,
  autoComplete,
  inputRef,
}: Props) => (
  <StyledTextField
    id={id}
    size={size}
    type={type}
    label={label}
    InputProps={{
      sx: { borderRadius: '12px' },
      endAdornment: icon ? (
        <InputAdornment position="end">{icon}</InputAdornment>
      ) : undefined,
    }}
    placeholder={placeholder}
    variant="outlined"
    color="secondary"
    disabled={disabled}
    onChange={onChange}
    fullWidth
    error={error}
    helperText={helperText}
    autoComplete={autoComplete}
    inputRef={inputRef}
  />
);

export default CustomTextField;
