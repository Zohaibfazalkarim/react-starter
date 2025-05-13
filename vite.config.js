import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true, // optional: so you can use `test`, `expect`, etc. globally
    setupFiles: './setupTests.js', // optional, only if you created this
  },
});
