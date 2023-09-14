import { Box } from '@mui/material';
import { ControlPoint, Kitchen } from '@mui/icons-material';
import { CustomButton } from '../../uiParts/CustomButton';

/**
 * ホーム画面
 * @returns コンポーネント
 */
const Home = () => (
  <Box>
    {/* ボタンエリア */}
    <Box
      paddingTop={4}
      style={{ display: 'flex', justifyContent: 'flex-end', gap: '0px 24px' }}
    >
      <CustomButton
        startIcon={<Kitchen />}
        variant="contained"
        color="primary"
        onClick={() => console.log('所持食材一覧へ遷移する')} // TODO: 押下時処理の実装
      >
        所持食材一覧
      </CustomButton>
      <CustomButton
        startIcon={<ControlPoint />}
        variant="contained"
        onClick={() => console.log('食材登録へ遷移する')} // TODO: 押下時処理の実装
      >
        食材登録
      </CustomButton>
    </Box>
  </Box>
);
export default Home;
