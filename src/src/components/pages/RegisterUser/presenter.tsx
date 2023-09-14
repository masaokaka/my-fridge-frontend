import { Box, Button, Divider, Typography, styled } from '@mui/material';
import { Edit, Visibility } from '@mui/icons-material';
import { CustomTextField } from '../../uiParts/CustomTextField';
import { CustomButton } from '../../uiParts/CustomButton';
import GoogleAuthButtonImg from '../../../assets/google_sign_in_img.png';

const TextFieldWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  width: '100%',
  maxWidth: 500,
}));

/**
 * 新規ユーザー登録画面
 *
 * @returns コンポーネント
 */
const RegisterUser = () => (
  <Box textAlign="center" height="100%" justifyContent="center">
    <Typography variant="h5" fontWeight="bold" mb={4}>
      新規登録
    </Typography>
    <form>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <TextFieldWrapper>
          <CustomTextField label="ユーザー名" type="text" />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <CustomTextField label="メールアドレス" type="email" />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <CustomTextField
            label="パスワード"
            type="password"
            icon={<Visibility />}
          />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <CustomTextField
            label="確認用パスワード"
            type="password"
            icon={<Visibility />}
          />
        </TextFieldWrapper>
        <Box mb={2}>
          <CustomButton variant="contained" startIcon={<Edit />}>
            新規登録
          </CustomButton>
        </Box>
        <Divider sx={{ maxWidth: 500, width: '100%', mb: { xs: 1, sm: 2 } }} />
        <Button onClick={() => console.log('sign in with google')}>
          <Box
            height={{ xs: 40, sm: 50 }}
            component="img"
            alt="Sign in with Google"
            src={GoogleAuthButtonImg}
          />
        </Button>
      </Box>
    </form>
  </Box>
);

export default RegisterUser;
