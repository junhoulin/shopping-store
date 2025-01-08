<template>
  <GlobalHeader />
  <div class="container">
    <div class="search-flex animate__animated animate__fadeIn">
      <div class="search-top">
        <p>搜尋 Iouiou 的結果,共搜尋到29筆資料</p>
        <div class="seach-category">
          <select name="" id="">
            <option value="" disabled selected>排序方法</option>
            <option value="1">價格由高至低</option>
            <option value="2">價格由低至高</option>
            <option value="3">活動特賣中</option>
            <option value="4">特別活動限定</option>
          </select>
        </div>
      </div>
      <div class="search-product">
        <ProductSearch />
      </div>
    </div>
  </div>
  <GlobalFooter />
</template>

<script setup></script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.search-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  .search-top {
    color: $sonic-silver;
    font-size: $fs-9;
    font-weight: $weight-600;
  }
  .seach-category {
    margin: 10px 0;
    select {
      min-width: 80px;
      padding: 3px 0;
      font: inherit;
      color: $sonic-silver;
      text-transform: uppercase;
      cursor: pointer;
      transition: $transition-timing;
      &:hover {
        color: $eerie-black;
      }
    }
  }
  .search-product {
    margin: 20px 0 50px;
  }
}
</style>
