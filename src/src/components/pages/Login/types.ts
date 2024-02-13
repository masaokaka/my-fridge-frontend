export type LoginFormValueType = {
  username: string;
  password: string;
  rememberPassword: boolean;
};

export type LoginAPIParamType = {
  username: string;
  password: string;
  rememberPassword: boolean;
};

export type LoginAPIResponseType = {
  sessionId: string;
  userId: string;
  username: string;
};
