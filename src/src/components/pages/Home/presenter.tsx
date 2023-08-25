import { Box, Typography } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';
import { CustomButton } from '../../uiParts/CustomButton';

const Home = () => (
  <Box>
    <Typography variant="h1">メインコンテンツ</Typography>
    <Typography variant="h1">メインコンテンツ</Typography>
    <Typography variant="h1">メインコンテンツ</Typography>
    <Typography variant="h1">メインコンテンツ</Typography>
    <Typography variant="h1">メインコンテンツ</Typography>
    <Typography variant="h1">メインコンテンツ</Typography>
    <Typography variant="h1">メインコンテンツ</Typography>
    <Typography variant="h1">メインコンテンツ</Typography>
    <Typography variant="h1">メインコンテンツ</Typography>
    <CustomButton startIcon={<CalendarMonth />} variant="contained">
      献立登録
    </CustomButton>
  </Box>
);
export default Home;
