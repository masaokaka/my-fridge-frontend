export type UserInfoType = {
  username: string;
  email: string;
  password: string;
  confirmationPassword: string;
};

export type RegisterUserAPIParamType = {
  username: string;
  email: string;
  password: string;
};

export type RegisterUserAPIResponseType = {
  fridgeExists: boolean;
  sessionId: string;
  userId: string;
  username: string;
};
