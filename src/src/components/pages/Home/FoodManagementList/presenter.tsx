import { ExpandMore, Error } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import { useToggle } from '../../../../utils/useToggle';
import { handleChange, selectColor, useCreateFoodDisplayList } from './hooks';
import { FoodManagement } from './types';

const mockData: FoodManagement[] = [
  {
    id: 1,
    level: 2,
    date: '2021/12/04',
    message: '醤油の残量が4/1以下です。',
  },
  {
    id: 2,
    level: 1,
    date: '2021/12/05',
    message: '息子がキャベツ、白菜、豚肉を追加しました。',
  },
  {
    id: 3,
    level: 3,
    date: '2021/12/06',
    message: '納豆の賞味期限が切れています。',
  },
  {
    id: 4,
    level: 2,
    date: '2021/12/04',
    message: '醤油の残量が4/1以下です。',
  },
  {
    id: 5,
    level: 1,
    date: '2021/12/05',
    message: '息子がキャベツ、白菜、豚肉を追加しました。',
  },
  {
    id: 6,
    level: 3,
    date: '2021/12/06',
    message: '納豆の賞味期限が切れています。',
  },
];

/**
 * 食材管理リスト
 *
 * @returns コンポーネント
 */
const FoodManagementListPresenter = () => {
  const { isOpen, open, close } = useToggle(true);
  const { foodDisplayList, addDisplayList, showMoreButton } =
    useCreateFoodDisplayList(mockData);
  return (
    <Box>
      <Accordion
        expanded={isOpen}
        onChange={() => handleChange(isOpen, open, close)}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>食材管理</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          <Box>
            {foodDisplayList.map((item) => (
              <Box key={item.id} marginTop={2} paddingLeft={3} paddingRight={3}>
                <Box marginBottom={1} paddingLeft={3} paddingRight={3}>
                  {item.date}
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '8px',
                    }}
                  >
                    <Error style={{ color: selectColor(item.level) }} />
                    <Typography marginLeft={2}>{item.message}</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
            ))}
          </Box>
          <Box
            style={{
              textAlign: 'center',
              cursor: 'pointer',
              marginTop: '16px',
            }}
          >
            {showMoreButton && (
              <Typography onClick={() => addDisplayList()}>
                もっと見る
              </Typography>
            )}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FoodManagementListPresenter;
