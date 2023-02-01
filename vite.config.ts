import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const svgIconsConfig = {
  iconDirs: [resolve(__dirname, './src/app/assets/icons')],
};

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  plugins: [
    vue(),
    createSvgIconsPlugin(svgIconsConfig),
  ],
});
