import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { useToggle } from '../../../../utils/useToggle';

/**
 * 食材管理リスト
 *
 * @returns コンポーネント
 */
const FoodManagementListPresenter = () => {
  const toggleAccordion = useToggle(true);
  return (
    <Box>
      <Accordion
        expanded={toggleAccordion.isOpen}
        onChange={() => {
          if (toggleAccordion.isOpen) {
            toggleAccordion.close();
            return;
          }
          toggleAccordion.open();
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>食材管理</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>aaa</Typography>
          <Typography>もっと見る</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FoodManagementListPresenter;
