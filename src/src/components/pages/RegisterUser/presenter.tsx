import { ReactNode } from 'react';
import {
  Control,
  Controller,
  UseFormHandleSubmit,
  UseFormGetValues,
} from 'react-hook-form';
import {
  Box,
  Divider,
  IconButton,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material';
import { Edit, Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomTextField } from '../../uiParts/CustomTextField';
import { CustomButton } from '../../uiParts/CustomButton';
import GoogleAuthButtonImg from '../../../assets/google_sign_in_img.png';
import { UserInfoType } from './types';
import { validationRules } from './const';
import { TEXT_COLOR } from '../../../style';

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
  serverError: string;
};

const FormLabelText = ({
  children,
  htmlFor,
}: {
  children: ReactNode;
  htmlFor: string;
}) => (
  <InputLabel
    htmlFor={htmlFor}
    sx={{ mr: 'auto', '&:hover': { cursor: 'pointer' } }}
  >
    <Typography fontSize={16} fontWeight="bold" color={TEXT_COLOR}>
      {children}
    </Typography>
  </InputLabel>
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
  serverError,
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
      {serverError && (
        <Typography color="error" fontWeight={600}>
          {serverError}
        </Typography>
      )}
      <FormLabelText htmlFor="username">ユーザー名</FormLabelText>
      <Controller
        name="username"
        control={control}
        rules={validationRules.username}
        render={({
          field: { value, onChange, ref },
          fieldState: { error },
        }) => (
          <CustomTextField
            id="username"
            placeholder="冷蔵庫太郎"
            type="text"
            value={value}
            onChange={onChange}
            inputRef={ref}
            error={Boolean(error)}
            helperText={error?.message}
            autoComplete="username"
          />
        )}
      />
      <FormLabelText htmlFor="email">メールアドレス</FormLabelText>
      <Controller
        name="email"
        control={control}
        rules={validationRules.email}
        render={({
          field: { value, onChange, ref },
          fieldState: { error },
        }) => (
          <CustomTextField
            id="email"
            placeholder="example@gmail.com"
            type="email"
            value={value}
            onChange={onChange}
            inputRef={ref}
            error={Boolean(error)}
            helperText={error?.message}
            autoComplete="email"
          />
        )}
      />
      <FormLabelText htmlFor="password">パスワード</FormLabelText>
      <Controller
        name="password"
        control={control}
        rules={validationRules.password}
        render={({
          field: { value, onChange, ref },
          fieldState: { error },
        }) => (
          <CustomTextField
            autoComplete="new-password"
            id="password"
            placeholder="8文字以上、大文字、小文字、数字の組み合わせ"
            type={canSeePassword.password ? 'text' : 'password'}
            icon={
              <IconButton onClick={() => showPassword('password')}>
                {canSeePassword.password ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
            value={value}
            onChange={onChange}
            inputRef={ref}
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
      />
      <FormLabelText htmlFor="confirmationPassword">
        パスワード（確認用）
      </FormLabelText>
      <Controller
        name="confirmationPassword"
        control={control}
        rules={{
          ...validationRules.password,
          validate: (val) =>
            val === getValues('password') ?? 'パスワードが一致しません。',
        }}
        render={({
          field: { value, onChange, ref },
          fieldState: { error },
        }) => (
          <CustomTextField
            autoComplete="new-password"
            id="confirmationPassword"
            placeholder="8文字以上、大文字、小文字、数字の組み合わせ"
            type={canSeePassword.confirmationPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            inputRef={ref}
            icon={
              <IconButton onClick={() => showPassword('confirmationPassword')}>
                {canSeePassword.confirmationPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            }
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
    <Box mb={2}>
      <Box
        height={{ xs: 35, sm: 45 }}
        component="img"
        alt="Sign in with Google"
        src={GoogleAuthButtonImg}
        onClick={() => console.log('clicked')}
        sx={{
          cursor: 'pointer',
          transition: '0.3s',
          '&:hover': {
            filter: 'brightness(0.8)',
          },
        }}
      />
    </Box>
  </Box>
);

export default RegisterUserPresenter;
