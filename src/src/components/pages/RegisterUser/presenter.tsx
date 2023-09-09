import { Box, IconButton, Typography } from '@mui/material';
import { Edit, Google, Visibility } from '@mui/icons-material';
import { CustomTextField } from '../../uiParts/CustomTextField';
import { CustomButton } from '../../uiParts/CustomButton';

/**
 * 新規ユーザー登録画面
 *
 * @returns コンポーネント
 */
const RegisterUser = () => (
  <Box textAlign="center" height="100%">
    <Typography variant="h5" fontWeight="bold" mb={4}>
      新規登録
    </Typography>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box mb={3} width="100%">
        <CustomTextField label="ユーザー名" width={500} type="text" />
      </Box>
      <Box mb={3}>
        <CustomTextField label="メールアドレス" width={500} type="email" />
      </Box>
      <Box mb={3}>
        <CustomTextField
          label="パスワード"
          width={500}
          type="password"
          icon={<Visibility />}
        />
      </Box>
      <Box mb={3}>
        <CustomTextField
          label="確認用パスワード"
          width={500}
          type="password"
          icon={<Visibility />}
        />
      </Box>
      <Box mb={3}>
        <CustomButton variant="contained" startIcon={<Edit />}>
          新規登録
        </CustomButton>
      </Box>

      <IconButton>
        <Google />
      </IconButton>
    </Box>
  </Box>
);

export default RegisterUser;
