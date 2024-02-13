import { accountHandlers } from './account';
import { loginHandlers } from './login';

export const handlers = [...accountHandlers, ...loginHandlers];
