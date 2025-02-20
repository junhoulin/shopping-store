<template>
  <GlobalHeader />
  <div class="container animate__animated animate__fadeIn">
    <div class="user-flex">
      <h2>會員專區</h2>
      <!-- 資料導覽列 -->
      <div class="user-menu">
        <ul class="user-menu-ul">
          <li class="user-menu-li" @click="changeActive('basic')">
            <a class="menu-ul-title" :class="{ active: activeMenu === 'basic' }"
              >基本資料</a
            >
          </li>
          <li class="user-menu-li" @click="changeActive('order')">
            <a class="menu-ul-title" :class="{ active: activeMenu === 'order' }"
              >歷史訂單</a
            >
          </li>
          <li class="user-menu-li" @click="changeActive('password')">
            <a
              class="menu-ul-title"
              :class="{ active: activeMenu === 'password' }"
              >修改密碼</a
            >
          </li>
        </ul>
      </div>
      <!-- 資料顯示區域 -->
      <div class="user-data" v-show="activeMenu === 'basic'">
        <div class="title">
          <h3>基本資料</h3>
          <button>
            <Icon
              icon="line-md:edit-full-twotone"
              @click="showAlert"
              width="24"
              height="24"
            />
          </button>
          <button>
            <Icon
              icon="material-symbols:login"
              @click="loginOut"
              width="24"
              height="24"
            />
          </button>
        </div>
        <div class="user-info">
          <ul>
            <li><strong>帳號:</strong> {{ userinfo.email }}</li>
            <li><strong>姓名:</strong> {{ userinfo.name }}</li>
            <li><strong>電話:</strong> {{ userinfo.phone }}</li>
            <li><strong>地址:</strong> {{ userinfo.address }}</li>
            <li><strong>生日:</strong> {{ userinfo.birthday }}</li>
            <li><strong>等級:</strong> 一般會員</li>
            <li><strong>累積:</strong> 已消費NT $0</li>
            <li>差 <strong>NT $10000</strong> 可提升會員等級</li>
          </ul>
        </div>
      </div>

      <div class="user-order" v-show="activeMenu === 'order'">
        <div class="title">
          <h3>歷史訂單</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>訂單內容</th>
              <th>總價</th>
              <th>付款狀態</th>
              <th>出貨狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in userorder" :key="index">
              <td>{{ item._id }}</td>
              <td>
                <ul>
                  <li v-for="(cart, index) in item.cartList" :key="index">
                    {{ cart.productName }}({{ cart.color }}) ${{
                      (cart.price * (1 - discount)).toFixed(0)
                    }}*
                    {{ cart.quantity }}
                  </li>
                </ul>
              </td>
              <td>{{ item.totalPrice }}</td>
              <td v-if="item.payFinal">已付款</td>
              <td v-else="item.payFinal" style="color: brown">未付款</td>
              <td v-if="item.isShip">已出貨</td>
              <td v-else="item.isShip" style="color: brown">未出貨</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="user-password" v-show="activeMenu === 'password'">
        <div class="title">
          <h3>修改密碼</h3>
        </div>
        <div class="input-box">
          <input
            type="text"
            class="search-field"
            placeholder="請輸入密碼"
            required
          />
          <button class="acount-btn">
            <Icon icon="mdi:account-outline" />
          </button>
        </div>
        <div class="input-box">
          <input
            type="password"
            class="search-field"
            placeholder="請輸入新密碼"
            required
          />
          <button class="acount-btn">
            <Icon icon="mdi:password-outline" />
          </button>
        </div>
        <div class="input-box">
          <input
            type="password"
            class="search-field"
            placeholder="請輸入新密碼"
            required
          />
          <button class="acount-btn">
            <Icon icon="mdi:password-outline" />
          </button>
        </div>
        <button class="change-password-btn">確認修改</button>
      </div>
    </div>
  </div>
  <GlobalFooter />
</template>

