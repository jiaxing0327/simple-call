import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';

import { resolve } from 'path';

import postCssPxToRem from "postcss-pxtorem"
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '/@': pathResolve('src') // 把src改为/@
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  }
})
