<template>
  <GlobalHeader />
  <div class="container">
    <div class="shopping-cart animate__animated animate__fadeIn">
      <h2>喜好項目</h2>
      <div class="shopping-cart-product">
        <table>
          <thead>
            <tr>
              <th>編輯</th>
              <th>圖片</th>
              <th>名稱</th>
              <th>價格</th>
              <th>數量</th>
              <th>總價</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button><Icon icon="tabler:trash" /></button>
              </td>
              <td>
                <img src="~public/images/products/jacket-1.jpg" alt="" />
              </td>
              <td>asdasadadasdsd超無敵超屌超寶款冬季最新宇宙無敵霹靂夾克</td>
              <td>$12,000</td>
              <td>
                <select name="" id="">
                  <option value="1">1</option>
                  <option value="1">2</option>
                </select>
              </td>
              <td>$96,000</td>
            </tr>
            <tr>
              <td>
                <button><Icon icon="tabler:trash" /></button>
              </td>
              <td>
                <img src="~public/images/products/jacket-1.jpg" alt="" />
              </td>
              <td>asdasadadasdsd夾克</td>
              <td>$1270</td>
              <td>
                <select name="" id="">
                  <option value="1">1</option>
                  <option value="1">2</option>
                </select>
              </td>
              <td>$240</td>
            </tr>
            <tr>
              <td>
                <button><Icon icon="tabler:trash" /></button>
              </td>
              <td>
                <img src="~public/images/products/jacket-1.jpg" alt="" />
              </td>
              <td>asdasadadasdsd夾克</td>
              <td>$120</td>
              <td>
                <select name="" id="">
                  <option value="1">1</option>
                  <option value="1">2</option>
                </select>
              </td>
              <td>$240</td>
            </tr>
          </tbody>
        </table>
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
  table {
    width: 100%;
  }
}
</style>
