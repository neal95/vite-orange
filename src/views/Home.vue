<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="container max-w-3xl mx-auto mt-40">
    <div class="text-center text-md">
      <h1 class="font-serif font-bold text-4xl mb-8">{{ t('hello') }} , {{ t('welcome to') }} Vitecamp</h1>
      <p class="mb-10">
        <strong>Vitecamp</strong>
        {{ t('includes features') }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
