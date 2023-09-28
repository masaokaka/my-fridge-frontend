// 環境変数の型定義を行うファイル
interface ImportMetaEnv {
  readonly MODE: 'development' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
