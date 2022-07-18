<script setup lang="ts">
const { t, availableLocales, locale } = useI18n();

const toggleLocales = () => {
  const locales = availableLocales;
  console.log(locales);
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<template>
  <div class="text-center">
    <div :content="t('change lang')" placement="top">
      <button class="icon-btn mx-2" @click="toggleLocales()">
        <icon-fa6Solid-Language class="icon-footer" />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.icon-footer {
  font-size: 1.4em;
}
</style>
