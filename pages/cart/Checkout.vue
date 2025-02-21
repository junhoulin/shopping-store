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
    <div class="checkout animate__animated animate__fadeIn">
      <div class="top">
        <h2>填寫寄送資料</h2>
        <nuxt-link to="javascript:history.back()"
          ><Icon icon="mdi:shop-edit-outline" width="24" height="24"
        /></nuxt-link>
      </div>
      <div class="checkout_featured">
        <div class="checkout_left">
          <div class="checkout_box featured_area">
            <div class="title">寄送地區</div>
            <div class="checkout_info">
              <div class="info_option">
                <input
                  type="radio"
                  name="country_type"
                  id="country_type1"
                  v-model="selectedArea"
                  value="台灣本島"
                />
                <label for="country_type1">台灣本島</label>
              </div>
              <div class="info_option">
                <input
                  type="radio"
                  name="country_type"
                  id="country_type2"
                  v-model="selectedArea"
                  value="台灣離島"
                />
                <label for="country_type2">台灣離島</label>
              </div>
              <div class="info_option">
                <input
                  type="radio"
                  name="country_type"
                  id="country_type3"
                  v-model="selectedArea"
                  value="外島"
                />
                <label for="country_type3">外島</label>
              </div>
              <p>已選擇運送地區：{{ selectedArea }}</p>
            </div>
          </div>
          <div class="checkout_box featured_address">
            <div class="title">運送方式</div>
            <div class="checkout_info">
              <div class="info_option">
                <input
                  type="radio"
                  name="store_type"
                  id="store_type1"
                  v-model="selectedShipping"
                  value="全家超商"
                />
                <label for="store_type1">全家超商取貨(3-7個工作天)</label>
              </div>
              <div class="info_option">
                <input
                  type="radio"
                  name="store_type"
                  id="store_type2"
                  v-model="selectedShipping"
                  value="7-11超商"
                />
                <label for="store_type2">7-11超商取貨(3-7個工作天)</label>
              </div>
              <div class="info_option">
                <input
                  type="radio"
                  name="store_type"
                  id="store_type3"
                  v-model="selectedShipping"
                  value="宅配"
                />
                <label for="store_type3">宅配(2-3個工作天)</label>
              </div>
              <p>已選擇運送方式：{{ selectedShipping }}</p>
            </div>
          </div>
          <div class="checkout_box featured_user">
            <div class="title">訂購資料</div>
            <div class="checkout_info">
              <div class="info_input">
                <label for="username" class="info_option_label">姓名 </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  v-model="userinfo.name"
                />
                <label for="usermail" class="info_option_label">E-mail</label>
                <input
                  type="text"
                  name="usermail"
                  id="usermail"
                  v-model="userinfo.email"
                />
                <label for="userphone" class="info_option_label"
                  >行動電話</label
                >
                <input
                  type="text"
                  name="userphone"
                  id="userphone"
                  v-model="userinfo.phone"
                />
                <p>收件地址</p>
                <a
                  href="https://emap.presco.com.tw/c2cemap.ashx?eshopid=870&&servicetype=1&url=http://localhost:3000/cart/checkout"
                  >請選擇門市</a
                >
                <label for="useraddress" class="info_option_label"
                  >住家地址</label
                >
                <input
                  type="text"
                  name="username"
                  id="useraddress"
                  v-model="userinfo.address"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="checkout_right">
          <div class="checkout_box featured_pay">
            <div class="title">付款方式</div>
            <div class="checkout_info">
              <div class="info_option">
                <input
                  type="radio"
                  name="pay_type"
                  id="pay_type1"
                  value="信用卡一次付清"
                  v-model="selectPay"
                />
                <label for="pay_type1">信用卡一次付清</label>
                <img
                  src="https://cdn-plain-me.fonlego.com//images/shopcart/credit_card.jpg"
                  alt=""
                  style="width: 30px"
                />
                <img
                  src="https://cdn-plain-me.fonlego.com//images/shopcart/credit_card_mastercard.jpg"
                  alt=""
                  style="width: 30px"
                />
              </div>
              <div class="info_option">
                <input
                  type="radio"
                  name="pay_type"
                  id="pay_type2"
                  value="超商取貨付款"
                  v-model="selectPay"
                />
                <label for="pay_type2">超商取貨付款(未開放)</label>
              </div>
              <div class="info_option">
                <input
                  type="radio"
                  name="pay_type"
                  id="pay_type3"
                  value="linepay"
                  v-model="selectPay"
                />
                <img
                  src="https://cdn-plain-me.fonlego.com//images/shopcart/linepay2.jpg"
                  alt=""
                />
                <label for="pay_type3">(未開放)</label>
              </div>
            </div>
          </div>
          <div class="checkout_box featured_bill">
            <div class="title">發票方式</div>
            <div class="checkout_info">
              <div class="info_input">
                <label for="paytool" class="info_option_label">使用載具</label>
                <input type="text" name="paytool" id="paytool" v-model="bill" />
              </div>
            </div>
          </div>
          <div class="checkout_box featured_shop">
            <div class="title">訂購商品</div>
            <div class="shopping-cart-product">
              <table>
                <thead>
                  <tr>
                    <th>圖片</th>
                    <th>名稱</th>
                    <th>顏色/尺寸</th>
                    <th>價格</th>
                    <th>數量</th>
                    <th>總價</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in userCart" :key="index">
                    <td>
                      <img :src="item.imageUrl" alt="" />
                    </td>
                    <td>{{ item.productName }}</td>
                    <td>{{ item.color }}<br />{{ item.size }}</td>
                    <td>
                      <span class="originprice">${{ item.price }}</span>
                      <br />${{ item.discountPrice }}
                    </td>
                    <td>{{ item.quantity }}</td>
                    <td>${{ item.discountTotal || item.total }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom_info">
          <div class="bottom_info_item">
            <p>商品金額</p>
            <span>${{ totalPrice }}</span>
          </div>
          <div class="bottom_info_item">
            <p>優惠折扣</p>
            <span>-${{ couponDiscount }}</span>
          </div>
          <div class="bottom_info_item">
            <p>運輸費用</p>
            <span>+${{ ShipCost }}</span>
          </div>
        </div>
        <div class="bottom_total">
          <p>結帳總金額</p>
          <span>NT${{ finalPrice }}</span>
        </div>
      </div>
      <div class="finalbottom">
        <button @click="creatOrder">送出訂單</button>
      </div>
    </div>
  </div>
  <GlobalFooter />
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const userCookie = useCookie("auth");
const isLoading = ref(false);
const selectedArea = ref("");
const selectPay = ref("");
const selectedShipping = ref("");
const ShipCost = ref(0);
const userinfo = ref({
  name: "",
  email: "",
  phone: "",
  address: "",
});
const bill = ref("");

const userCart = ref([]);
const totalPrice = ref(0);
const finalPrice = ref(0);

const coupon = ref({ name: "YUSHIN", money: 30 });
const discount = ref(0.1);
const couponDiscount = ref(0);

const getuserInfo = async () => {
  try {
    const config = useRuntimeConfig();
    const res = await $fetch("/user/info", {
      baseURL: config.public.apiBase,
      method: "get",
      headers: {
        Authorization: userCookie.value,
      },
    });
    userinfo.value = res.userInfo;
  } catch (error) {
    console.log(error);
  }
};

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
      totalPrice.value = parseFloat(
        res.cart[0].totalPrice * (1 - discount.value)
      );
      finalPrice.value = totalPrice.value;
    } else {
      userCart.value = res.cart[0].cartList;
      totalPrice.value = parseFloat(res.cart[0].totalPrice);
      finalPrice.value = totalPrice.value;
    }
    isLoading.value = false;
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
};

