import { rest } from 'msw';
import {
  RegisterUserAPIParamType,
  RegisterUserAPIResponseType,
} from '../../../components/pages/RegisterUser/types';

export const accountHandlers = [
  rest.post<RegisterUserAPIParamType>('/account', async (req, res, ctx) => {
    const { email, username, password } =
      await req.json<RegisterUserAPIParamType>();
    if (email && password && username) {
      return res(
        ctx.status(200),
        ctx.json<RegisterUserAPIResponseType>({
          userId: '11111',
          username: '太郎',
          sessionId: '03459uyg40wtecmfx0934mctx2u4t8cut0w4et',
          fridgeExists: false,
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
