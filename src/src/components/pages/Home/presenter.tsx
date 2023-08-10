import { Box, Typography } from '@mui/material';
import { CustomButton } from '../../uiParts/CustomButton';
import { SideMenu } from '../../uiParts/SideMenu';

const Home = () => (
  <Box>
    <Typography variant="h1">メインコンテンツ</Typography>
    <CustomButton>Aaaaa</CustomButton>
    <SideMenu />
  </Box>
);
export default Home;
