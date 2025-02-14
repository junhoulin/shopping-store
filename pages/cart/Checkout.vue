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
                <input type="radio" name="country_type1" id="country_type1" />
                <label for="country_type1">台灣本島</label>
              </div>
              <div class="info_option">
                <input type="radio" name="country_type2" id="country_type2" />
                <label for="country_type2">台灣離島</label>
              </div>
              <div class="info_option">
                <input type="radio" name="country_type3" id="country_type3" />
                <label for="country_type3">外島</label>
              </div>
            </div>
          </div>
          <div class="checkout_box featured_address">
            <div class="title">運送方式</div>
            <div class="checkout_info">
              <div class="info_option">
                <input type="radio" name="store_type1" id="store_type1" />
                <label for="store_type1">全家超商取貨(3-7個工作天)</label>
              </div>
              <div class="info_option">
                <input type="radio" name="store_type2" id="store_type2" />
                <label for="store_type2">7-11超商取貨(3-7個工作天)</label>
              </div>
              <div class="info_option">
                <input type="radio" name="store_type3" id="store_type3" />
                <label for="store_type3">宅配(2-3個工作天)</label>
              </div>
            </div>
          </div>
          <div class="checkout_box featured_user">
            <div class="title">訂購資料</div>
            <div class="checkout_info">
              <div class="info_option">
                <input type="radio" name="user_type1" id="user_type1" />
                <label for="user_type1">填寫收件人</label>
              </div>
              <div class="info_input">
                <label for="username" class="info_option_label">姓名 </label>
                <input type="text" name="username" id="username" />
                <label for="usermail" class="info_option_label">E-mail</label>
                <input type="text" name="usermail" id="usermail" />
                <label for="userphone" class="info_option_label"
                  >行動電話</label
                >
                <input type="text" name="userphone" id="userphone" />
                <p>收件地址</p>
                <a href="">請選擇門市</a>
                <label for="useraddress" class="info_option_label"
                  >住家地址</label
                >
                <input type="text" name="username" id="useraddress" />
              </div>
            </div>
          </div>
        </div>
        <div class="checkout_right">
          <div class="checkout_box featured_pay">
            <div class="title">付款方式</div>
            <div class="checkout_info">
              <div class="info_option">
                <input type="radio" name="pay_type1" id="pay_type1" />
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
                <input type="radio" name="pay_type2" id="pay_type2" />
                <label for="pay_type2">超商取貨付款</label>
              </div>
              <div class="info_option">
                <input type="radio" name="pay_type3" id="pay_type3" />
                <img
                  src="https://cdn-plain-me.fonlego.com//images/shopcart/linepay2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="checkout_box featured_bill">
            <div class="title">發票方式</div>
            <div class="checkout_info">
              <div class="info_input">
                <label for="paytool" class="info_option_label">使用載具</label>
                <input type="text" name="paytool" id="paytool" />
              </div>
            </div>
          </div>
          <div class="checkout_box featured_shop">
            <div class="title">訂購商品</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom_info">
          <div class="bottom_info_item">
            <p>商品金額</p>
            <span>$2000</span>
          </div>
          <div class="bottom_info_item">
            <p>優惠折扣</p>
            <span>-$30</span>
          </div>
          <div class="bottom_info_item">
            <p>運輸費用</p>
            <span>+$60</span>
          </div>
        </div>
        <div class="bottom_total">
          <p>結帳總金額</p>
          <span>NT$2060</span>
        </div>
      </div>
      <div class="finalbottom">
        <button>送出訂單</button>
      </div>
    </div>
  </div>
  <GlobalFooter />
</template>

<script setup>
definePageMeta({
  middleware: "user-login",
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
}
</style>
