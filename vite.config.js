import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
  server: {
    proxy: {
      // Proxy requests to your Express.js server running at http://localhost:3000
      '/*': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        // Allow WebSocket connections
        ws: true,
      },
    },
  },
});