<script setup>
definePageMeta({
  middleware: "user-login",
});
const discount = ref(0.1);
const userorder = ref({});
const userinfo = ref({});
const router = useRouter();
const activeMenu = ref("basic");
const changeActive = (statue) => {
  activeMenu.value = statue;
};

const userCookie = useCookie("auth", {
  path: "/",
});

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

const getOrder = async () => {
  try {
    const config = useRuntimeConfig();
    const res = await $fetch("/order/getorder", {
      baseURL: config.public.apiBase,
      method: "post",
      headers: {
        Authorization: userCookie.value,
      },
    });
    userorder.value = res.order[0].orderList;
    console.log(userorder.value);
  } catch (error) {
    console.log(error);
  }
};

const loginOut = () => {
  userCookie.value = "";
  router.push("/user/login");
  showAlert("登出成功", "success");
};

onMounted(() => {
  getuserInfo();
  getOrder();
});
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

h2 {
  font-size: $fs-3;
  margin: 30px auto;
}

table {
  border-collapse: collapse;
  table-layout: auto;
  border-radius: $border-radius-sm;
  width: 100%;
}
thead {
  background: $davys-gray;
  color: $cultured;
}
th,
td {
  font-size: $fs-8;
  border: 1px solid $sonic-silver;
  text-align: center;
  min-width: 20px;
  word-wrap: break-word;
  white-space: normal;
  padding: 5px;
  max-width: 100px;
}

.container {
  width: 100%;
}
.user-flex {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  font-size: $fs-8;
  margin-bottom: 100px;
}

.user-menu {
  font-size: $fs-8;
  margin-bottom: 20px;
  .user-menu-ul {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .user-menu-li a {
    background: $eerie-black;
    color: $cultured;
    border: 1px solid $cultured;
    border-radius: $border-radius-md;
    padding: 10px 20px;
    transition: $transition-timing;
    &:hover {
      cursor: pointer;
    }
    &.active {
      background: $salmon-pink;
    }
  }
}

.user-data {
  line-height: 1.7;
  border: 1px solid $white;
  border-radius: $border-radius-md;
  background: $cultured;
  padding: 20px;
  width: 100%;
  button {
    color: hsl(0, 0%, 13%);
  }
  .user-info li {
    margin-bottom: 8px;
    color: $sonic-silver;
    color: inherit;
    text-decoration: none;
  }
  .user-info li strong {
    color: $eerie-black;
    margin-right: 10px;
  }
  .user-info li:last-child strong {
    margin-left: 10px;
  }
  .title {
    margin-bottom: 15px;
    font-weight: $weight-600;
    font-size: $fs-5;
    display: flex;
    gap: 10px;
    button {
      margin-top: 4px;
      &:hover {
        color: $bittersweet;
      }
    }
  }
}

.user-order {
  width: 100%;
}

.user-password {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid $white;
  border-radius: $border-radius-md;
  background: $cultured;
  padding: 20px;
  max-width: 400px;
  .title {
    margin-bottom: 20px;
  }
  .input-box {
    position: relative;
    margin-bottom: 20px;
    width: 100%;
    max-width: 300px;
    .search-field {
      font-size: $fs-8;
      color: $onyx;
      padding: 10px 15px;
      padding-right: 50px;
      border: 1px solid $cultured;
      border-radius: $border-radius-md;
    }
    .acount-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 2px;
      font-size: 22px;
      padding: 2px 8px;
      color: $onyx;
      border-radius: $border-radius-md;
    }
  }
  .change-password-btn {
    font-size: $fs-8;
    background: $eerie-black;
    color: $cultured;
    border-radius: $border-radius-md;
    padding: 10px 20px;
    letter-spacing: 2px;
    transition: $transition-timing;
    &:hover {
      background: $salmon-pink;
    }
  }
}

@media (min-width: 480px) {
  .user-data {
    width: 80%;
    padding: 30px 40px;
  }
}

@media (min-width: 1024px) {
  .user-data {
    width: 60%;
    padding: 40px 50px;
  }
  .user-order {
    width: 80%;
  }
}
</style>
