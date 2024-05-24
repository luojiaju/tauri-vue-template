import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite"; // 引入插件
import { fileURLToPath, URL } from "node:url";
import tailwindcss from "tailwindcss"
import autoprefixer from 'autoprefixer';
import { process } from '@tauri-apps/api';


// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode,"./");
  return {
    plugins: [
      vue(),
      AutoImport({
        dts: "types/auto-imports.d.ts", // 这里是生成的global函数文件
        imports: ["vue", "vue-router", "pinia"], // 需要自动导入的插件
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        // 解决eslint报错问题
        eslintrc: {
          // 这里先设置成true然后npm run dev 运行之后会生成 .eslintrc-auto-import.json 文件之后，在改为false
          enabled: false,
          filepath: './.eslintrc-auto-import.json', // 生成的文件路径
          globalsPropValue: true,
        },
        // 声明文件生成位置和文件名称
      }),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      }
    },

    // 路径别名
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },

    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    //
    // 1. prevent vite from obscuring rust errors
    clearScreen: false,
    // 2. tauri expects a fixed port, fail if that port is not available
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_APP_PORT),
      strictPort: true,
      watch: {
        // 3. tell vite to ignore watching `src-tauri`
        ignored: ["**/src-tauri/**"],
      },
      proxy: {
          [env.VITE_APP_BASE_API]: {
          target: "http://localhost:8080",
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
          ws: true,
        },
      },
    },
  }

});
