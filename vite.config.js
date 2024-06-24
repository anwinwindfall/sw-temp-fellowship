import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'vite-plugin-sass';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  plugins: [react()],
  css: {
      preprocessorOptions: {
          scss: {
              additionalData: '@import "./src/styles/mixins.scss";',
          },
      },
  },
});