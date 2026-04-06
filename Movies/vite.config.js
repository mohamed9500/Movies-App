import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // مهم للنشر على Vercel أو GitHub Pages
  build: {
    outDir: 'dist',
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
