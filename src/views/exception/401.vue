<script lang="ts" setup>
const router = useRouter();
const goBack = () => {
  router.push({
    name: 'home',
  });
};
</script>

<template>
  <button @click="goBack">Back</button>
</template>

<style lang="scss" scoped></style>
