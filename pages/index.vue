<template>
  <Modal />
  <div class="main">
    <GlobalHeader />
    <ClientOnly>
      <loading v-model:active="isLoading">
        <div class="loadingio-spinner-dual-ring-nq4q5u6dq7r">
          <div class="ldio-x2uulkbinbj">
            <div></div>
            <div><div></div></div>
          </div>
        </div>
      </loading>
    </ClientOnly>
    <banner />
    <category />
    <product />
  </div>
  <GlobalFooter />
</template>

<script setup>
const isLoading = ref(false);
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;
</style>
