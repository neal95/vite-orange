import { ConfigEnv } from 'vite';

export default (env: ConfigEnv) => {
  return {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse'],
    },
  };
};
