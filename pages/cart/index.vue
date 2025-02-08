<template>
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
              <th>顏色</th>
              <th>價格</th>
              <th>數量</th>
              <th>總價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in userCart" :key="index">
              <td>
                <button @click="deleteCart(item.productId, item.color)">
                  <Icon icon="tabler:trash" />
                </button>
              </td>
              <td>
                <img src="~public/images/products/jacket-1.jpg" alt="" />
              </td>
              <td>{{ item.productName }}</td>
              <td>{{ item.color }}</td>
              <td>
                <span class="originprice">${{ item.price }}</span>
                <br />${{ item.discountPrice }}
              </td>
              <td>
                <input :value="item.quantity" type="number" min="1" />
              </td>
              <td>${{ item.discountTotal || item.total }}</td>
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

<script setup>
definePageMeta({
  middleware: "user-login",
});
const isLoading = ref(false);
const discount = ref(0.1);
const userCookie = useCookie("auth");
const userCart = ref([]);
const getCart = async () => {
  isLoading.value = true;
  try {
    const config = useRuntimeConfig();
    const res = await $fetch("/cart/cartlist", {
      baseURL: config.public.apiBase,
      headers: {
        Authorization: userCookie.value,
      },
    });
    if (discount) {
      userCart.value = res.cart[0].cartList.map((item) => {
        const discountPrice = (item.price * (1 - discount.value)).toFixed(0);
        const discountTotal = discountPrice * item.quantity;
        return {
          ...item,
          discountPrice: discountPrice,
          discountTotal: discountTotal,
        };
      });
    } else {
      userCart.value = res.cart[0].cartList;
    }
    isLoading.value = false;
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
};

const deleteCart = async (id, color) => {
  isLoading.value = true;
  try {
    const config = useRuntimeConfig();
    const res = await $fetch("/cart/deletecart", {
      baseURL: config.public.apiBase,
      method: "delete",
      headers: {
        Authorization: userCookie.value,
      },
      body: {
        productId: id,
        color: color,
      },
    });
    console.log(res);
    await getCart();
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    console.log(error);
  }
};

onMounted(() => {
  getCart();
});
</script>

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

td input {
  display: block;
  width: 50px;
  margin: 0 auto;
  text-align: center;
}

.originprice {
  color: $davys-gray;
  text-decoration: line-through;
  text-decoration-color: $davys-gray;
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
