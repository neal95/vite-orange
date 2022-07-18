import { resolve } from 'path';
import { ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import { VitePWA } from 'vite-plugin-pwa';

export default (env: ConfigEnv) => {
  return [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    // 自动导入 Vite、Webpack、Rollup 和 esbuild 的 API
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/store'],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),

    // Vue 的按需组件自动导入
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/components.d.ts',
      extensions: ['vue', 'md'],
      dirs: ['src/components/', 'src/views/'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          // 默认情况下，前缀设置为i，这里修改为 icon
          // {prefix}-{collection}-{icon}
          prefix: 'icon',
        }),
      ],
    }),

    // 按需组件自动导入图标作为组件
    // https://github.com/antfu/unplugin-icons
    // https://icones.js.org/ 浏览图标
    Icons({ compiler: 'vue3' }),

    // Vue I18n 的 Vite 插件
    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      include: [resolve(__dirname, '../locales/**')],
    }),

    // PWA(渐进式 Web 应用程序) 框架插件
    // https://github. com/antfu/vite-plugin-pwa
    VitePWA(),
  ];
};
