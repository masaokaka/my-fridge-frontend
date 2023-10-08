import { rest } from 'msw';

export const homeHandlers = [
  rest.get('http://localhost:8000/test', (req, res, ctx) => {
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
