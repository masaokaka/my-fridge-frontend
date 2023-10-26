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
import {
  handleChange,
  selectColor,
  useCreateFoodDisplayList,
  useFetchFootManagementList,
} from './hooks';

/**
 * 食材管理リスト
 *
 * @returns コンポーネント
 */
const FoodManagementListPresenter = () => {
  const { isOpen, open, close } = useToggle(true);
  const { foodManagementList, isLoading } = useFetchFootManagementList();
  const { foodDisplayList, addDisplayList, showMoreButton } =
    useCreateFoodDisplayList(foodManagementList);

  // TODO: ローディング処理
  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Box>
      <Accordion
        expanded={isOpen}
        onChange={() => handleChange(isOpen, open, close)}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography marginLeft={2}>食材管理</Typography>
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
