import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === 'MODULE_NOT_FOUND' &&
          /@rollup\/rollup-linux/.test(warning.message)
        ) {
          return; // ignore Rollup native binary warnings
        }
        warn(warning);
      },
    },
  },
  server: {
    host: true, // expose dev server in Docker
  },
});