const comfirmcoupon = () => {
  if (route.query.coupon) {
    if (coupon.value.name === route.query.coupon) {
      finalPrice.value = totalPrice.value - coupon.value.money;
      couponDiscount.value = coupon.value.money;
    }
  }
};

watch(selectedShipping, (newShipping) => {
  // 根據選擇的運送方式設定運費
  if (newShipping === "全家超商") {
    ShipCost.value = 50;
  } else if (newShipping === "7-11超商") {
    ShipCost.value = 60;
  } else if (newShipping === "宅配") {
    ShipCost.value = 100;
  } else {
    ShipCost.value = 0; // 如果沒有選擇，清空運送費用
  }

  // 根據優惠券重新計算價格
  if (route.query.coupon) {
    if (coupon.value.name === route.query.coupon) {
      finalPrice.value = totalPrice.value - coupon.value.money + ShipCost.value;
      couponDiscount.value = coupon.value.money;
    } else {
      finalPrice.value = totalPrice.value + ShipCost.value;
    }
  } else {
    finalPrice.value = totalPrice.value + ShipCost.value;
  }
});

const creatOrder = async () => {
  if (!selectedArea.value) {
    showAlert("請勾選寄送地區", "info");
    return;
  }
  if (!selectedShipping.value) {
    showAlert("請勾選寄送方式", "info");
    return;
  }
  if (!selectPay.value) {
    showAlert("請勾選付款方式", "info");
    return;
  }
  if (["超商取貨付款", "linepay"].includes(selectPay.value)) {
    showAlert("此付款方式未開放", "info");
    return;
  }

  const orderInfo = {
    recipient: {
      name: userinfo.value.name,
      mail: userinfo.value.email,
      phone: userinfo.value.phone,
      address: userinfo.value.address,
    },
    ShippingArea: selectedArea.value,
    ShippingType: selectedShipping.value,
    supermarket: "",
    payType: selectPay.value,
    billType: "電子發票",
    bill: "",
    finalPrice: finalPrice.value,
  };

  try {
    const config = useRuntimeConfig();
    let lastOrder = {};
    // 1. 建立訂單
    const orderResponse = await $fetch("/order/addorder", {
      method: "POST",
      baseURL: config.public.apiBase,
      headers: {
        Authorization: userCookie.value,
      },
      body: { ...orderInfo },
    });

    if (!orderResponse) {
      showAlert("訂單建立失敗，請稍後再試", "error");
      return;
    } else {
      lastOrder =
        orderResponse.order.orderList[orderResponse.order.orderList.length - 1];
      console.log(lastOrder);
      showAlert("訂單建立成功", "success");
    }

    const paymentResponse = await $fetch("https://test.yushinshop.com/", {
      method: "POST",
      body: {
        totalAmount: finalPrice.value,
        itemName: "YUSHIN潮流服飾",
        id: lastOrder._id,
      },
    });
    if (!paymentResponse || typeof paymentResponse !== "string") {
      showAlert("無法獲取支付頁面，請稍後再試", "error");
      return;
    }

    // 3. 建立一個 div 來插入 HTML 並自動執行
    const paymentContainer = document.createElement("div");
    paymentContainer.innerHTML = paymentResponse;
    document.body.appendChild(paymentContainer);

    // 4. 手動提交表單
    const paymentForm = paymentContainer.querySelector("form");
    if (paymentForm) {
      paymentForm.submit();
    } else {
      showAlert("支付表單錯誤，請稍後再試", "error");
    }
  } catch (error) {
    console.error("創建訂單時發生錯誤：", error);
    showAlert("系統發生錯誤，請稍後再試", "error");
  }
};

