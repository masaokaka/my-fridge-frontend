import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from '@mui/material';

/**
 * 食材管理リスト
 *
 * @returns コンポーネント
 */
const FoodHandlingPresenter = () => (
  <Box>
    <Accordion expanded>
      <AccordionSummary>
        <Typography marginLeft={2}>食材を使う</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Divider />
        中身
      </AccordionDetails>
    </Accordion>
  </Box>
);

export default FoodHandlingPresenter;
