export type LoginFormValueType = {
  username: string;
  password: string;
};

export type LoginAPIParamType = {
  username: string;
  password: string;
};

export type LoginAPIResponseType = {
  fridgeExists: boolean;
  sessionId: string;
  userId: string;
  username: string;
};
