import {
  Control,
  Controller,
  UseFormHandleSubmit,
  UseFormGetValues,
} from 'react-hook-form';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Edit, Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomTextField } from '../../uiParts/CustomTextField';
import { CustomButton } from '../../uiParts/CustomButton';
import GoogleAuthButtonImg from '../../../assets/google_sign_in_img.png';
import { UserInfoType } from './types';
import { validationRules } from './const';

type Props = {
  control: Control<UserInfoType>;
  handleSubmit: UseFormHandleSubmit<UserInfoType, undefined>;
  registerUser: (data: UserInfoType) => void;
  getValues: UseFormGetValues<UserInfoType>;
  canSeePassword: {
    password: boolean;
    confirmationPassword: boolean;
  };
  showPassword: (param: 'password' | 'confirmationPassword') => void;
};

const FormLabelText = ({ children }) => (
  <Typography ml={2} fontSize={14} fontWeight="bold">
    {children}
  </Typography>
);

/**
 * 新規ユーザー登録画面
 *
 * @returns コンポーネント
 */
const RegisterUserPresenter = ({
  control,
  handleSubmit,
  registerUser,
  getValues,
  canSeePassword,
  showPassword,
}: Props) => (
  <Box textAlign="center" width={{ xs: '100%', sm: '500px' }}>
    <Typography variant="h5" fontWeight="bold" mb={2}>
      新規登録
    </Typography>
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(registerUser)}
      gap={1}
      textAlign="left"
    >
      <FormLabelText>ユーザー名</FormLabelText>
      <Controller
        name="username"
        control={control}
        rules={validationRules.username}
        render={({ field, fieldState: { error } }) => (
          <CustomTextField
            placeholder="冷蔵庫太郎"
            size="small"
            type="text"
            {...field}
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
      />
      <FormLabelText>メールアドレス</FormLabelText>
      <Controller
        name="email"
        control={control}
        rules={validationRules.email}
        render={({ field, fieldState: { error } }) => (
          <CustomTextField
            placeholder="example@gmail.com"
            size="small"
            type="email"
            {...field}
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
      />
      <FormLabelText>パスワード</FormLabelText>
      <Controller
        name="password"
        control={control}
        rules={validationRules.password}
        render={({ field, fieldState: { error } }) => (
          <CustomTextField
            placeholder="8文字以上、大文字、小文字、数字の組み合わせ"
            size="small"
            type={canSeePassword.password ? 'text' : 'password'}
            icon={
              <IconButton onClick={() => showPassword('password')}>
                {canSeePassword.password ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
            {...field}
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
      />
      <FormLabelText>パスワード（確認用）</FormLabelText>
      <Controller
        name="confirmationPassword"
        control={control}
        rules={{
          ...validationRules.password,
          validate: (val) =>
            val === getValues('password') ?? 'パスワードが一致しません。',
        }}
        render={({ field, fieldState: { error } }) => (
          <CustomTextField
            placeholder="8文字以上、大文字、小文字、数字の組み合わせ"
            size="small"
            type={canSeePassword.confirmationPassword ? 'text' : 'password'}
            icon={
              <IconButton onClick={() => showPassword('confirmationPassword')}>
                {canSeePassword.confirmationPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            }
            {...field}
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
      />
      <Box mt={1} textAlign="center">
        <CustomButton variant="contained" startIcon={<Edit />} type="submit">
          新規登録
        </CustomButton>
      </Box>
    </Stack>
    <Divider sx={{ width: '100%', my: { xs: 1, sm: 2 } }} />
    <Button
      type="button"
      onClick={() => console.log('sign in with google')}
      sx={{ width: '190px', p: 0 }}
    >
      <Box
        height={{ xs: 35, sm: 45 }}
        component="img"
        alt="Sign in with Google"
        src={GoogleAuthButtonImg}
      />
    </Button>
  </Box>
);

export default RegisterUserPresenter;
