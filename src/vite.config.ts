// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    open: false,
    host: true,
    port: 3000,
  },
  build: {
    outDir: 'build', // ビルドの出力先ディレクトリ
  },
  plugins: [react(), tsconfigPaths()],
});
