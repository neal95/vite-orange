const useThemeState = defineStore('themeState', {
  state: () => ({
    language: (localStorage.getItem('language') as string) || 'zhCn',
  }),
  getters: {},
  actions: {
    changeLanguage(value: string) {
      localStorage.setItem('language', value);
      this.language = value;
    },
  },
});

export default useThemeState;
