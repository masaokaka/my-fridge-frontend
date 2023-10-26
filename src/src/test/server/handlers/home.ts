import { rest } from 'msw';

export const homeHandlers = [
  // 食材管理リスト取得API
  rest.get('http://localhost:8000/food_management_list', (req, res, ctx) => {
    return res(
      ctx.json({
        foodManagementList: [
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
        ],
      })
    );
  }),
  // 1日の献立取得API
  rest.get('http://localhost:8000/daily_menu', (req, res, ctx) => {
    return res(
      ctx.json({
        date: '2023/10/09',
        breakfast: [
          {
            id: 1,
            title: '目玉焼き',
            status: 1,
          },
          {
            id: 2,
            title: '納豆',
            status: 1,
          },
        ],
        lunch: [
          {
            id: 1,
            title: 'カレーライス',
            status: 2,
          },
        ],
        dinner: [
          {
            id: 1,
            title: '牛丼',
            status: 2,
          },
        ],
      })
    );
  }),
];
