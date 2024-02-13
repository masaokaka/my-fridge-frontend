import { rest } from 'msw';
import {
  LoginAPIParamType,
  LoginAPIResponseType,
} from '../../../components/pages/Login/types';

export const loginHandlers = [
  rest.post<LoginAPIParamType>('/login', async (req, res, ctx) => {
    const { username, password } = await req.json<LoginAPIParamType>();
    if (password && username) {
      return res(
        ctx.status(200),
        ctx.json<LoginAPIResponseType>({
          userId: '11111',
          username: '太郎',
          sessionId: '03459uyg40wtecmfx0934mctx2u4t8cut0w4et',
        })
      );
    } else {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'パラメータが不正です。',
        })
      );
    }
  }),
];
