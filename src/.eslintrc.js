module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier', // 他の設定を上書くために最後に入れる
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // react ver17からimport Reactしなくても良くなったのでoff
    'react/react-in-jsx-scope': 'off',
    // export default推奨をoff
    'import/prefer-default-export': 'off',
    // reducerのstateに代入する処理で凛とエラーが起きてしまうため無効化
    'no-param-reassign': 'off',
    // 一行に一つのコードのルールを無効化
    'react/jsx-one-expression-per-line': 0,
    // import/export を拡張子の記載なしでも可能にする
    'import/prefer-default-export': 'off',
    // シングルクオートをデフォルトにする
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    // 使われていない変数にエラーを出す
    '@typescript-eslint/no-unused-vars': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
