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
    <div class="user-form animate__animated animate__fadeIn">
      <div class="login-form" v-if="loginStatue">
        <h2>登入會員</h2>
        <div class="input-box">
          <input
            type="text"
            class="search-field"
            placeholder="請輸入郵件"
            v-model="loginData.email"
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
            placeholder="請輸入密碼"
            v-model="loginData.password"
            required
          />
          <button class="acount-btn">
            <Icon icon="mdi:password-outline" />
          </button>
        </div>
        <button class="login-btn" @click="login">登入</button>
        <div class="add-fogot-link">
          <a href="#" @click.prevent="toggleStatue">加入會員</a>
          <a>|</a>
          <a href="#">忘記密碼?</a>
        </div>
        <div class="social-text">
          <p>用其他方式登入</p>
        </div>
        <div class="social-icons">
          <a href="#"><Icon icon="mingcute:google-fill" /></a>
          <a href="#"><Icon icon="bi:line" /></a>
          <a href="#"><Icon icon="ic:baseline-facebook" /></a>
          <a href="#"><Icon icon="mdi:github" /></a>
        </div>
      </div>
      <div class="register-form" v-else>
        <h2>加入會員</h2>
        <div class="input-box">
          <input
            type="text"
            class="search-field"
            placeholder="請輸入姓名"
            v-model="signupData.name"
            required
          />
          <button class="acount-btn">
            <Icon icon="mdi:account-outline" />
          </button>
        </div>
        <div class="input-box">
          <input
            type="text"
            class="search-field"
            placeholder="請輸入郵件"
            v-model="signupData.email"
            required
          />
          <button class="acount-btn">
            <Icon icon="material-symbols:account-box" />
          </button>
        </div>
        <div class="input-box">
          <input
            type="password"
            class="search-field"
            placeholder="請輸入密碼"
            v-model="signupData.password"
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
            placeholder="再一次輸入密碼"
            required
          />
          <button class="acount-btn">
            <Icon icon="mdi:password-outline" />
          </button>
        </div>
        <div class="input-box">
          <input
            type="text"
            class="search-field"
            placeholder="請輸入地址"
            v-model="signupData.address"
            required
          />
          <button class="acount-btn">
            <Icon icon="entypo:address" />
          </button>
        </div>
        <div class="input-box">
          <input
            type="date"
            class="search-field"
            placeholder="請輸入生日"
            v-model="signupData.birthday"
            required
          />
          <button class="acount-btn">
            <Icon icon="mdi:birthday-cake-outline" />
          </button>
        </div>
        <div class="input-box">
          <input
            type="text"
            class="search-field"
            placeholder="請輸入電話"
            v-model="signupData.phone"
            required
          />
          <button class="acount-btn">
            <Icon icon="line-md:phone" />
          </button>
        </div>
        <button class="register-btn" @click="signup">註冊</button>
        <div class="login-link">
          <a href="#" @click.prevent="toggleStatue"> 返回登入頁面</a>
        </div>
      </div>
    </div>
  </div>
  <GlobalFooter />
</template>

<script setup>
const loginStatue = ref(true);
const isLoading = ref(false);
const toggleStatue = () => {
  loginStatue.value = !loginStatue.value;
};

const router = useRouter();

const userCookie = useCookie("auth", {
  path: "/",
  maxAge: 60000,
});

// loginAPI串接
const loginData = ref({
  email: "",
  password: "",
});

const login = async () => {
  isLoading.value = true;
  try {
    const config = useRuntimeConfig();
    const res = await $fetch("/user/login", {
      baseURL: config.public.apiBase,
      method: "post",
      body: loginData.value,
    });
    isLoading.value = false;
    showAlert("登入成功", "success");
    userCookie.value = res.token;
    router.push("/user");
  } catch (error) {
    isLoading.value = false;
    showAlert(error.data.message, "error");
  }
};

// signup串接
const signupData = ref({
  name: "",
  email: "",
  password: "",
  phone: "",
  birthday: "",
  address: "",
});

const signup = async () => {
  isLoading.value = true;
  try {
    const config = useRuntimeConfig();
    const res = await $fetch("/user/signup", {
      baseURL: config.public.apiBase,
      method: "post",
      body: signupData.value,
    });
    userCookie.value = res.token;
    isLoading.value = false;
    showAlert("註冊成功", "success");
    router.push("/user");
  } catch (error) {
    isLoading.value = false;
    showAlert(error.data.message, "error");
  }
};
// 提示框
const showAlert = (text, icon) => {
  const { $swal } = useNuxtApp();
  $swal.fire({
    text: text,
    icon: icon,
    confirmButtonText: "確定",
    timer: 2000,
    customClass: {
      popup: "my-popup",
      title: "my-title",
      confirmButton: "my-button",
    },
  });
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.user-form {
  width: 100%;
  margin: 0px 0 50px;
  height: 600px;
}

h2 {
  font-size: $fs-3;
  color: $eerie-black;
  font-weight: $weight-500;
}

.login-form {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .add-fogot-link {
    font-size: $fs-8;
    margin: 20px 0 6px;
    display: flex;
    gap: 10px;
    a {
      color: $salmon-pink;
    }
  }
  .login-btn {
    background: $eerie-black;
    color: $cultured;
    width: 100%;
    max-width: 300px;
    border-radius: $border-radius-md;
    height: 44px;
    letter-spacing: 5px;
    margin-top: 30px;
    transition: $transition-timing;
    &:hover {
      background: $salmon-pink;
    }
  }
  .social-text {
    font-size: $fs-6;
    color: $davys-gray;
    font-weight: $weight-500;
    border-top: $spanish-gray solid 1px;
    padding-top: 10px;
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    a {
      font-size: 28px;
      padding: 5px 8px 1px;
      color: $onyx;
      background: hsl(0, 0%, 95%);
      border-radius: $border-radius-sm;
      color: $sonic-silver;
      transition: $transition-timing;
      &:hover {
        background: $salmon-pink;
        color: $white;
      }
    }
  }
}

.input-box {
  position: relative;
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
  .search-field {
    font-size: $fs-7;
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

.register-form {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .register-btn {
    background: $eerie-black;
    color: $cultured;
    width: 100%;
    max-width: 300px;
    border-radius: $border-radius-md;
    height: 44px;
    min-height: 44px;
    letter-spacing: 5px;
    margin-top: 30px;
    transition: $transition-timing;
    &:hover {
      background: $salmon-pink;
    }
  }
  .login-link {
    font-size: $fs-8;
    margin: 20px 0 6px;
    display: flex;
    gap: 10px;
    a {
      color: $salmon-pink;
    }
  }
}
</style>
