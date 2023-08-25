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
    <CustomButton text="献立登録" icon={<CalendarMonth />} />
  </Box>
);
export default Home;
