module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
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
  plugins: ['import'],
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
    // テンプレートリテラル内に入れられる値を文字列と数値以外も許可する
    '@typescript-eslint/restrict-template-expressions': 'off',
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
