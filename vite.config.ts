import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import presets from './presets/presets';
import vitest from './presets/vitest';

// https://vitejs.dev/config/
export default defineConfig((env) => {
  // env 环境变量
  const viteEnv = loadEnv(env.mode, process.cwd());

  return {
    base: viteEnv.VITE_BASE,

    // 插件预设 ./presets/presets.ts
    plugins: [presets(env)],

    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      host: true,
      port: 5173,
      strictPort: true,
      // open: true,
      proxy: {
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      cors: true,
      origin: 'http://127.0.0.1:5173',
    },
    assetsInclude: ['**/*.gltf'],
    build: {
      outDir: 'dist',
      assetsDir: 'static/assets',
      brotliSize: false,
      assetsInlineLimit: 0,
      // chunk 大小警告的限制  (单位：kbs） 默认 500
      chunkSizeWarningLimit: 2000,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        // 静态资源打包到dist下的不同目录
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    css: {
      preprocessorOptions: {
        // 全局引入
        scss: {
          additionalData: `
        @import "@/styles/variables.scss";
      `,
          javascriptEnabled: true,
        },
        // styl: {
        //   additionalData: '@import "@/styles/tailwind.css"',
        //   javascriptEnabled: true,
        // },
      },
    },

    // vitest 由 Vite 提供支持的极速单元测试框架
    // https://github.com/vitest-dev/vitest
    test: vitest(env),
  };
});
