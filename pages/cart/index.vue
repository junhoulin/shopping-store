<template>
  <GlobalHeader />
  <div class="container">
    <div class="shopping-cart animate__animated animate__fadeIn">
      <h2>購物車</h2>
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
      <div class="shopping-cart-bottom">
        <div class="shopping-cart-bottom1">
          <h2>優惠券</h2>
          <div class="shoppong-cart-coupon">
            <div class="coupon-content">
              <p>請輸入你的優惠券序號</p>
            </div>
            <div class="coupon-content-box">
              <input type="text" />
              <button>確認序號</button>
            </div>
          </div>
        </div>
        <div class="shopping-cart-bottom2">
          <h2>結帳</h2>
          <div class="shoppong-cart-total">
            <div class="total-content">
              <div class="cart-total-price">
                <p>商品金額:</p>
                <span>$440</span>
              </div>
              <div class="cart-total-price">
                <p>折扣金額:</p>
                <span>-$40</span>
              </div>
              <hr />
              <div class="cart-total-price">
                <p>折扣後金額</p>
                <span>$400</span>
              </div>
              <div class="cart-total-price">
                <p>$</p>
                <button>前往付款</button>
              </div>
            </div>
          </div>
        </div>
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
}

.shopping-cart-product {
  width: 100%;
  table {
    width: 100%;
  }
}

.shopping-cart-bottom {
  width: 100%;
}

.shoppong-cart-coupon {
  width: 100%;
  border: 1px solid $sonic-silver;
  border-radius: $border-radius-sm;
  .coupon-content {
    background: $davys-gray;
    color: $cultured;
    font-weight: $weight-700;
    font-size: $fs-8;
    padding: 10px;
  }
  .coupon-content-box {
    display: flex;
    justify-content: center;
    padding: 10px;
    gap: 10px;
  }
  input {
    width: 70%;
  }
  button {
    background: $davys-gray;
    color: $cultured;
    padding: 4px 8px;
    border-radius: $border-radius-sm;
    transition: $transition-timing;
    &:hover {
      background: $salmon-pink;
    }
  }
}

.shoppong-cart-total {
  margin-bottom: 100px;
  .cart-total-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  button {
    background: $davys-gray;
    color: $cultured;
    padding: 4px 8px;
    border-radius: $border-radius-sm;
    transition: $transition-timing;
    &:hover {
      background: $salmon-pink;
    }
  }
}

@media (min-width: 480px) {
  .shopping-cart-bottom {
    display: flex;
    gap: 40px;
    .shopping-cart-bottom1 {
      width: 50%;
    }
    .shopping-cart-bottom2 {
      width: 50%;
    }
  }
}
</style>
