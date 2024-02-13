import { ReactNode } from 'react';
import { Control, Controller, UseFormHandleSubmit } from 'react-hook-form';
import { Box, IconButton, InputLabel, Stack, Typography } from '@mui/material';
import { Login, Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomTextField } from '../../uiParts/CustomTextField';
import { CustomButton } from '../../uiParts/CustomButton';
import { LoginAPIParamType, LoginFormValueType } from './types';
import { validationRules } from './const';
import { TEXT_COLOR } from '../../../style';

type Props = {
  control: Control<LoginFormValueType>;
  handleSubmit: UseFormHandleSubmit<LoginFormValueType, undefined>;
  login: (data: LoginAPIParamType) => Promise<void>;
  canSeePassword: boolean;
  showPassword: () => void;
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
 * ログイン画面
 *
 * @returns コンポーネント
 */
const LoginPresenter = ({
  control,
  handleSubmit,
  login,
  canSeePassword,
  showPassword,
  serverError,
}: Props) => (
  <Box textAlign="center" width={{ xs: '100%', sm: '500px' }} my="auto">
    <Typography variant="h5" fontWeight="bold" mb={2}>
      ログイン
    </Typography>
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(login)}
      gap={1}
      textAlign="left"
    >
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
            type="text"
            autoComplete="username"
            value={value}
            onChange={onChange}
            inputRef={ref}
            error={Boolean(error)}
            helperText={error?.message}
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
            id="password"
            type={canSeePassword ? 'text' : 'password'}
            autoComplete="password"
            icon={
              <IconButton onClick={showPassword}>
                {canSeePassword ? <VisibilityOff /> : <Visibility />}
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
      {serverError && (
        <Typography color="error" fontWeight={600}>
          {serverError}
        </Typography>
      )}
      <Box mt={1} textAlign="center">
        <CustomButton
          variant="contained"
          color="primary"
          startIcon={<Login />}
          type="submit"
        >
          ログイン
        </CustomButton>
      </Box>
    </Stack>
  </Box>
);

export default LoginPresenter;