onMounted(async () => {
  await getuserInfo();
  await getCart();
  comfirmcoupon();
});
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.top {
  display: flex;
  align-items: center;
  margin: 30px 0 20px;
  gap: 5px;
  h2 {
    font-weight: $weight-500;
    font-size: $fs-3;
  }
  a {
    color: $eerie-black;
    padding-top: 6px;
    transition: $transition-timing;
    &:hover {
      color: $bittersweet;
    }
  }
}

.checkout_featured {
  display: flex;
  flex-wrap: wrap;
  .checkout_left {
    width: 100%;
    padding: 10px;
  }
  .checkout_right {
    width: 100%;
    padding: 10px;
  }
}

.title {
  align-items: center;
  line-height: 45px;
  padding: 0 10px;
  border-bottom: $davys-gray 2px solid;
  background: $cultured;
  color: $onyx;
  font-size: $fs-5;
}

.checkout_box {
  margin-bottom: 20px;
}

.checkout_info {
  padding: 20px 20px;
  appearance: none; /* 移除預設樣式 */
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: $fs-7;
  .info_option {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .info_input {
    display: flex;
    flex-direction: column;
    gap: 3px;
    p {
      font-size: $fs-7;
      margin: 6px 0px;
    }
    a {
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
  input[type="text"] {
    width: 100%;
  }
  input[type="radio"] {
    appearance: none;
    width: 14px;
    height: 14px;
    border: 2px solid $eerie-black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  }
  input[type="radio"]:checked::before {
    content: "";
    width: 8px;
    height: 8px;
    background-color: $davys-gray; /* 選中後的顏色 */
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.featured_user input {
  padding: 3px 10px;
  border-radius: 8px;
  border: 1px $eerie-black solid;
  font-size: $fs-7;
}

.bottom {
  font-size: $fs-7;
  border: $davys-gray 1px solid;
  border-radius: 6px;
  padding: 30px 10px;
  .bottom_info_item {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  .bottom_total {
    color: $bittersweet;
    border-top: $davys-gray 1px solid;
    padding-top: 10px;
    display: flex;
    display: flex;
    justify-content: space-around;
  }
}

.finalbottom button {
  margin: 20px auto;
  width: 90%;
  background: $davys-gray;
  color: $cultured;
  padding: 16px 8px;
  border-radius: $border-radius-sm;
  transition: $transition-timing;
  &:hover {
    background: $salmon-pink;
  }
}

.shopping-cart-product {
  margin-top: 20px;
  width: 100%;
  max-height: 400px; /* 固定最大高度，超出時顯示滾動條 */
  overflow-y: auto; /* 允許垂直滾動 */
  font-size: $fs-10;
}

.shopping-cart-product table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* 固定表格欄位寬度 */
}

.shopping-cart-product th,
.shopping-cart-product td {
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
  word-wrap: break-word;
  white-space: normal; /* 讓內容換行 */
}

.shopping-cart-product img {
  max-width: 40px; /* 限制圖片大小 */
  height: auto;
  margin: auto;
}

.originprice {
  color: $davys-gray;
  text-decoration: line-through;
  text-decoration-color: $davys-gray;
}

@media (min-width: 720px) {
  .checkout_featured {
    .checkout_left {
      width: 50%;
      padding: 20px;
    }
    .checkout_right {
      width: 50%;
      padding: 20px;
    }
  }
  .checkout_info {
    .info_input {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .bottom {
    width: 80%;
    margin: 0 auto;
  }
  .finalbottom button {
    width: 40%;
  }

  .shopping-cart-product img {
    max-width: 60px; /* 限制圖片大小 */
    height: auto;
    margin: auto;
  }
}
</style>
