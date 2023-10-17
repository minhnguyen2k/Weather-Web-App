import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      overlay: {
        badgeStyle: 'display: none',
        panelStyle: 'height:100vh;top:0px;bottom:0px;max-height:100%',
      },
    }),
  ],
  server: {
    open: true,
    host: true,
  },
});
