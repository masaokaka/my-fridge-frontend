export const validationRules = {
  username: {
    required: {
      value: true,
      message: '入力は必須です。',
    },
    max: { value: 24, message: '24文字以内で入力してください。' },
  },
  password: {
    required: {
      value: true,
      message: '入力は必須です。',
    },
  },
};
