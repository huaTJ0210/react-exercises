import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 使用node.js 需要添加 npm i @types/node -D
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
