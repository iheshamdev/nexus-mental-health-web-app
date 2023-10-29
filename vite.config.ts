import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nexus-mental-health-web-app/',
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@utilities': '/src/utilities',
      '@hooks': '/src/hooks',
      '@assets': '/src/assets',
      '@styles': '/src/styles/',
    },
  },
});
