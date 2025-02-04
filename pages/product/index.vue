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
    <div class="search-flex animate__animated animate__fadeIn">
      <div class="search-top">
        <p>
          搜尋 <span>{{ productName || "全部" }}</span> 的結果,共搜尋到{{
            allProductMount
          }}筆資料
        </p>
        <div class="seach-category">
          <select id="sortSelect" @change="updateSort">
            <option value="" disabled selected>排序方法</option>
            <option value="1">價格由高至低</option>
            <option value="2">價格由低至高</option>
          </select>
        </div>
      </div>
      <div class="search-product">
        <div class="product-main">
          <div class="product-grid">
            <div
              class="showcase"
              v-for="product in allProduct"
              :key="product.id"
            >
              <div class="showcase-banner">
                <img
                  :src="product.imageUrl"
                  alt="男生冬天的外套"
                  class="product-img default"
                  width="300"
                />
                <img
                  :src="product.imageUrl"
                  alt="男生冬天的外套"
                  class="product-img hover"
                  width="300"
                />
                <div class="showcase-badge">{{ discountPercentage }}%</div>
                <div class="showcase-actions">
                  <button class="btn-action">
                    <Icon icon="mdi:heart-outline" />
                  </button>
                  <NuxtLink :to="`/product/${product.id}`">
                    <button class="btn-action">
                      <Icon icon="mdi:eye-outline" />
                    </button>
                  </NuxtLink>
                  <button class="btn-action">
                    <Icon icon="solar:bag-line-duotone" />
                  </button>
                </div>
              </div>
              <div class="showcase-content">
                <a href="#" class="showcase-category">{{
                  product.category.join()
                }}</a>
                <a href="#" class="showcase-title">{{ product.name }}</a>
                <div class="showcase-rating">
                  <Icon icon="material-symbols:star-rounded" />
                  <Icon icon="material-symbols:star-rounded" />
                  <Icon icon="material-symbols:star-rounded" />
                  <Icon icon="material-symbols:star-rounded" />
                  <Icon icon="material-symbols:star-rounded" />
                </div>
                <div class="price-box">
                  <p class="price">
                    ${{ product.price * (1 - discount).toFixed(2) }}
                  </p>
                  <del>{{ product.price }}</del>
                </div>
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
const isLoading = ref(false);
const allProduct = ref([]);
const allProductMount = ref(0);
const discount = ref(0.1);
const sortMethod = ref("");
const router = useRoute();
const productName = ref("");

const updateSort = (event) => {
  sortMethod.value = event.target.value;
  getAllProduct(sortMethod.value);
};

const getAllProduct = async (sortType, productType) => {
  isLoading.value = true;
  try {
    const config = useRuntimeConfig();
    const res = await $fetch("/product/productlist", {
      baseURL: config.public.apiBase,
      method: "get",
    });

    let products = res.result.map((product) => ({
      id: product._id,
      name: product.name,
      category: product.category || [],
      price: product.price,
      imageUrl: product.imageUrl,
    }));
    // 如果 productType 有值，篩選 category 包含該類別的產品
    if (productType) {
      console.log("🔍 篩選 productType:", productType);
      products = products.filter((product) =>
        product.category.includes(productType)
      );
    }

    let sortedProducts = [...products];

    if (sortType === "1") {
      sortedProducts.sort((a, b) => b.price - a.price); // 價格由高至低
    } else if (sortType === "2") {
      sortedProducts.sort((a, b) => a.price - b.price); // 價格由低至高
    }

    allProduct.value = sortedProducts;
    isLoading.value = false;
    allProductMount.value = allProduct.value.length;
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
};

const discountPercentage = computed(() => {
  return (discount.value * 100).toFixed(0);
});

watch(
  () => router.query.name,
  (newName) => {
    if (newName) {
      productName.value = newName;
      getAllProduct("", productName.value);
    }
  },
  { immediate: true }
);

onMounted(() => {
  getAllProduct("", productName.value);
});
</script>

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
    span {
      color: $bittersweet;
    }
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

.product-main {
  margin-bottom: 30px;
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  .showcase-banner {
    position: relative;
  }
  .product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: $transition-timing;
  }
  .product-img.default {
    position: relative;
    z-index: 1;
  }
  .product-img.hover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0;
  }
  .showcase-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background: $ocean-green;
    font-size: $fs-8;
    font-weight: $weight-500;
    color: $white;
    padding: 0 8px;
    border-radius: $border-radius-sm;
    z-index: 3;
  }
  .showcase-actions {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    transform: translateX(50px);
    transition: $transition-timing;
    z-index: 3;
  }
  .btn-action {
    background: $white;
    color: $sonic-silver;
    margin-bottom: 5px;
    border: 1px solid $cultured;
    padding: 4px 7px 1px;
    border-radius: 20%;
    transition: var(--transition-timing);
    &:hover {
      background: $eerie-black;
      color: $white;
      border-color: $eerie-black;
    }
  }
  .showcase-content {
    padding: 15px 20px 0;
  }
  .showcase-category {
    color: $salmon-pink;
    font-size: $fs-9;
    font-weight: $weight-500;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .showcase-title {
    color: $sonic-silver;
    font-size: $fs-8;
    font-weight: $weight-300;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-bottom: 10px;
    transition: $transition-timing;
    &:hover {
      color: $eerie-black;
    }
  }
  .showcase-rating {
    display: flex;
    color: $sandy-brown;
    margin-bottom: 10px;
  }
  .price-box {
    display: flex;
    gap: 10px;
    font-size: $fs-7;
    color: $eerie-black;
    margin-bottom: 10px;
  }
  .price {
    font-weight: $weight-700;
  }
  del {
    color: $sonic-silver;
  }
}

.showcase {
  border: 1px solid $cultured;
  border-radius: $border-radius-md;
  overflow: hidden;
  transition: $transition-timing;
  &:hover {
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
    transform: translateX(1px);
    .product-img.hover {
      opacity: 1;
    }
    .product-img.default {
      opacity: 0;
    }
    .product-img {
      transform: scale(1.1);
    }
    .showcase-actions {
      transform: translateX(0);
    }
  }
}

@media (min-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media (min-width: 1024px) {
  .product-main {
    .product-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (min-width: 1200px) {
  .product-main {
    .product-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
