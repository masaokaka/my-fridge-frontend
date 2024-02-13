export const validationRules = {
  username: {
    required: {
      value: true,
      message: '入力は必須です。',
    },
    max: { value: 24, message: '24文字以内で入力してください。' },
  },
  email: {
    required: {
      value: true,
      message: '入力は必須です。',
    },
    pattern: {
      value:
        /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
      message: '正しい形式で入力してください。',
    },
  },
  password: {
    required: {
      value: true,
      message: '入力は必須です。',
    },
    pattern: {
      value: /^[a-zA-Z0-9]{8,}$/,
      message:
        '8文字以上、大文字、小文字、数字の組み合わせで入力してください。',
    },
  },
};
