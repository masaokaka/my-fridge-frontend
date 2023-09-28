import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';
import { CustomButton } from '../../../uiParts/CustomButton';

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
        <Box
          marginTop={2}
          paddingLeft={3}
          paddingRight={3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography>2021年11月26日(火)の献立</Typography>
          <CustomButton
            startIcon={<CalendarMonth />}
            variant="contained"
            onClick={() => console.log('献立表へ遷移する')} // TODO: 押下時処理の実装
          >
            献立表
          </CustomButton>
        </Box>
        中身
      </AccordionDetails>
    </Accordion>
  </Box>
);

export default FoodHandlingPresenter;
