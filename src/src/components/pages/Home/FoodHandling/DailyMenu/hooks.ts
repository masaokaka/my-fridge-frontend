import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

/**
 * ホーム画面
 * 1日の献立を取得して返却するカスタムフック
 */
export const useFetchDailyMenu = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['homeTest'],
    queryFn: () =>
      axios.get('http://localhost:8000/test').then((res) => res.data),
  });

  return { dailyMenuList: data, isLoading };
};
