<script setup lang="ts">
import useThemeState from '@/store/useState';
// 动态切换暗黑模式
import { isDark, toggleDark } from '@/utils/dark';

const themeState = useThemeState();
const { t, availableLocales, locale } = useI18n();

// 动态切换语言
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  themeState.changeLanguage(locale.value);
};
</script>

<template>
  <div class="text-center">
    <div :content="t('change lang')" placement="top">
      <button class="icon-btn mx-2" @click="toggleLocales()">
        <icon-fa6Solid-Language class="icon-footer" />
      </button>
      <button class="icon-btn mx-2" @click="toggleDark()">
        <icon-iconParkSolid-brightness v-if="isDark" class="icon-footer" />
        <icon-iconParkSolid-darkMode v-else class="icon-footer" />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.icon-footer {
  font-size: 1.4em;
}
</style>
