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
    <div class="order-completed">
      <div class="header">
        <h1>付款完成！</h1>
        <p>感謝您的訂購，您的訂單已成功處理。</p>
      </div>
      <div class="order-info">
        <div class="order-id">
          <h3>訂單ID</h3>
          <p>{{ OrderId }}</p>
        </div>
        <div class="recipient-info">
          <h3>收件人資訊</h3>
          <p>
            姓名: {{ Order?.recipient?.name || "" }} 電話:
            {{ Order?.recipient?.phone || "" }}
          </p>
        </div>
      </div>
      <div class="cta">
        <button @click="goback">返回首頁</button>
      </div>
    </div>
  </div>

  <GlobalFooter />
</template>

<script setup>
const isLoading = ref(false);
const userCookie = useCookie("auth");
const route = useRoute();
const router = useRouter();
let OrderId = ref("");
OrderId = route.params.id;
let Order = ref({});

const getOneOrder = async () => {
  isLoading.value = true;
  try {
    const config = useRuntimeConfig();
    const res = await $fetch(`/order/info`, {
      baseURL: config.public.apiBase,
      method: "post",
      headers: {
        Authorization: userCookie.value,
      },
      body: {
        orderId: route.params.id,
      },
    });
    Order.value = res.targetOrder;
    isLoading.value = false;
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
};

const goback = () => {
  router.push({ path: "/" });
};

onMounted(() => {
  getOneOrder();
});
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;
.order-completed {
  font-family: "Arial", sans-serif;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
}

.header h1 {
  font-size: 24px;
  color: $bittersweet;
}

.header p {
  font-size: 16px;
  color: $davys-gray;
}

.order-info {
  margin-top: 30px;
  text-align: left;
  margin-left: 30px;
}

.order-info h3 {
  font-size: 18px;
  color: $bittersweet;
  margin-bottom: 10px;
}

.order-info p {
  font-size: 16px;
  color: #555;
  padding: 2px 20px;
}

.cta {
  margin-top: 40px;
}

.cta button {
  margin: 0 auto;
  background-color: $eerie-black;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: $transition-timing;
  &:hover {
    background-color: $bittersweet;
  }
}
</style>
