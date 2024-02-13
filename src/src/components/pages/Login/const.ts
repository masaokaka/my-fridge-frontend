import { PASSWORD_REGEX } from '../../../const';

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
    pattern: {
      value: PASSWORD_REGEX,
      message:
        '8文字以上、大文字、小文字、数字の組み合わせで入力してください。',
    },
  },
};
