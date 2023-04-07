// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    outDir: 'build', // ビルドの出力先ディレクトリ
  },
  plugins: [react(), tsconfigPaths()],
});
