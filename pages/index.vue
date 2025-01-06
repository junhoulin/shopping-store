<template>
  <Modal />
  <div class="main">
    <GlobalHeader />
    <banner />
    <category />
    <product />
  </div>
  <div class="card container">
    <div class="card01">
      <card />
    </div>
    <div class="card02">
      <CardCard01 />
    </div>
  </div>
  <CardService />
  <CardBlog />
  <GlobalFooter />
</template>

<script setup></script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;
@media (min-width: 1024px) {
  .card {
    display: flex;
    align-items: center;
    .card01 {
      width: 50%;
    }
    .card02 {
      width: 50%;
    }
  }
}
</style>
