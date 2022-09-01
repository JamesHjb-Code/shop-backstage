import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    // 当使用文件系统路径的别名时，请始终使用绝对路径
    alias:{
      "~":path.resolve(__dirname,"src")
    }
  },
  plugins: [vue()]
})
