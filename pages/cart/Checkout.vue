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
                <input type="radio" name="country_type1" id="country_type1" />
                <label for="country_type1">全家超商取貨(3-7個工作天)</label>
              </div>
              <div class="info_option">
                <input type="radio" name="country_type2" id="country_type2" />
                <label for="country_type2">7-11超商取貨(3-7個工作天)</label>
              </div>
              <div class="info_option">
                <input type="radio" name="country_type3" id="country_type3" />
                <label for="country_type3">宅配(2-3個工作天)</label>
              </div>
            </div>
          </div>
          <div class="checkout_box featured_address">
            <div class="title">訂購資料</div>
            <div class="checkout_info">
              <div class="info_option">
                <input type="radio" name="country_type1" id="country_type1" />
                <label for="country_type1">填寫收件人</label>
              </div>
              <div class="info_input">
                <label for="username" class="info_option_label">姓名</label>
                <input type="text" name="username" id="username" />
              </div>
            </div>
          </div>
        </div>
        <div class="checkout_right">qwe</div>
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
    align-items: flex-start;
    gap: 3px;
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
      flex-direction: row;
      align-items: center;
    }
  }
}
</style>
