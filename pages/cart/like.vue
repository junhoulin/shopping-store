<template>
  <GlobalHeader />
  <div class="container">
    <div class="shopping-cart animate__animated animate__fadeIn">
      <h2>喜好項目</h2>
      <div class="shopping-cart-product">
        <h2>此功能盡請期待XD</h2>
      </div>
    </div>
  </div>
  <GlobalFooter />
</template>

<script setup></script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

hr {
  margin: 40px 0 8px;
}

h2 {
  margin: 30px 0 10px;
  font-weight: $weight-500;
  font-size: $fs-3;
}

table {
  border-collapse: collapse;
  table-layout: auto;
  border-radius: $border-radius-sm;
  font-size: $fs-8;
}
thead {
  background: $davys-gray;
  color: $cultured;
}
th,
td {
  border: 1px solid $sonic-silver;
  text-align: center;
  min-width: 20px;
  word-wrap: break-word;
  white-space: normal;
  padding: 5px;
}
td img {
  display: block;
  margin: 0 auto;
  width: 50px;
}
td button {
  display: block;
  margin: 0 auto;
}

.shopping-cart {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 0 100px;
}

.shopping-cart-product {
  width: 100%;
  display: flex;
  justify-content: center;
  color: $bittersweet;
}
</style>
