<template>
  <div class="product-box container">
    <!-- 小視窗展示產品 -->
    <div class="product-minimal">
      <div class="product-showcase">
        <h2 class="title">最新商品</h2>
        <div class="showcase-wrapper has-scrollbar">
          <div
            class="showcase-container"
            v-for="(items, index) in product1"
            :key="index"
          >
            <div class="showcase" v-for="(item, index) in items" :key="index">
              <NuxtLink class="showcase-img-box" :to="`/product/${item.id}`">
                <img
                  :src="item.imageUrl"
                  alt=""
                  class="showcase-img"
                  width="70"
                />
              </NuxtLink>
              <div class="showcase-content">
                <NuxtLink :to="`/product/${item.id}`">
                  <h4 class="showcase-title">{{ item.name }}</h4>
                </NuxtLink>
                <NuxtLink
                  class="showcase-category"
                  :to="{ path: '/product/', query: { name: item.category[0] } }"
                  >{{ item.category[0] }}</NuxtLink
                >
                <div class="price-box">
                  <p class="price">
                    ${{ (item.price * (1 - discount)).toFixed(0) }}
                  </p>
                  <del>${{ item.price }}</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-showcase">
        <h2 class="title">特價中</h2>
        <div class="showcase-wrapper has-scrollbar">
          <div
            class="showcase-container"
            v-for="(items, index) in product2"
            :key="index"
          >
            <div class="showcase" v-for="(item, index) in items" :key="index">
              <NuxtLink class="showcase-img-box" :to="`/product/${item.id}`">
                <img
                  :src="item.imageUrl"
                  alt=""
                  class="showcase-img"
                  width="70"
                />
              </NuxtLink>
              <div class="showcase-content">
                <NuxtLink :to="`/product/${item.id}`">
                  <h4 class="showcase-title">{{ item.name }}</h4>
                </NuxtLink>
                <NuxtLink
                  class="showcase-category"
                  :to="{ path: '/product/', query: { name: item.category[0] } }"
                  >{{ item.category[0] }}</NuxtLink
                >
                <div class="price-box">
                  <p class="price">
                    ${{ (item.price * (1 - discount)).toFixed(0) }}
                  </p>
                  <del>${{ item.price }}</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-showcase">
        <h2 class="title">最高銷售</h2>
        <div class="showcase-wrapper has-scrollbar">
          <div
            class="showcase-container"
            v-for="(items, index) in product3"
            :key="index"
          >
            <div class="showcase" v-for="(item, index) in items" :key="index">
              <NuxtLink class="showcase-img-box" :to="`/product/${item.id}`">
                <img
                  :src="item.imageUrl"
                  alt=""
                  class="showcase-img"
                  width="70"
                />
              </NuxtLink>
              <div class="showcase-content">
                <NuxtLink :to="`/product/${item.id}`">
                  <h4 class="showcase-title">{{ item.name }}</h4>
                </NuxtLink>
                <NuxtLink
                  class="showcase-category"
                  :to="{ path: '/product/', query: { name: item.category[0] } }"
                  >{{ item.category[0] }}</NuxtLink
                >
                <div class="price-box">
                  <p class="price">
                    ${{ (item.price * (1 - discount)).toFixed(0) }}
                  </p>
                  <del>{{ item.price }}</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 計時特價商品 -->
    <div class="product-featured">
      <h2 class="title">Deal of the day</h2>
      <div class="showcase-wrapper has-scrollbar">
        <div class="showcase-container">
          <div class="showcase">
            <div class="showcase-banner">
              <img
                src="~public/images/products/shampoo.jpg"
                alt="shampoo, conditioner & facewash packs"
                class="showcase-img"
              />
            </div>
            <div class="showcase-content">
              <div class="showcase-rating">
                <Icon icon="material-symbols:star-rounded" />
                <Icon icon="material-symbols:star-rounded" />
                <Icon icon="material-symbols:star-rounded" />
                <Icon icon="material-symbols:star-rounded" />
                <Icon icon="material-symbols:star-rounded" />
              </div>
              <a href="#" class="showcase-title">
                <h3 class="showcase-title">
                  shampoo, conditioner & facewash packs
                </h3>
              </a>

              <p class="showcase-desc">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet consectetur Lorem ipsum dolor
              </p>

              <div class="price-box">
                <p class="price">$150.00</p>
                <del>$200.00</del>
              </div>

              <button class="add-cart-btn">加到購物車</button>

              <div class="showcase-status">
                <div class="wrapper">
                  <p>已經售出: <b>20</b></p>
                  <p>庫存剩下: <b>40</b></p>
                </div>
                <div class="showcase-status-bar"></div>
              </div>

              <div class="countdown-box">
                <p class="countdown-desc">即將結束於:</p>
                <div class="countdown">
                  <div class="countdown-content">
                    <p class="display-number">360</p>
                    <p class="display-text">天</p>
                  </div>
                  <div class="countdown-content">
                    <p class="display-number">24</p>
                    <p class="display-text">時</p>
                  </div>
                  <div class="countdown-content">
                    <p class="display-number">59</p>
                    <p class="display-text">分</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="showcase-container">
          <div class="showcase">
            <div class="showcase-banner">
              <img
                src="~public/images/products/shampoo.jpg"
                alt="shampoo, conditioner & facewash packs"
                class="showcase-img"
              />
            </div>
            <div class="showcase-content">
              <div class="showcase-rating">
                <Icon icon="material-symbols:star-rounded" />
                <Icon icon="material-symbols:star-rounded" />
                <Icon icon="material-symbols:star-rounded" />
                <Icon icon="material-symbols:star-rounded" />
                <Icon icon="material-symbols:star-rounded" />
              </div>
              <a href="#" class="showcase-title">
                <h3 class="showcase-title">
                  shampoo, conditioner & facewash packs
                </h3>
              </a>

              <p class="showcase-desc">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet consectetur Lorem ipsum dolor
              </p>

              <div class="price-box">
                <p class="price">$150.00</p>
                <del>$200.00</del>
              </div>

              <button class="add-cart-btn">加到購物車</button>

              <div class="showcase-status">
                <div class="wrapper">
                  <p>已經售出: <b>20</b></p>
                  <p>庫存剩下: <b>40</b></p>
                </div>
                <div class="showcase-status-bar"></div>
              </div>

              <div class="countdown-box">
                <p class="countdown-desc">即將結束於:</p>
                <div class="countdown">
                  <div class="countdown-content">
                    <p class="display-number">360</p>
                    <p class="display-text">天</p>
                  </div>
                  <div class="countdown-content">
                    <p class="display-number">24</p>
                    <p class="display-text">時</p>
                  </div>
                  <div class="countdown-content">
                    <p class="display-number">59</p>
                    <p class="display-text">分</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 產品網格 -->
    <div class="product-main">
      <div class="title">全部商品</div>
      <div class="product-grid">
        <div class="showcase" v-for="(item, index) in allProduct" :key="index">
          <div class="showcase-banner">
            <img
              :src="item.imageUrl"
              alt="男生冬天的外套"
              class="product-img default"
              width="300"
            />
            <img
              :src="item.imageUrl"
              alt="男生冬天的外套"
              class="product-img hover"
              width="300"
            />
            <div class="showcase-badge">10%</div>
            <div class="showcase-actions">
              <button class="btn-action">
                <Icon icon="mdi:heart-outline" />
              </button>
              <NuxtLink :to="`/product/${item.id}`">
                <button class="btn-action">
                  <Icon icon="mdi:eye-outline" />
                </button>
              </NuxtLink>
              <button class="btn-action" @click="addCart(item.id)">
                <Icon icon="solar:bag-line-duotone" />
              </button>
            </div>
          </div>
          <div class="showcase-content">
            <a class="showcase-category">{{ item.name }}</a>
            <a class="showcase-title">{{ item.descriptionList[0] }}</a>
            <div class="showcase-rating">
              <Icon icon="material-symbols:star-rounded" />
              <Icon icon="material-symbols:star-rounded" />
              <Icon icon="material-symbols:star-rounded" />
              <Icon icon="material-symbols:star-rounded" />
              <Icon icon="material-symbols:star-rounded" />
            </div>
            <div class="price-box">
              <p class="price">
                ${{ (item.price * (1 - discount)).toFixed(0) }}
              </p>
              <del>${{ item.price }}</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const userCookie = useCookie("auth");
const allProduct = ref([]);
const product1 = ref([]);
const product2 = ref([]);
const product3 = ref([]);
const discount = ref(0.1);

// **分割陣列成每 4 個一組**
const chunkArray = (array, size) => {
  return array.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!acc[chunkIndex]) acc[chunkIndex] = [];
    acc[chunkIndex].push(item);
    return acc;
  }, []);
};

const getAllProduct = async (dataname, productType) => {
  try {
    const config = useRuntimeConfig();
    const res = await $fetch("/product/productlist", {
      baseURL: config.public.apiBase,
      method: "get",
    });
    let products = res.result.map((product) => ({
      id: product._id,
      name: product.name,
      descriptionList: product.descriptionList || [],
      category: product.category || [],
      price: product.price,
      imageUrl: product.imageUrl,
      colorType: product.colorType || [],
    }));
    // 如果 productType 有值，篩選 category 包含該類別的產品
    if (productType) {
      products = products.filter((product) =>
        product.category.includes(productType)
      );
      const chunkedProducts = chunkArray(products, 4);
      dataname.value = chunkedProducts;
    } else {
      allProduct.value = products;
    }
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
};

const addCart = async (product) => {
  if (!userCookie.value) {
    showAlert("請先登入會員", "error");
    return;
  }

  try {
    const config = useRuntimeConfig();
    const res = await $fetch(`/product/getoneproduct/${product}`, {
      baseURL: config.public.apiBase,
      method: "get",
    });
    const addProduct = {
      productId: res.result._id,
      productName: res.result.name,
      color: `${res.result.colorType[0].color}`,
      imageUrl: res.result.imageUrl,
      quantity: 1,
      size: "M",
      price: res.result.price,
    };
    await $fetch("/cart/addcart/", {
      baseURL: config.public.apiBase,
      method: "post",
      headers: {
        Authorization: userCookie.value,
      },
      body: addProduct,
    });
    showAlert("已將產品加入購物車", "success");
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getAllProduct();
  getAllProduct(product1, "長袖襯衫");
  getAllProduct(product2, "長袖上衣");
  getAllProduct(product3, "外套");
});
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.title {
  color: $eerie-black;
  font-size: $fs-5;
  font-weight: $weight-600;
  letter-spacing: 0.4px;
  text-transform: capitalize;
  padding-bottom: 10px;
  border-bottom: 1px solid $cultured;
  margin-bottom: 30px;
}

.product-minimal {
  margin-bottom: 30px;
  .product-showcase {
    margin-bottom: 30px;
  }
  .showcase-wrapper {
    display: flex;
    align-items: center;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
  }
}

// 產品大小、排版設定

.showcase-container {
  min-width: 100%;
  padding: 0 5px;
  scroll-snap-align: start;
  .showcase {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    border: 1px solid $cultured;
    padding: 15px;
    border-radius: $border-radius-md;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  .showcase-content {
    width: calc(100% - 85px);
  }
  .showcase-title {
    color: $eerie-black;
    font-size: $fs-7;
    font-weight: $weight-600;
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px;
  }
  .showcase-category {
    width: max-content;
    color: $davys-gray;
    font-size: $fs-8;
    text-transform: capitalize;
    margin-bottom: 3px;
    &:hover {
      color: $salmon-pink;
    }
  }
  .price-box {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .price {
    font-size: $fs-7;
    font-weight: $weight-700;
    color: $salmon-pink;
  }
  del {
    font-size: $fs-9;
    color: $sonic-silver;
  }
}

// product-featured
.product-featured {
  margin-bottom: 30px;
  .showcase-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
  }
  .showcase {
    display: flex;
    flex-direction: column;
  }
  .showcase-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .showcase-content {
    margin-top: 30px;
  }
  .showcase-rating {
    color: $sandy-brown;
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 15px;
  }
  .showcase-title {
    font-size: $fs-7;
    color: $eerie-black;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform: uppercase;
    margin-bottom: 3px;
  }
  .showcase-desc {
    color: $sonic-silver;
    font-size: $fs-7;
    font-weight: $weight-300;
    margin-bottom: 10px;
  }
  .price-box {
    font-size: $fs-3;
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  .price {
    color: $salmon-pink;
    font-weight: $weight-700;
  }
  del {
    color: $sonic-silver;
    font-weight: $weight-300;
  }
  .add-cart-btn {
    background: $salmon-pink;
    padding: 8px 15px;
    color: $white;
    font-weight: $fs-9;
    font-weight: $weight-500;
    text-transform: uppercase;
    border-radius: $border-radius-sm;
    margin-bottom: 15px;
    transition: $transition-timing;
    &:hover {
      background: $eerie-black;
      color: $white;
    }
  }
  .showcase-status {
    margin-bottom: 15px;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $eerie-black;
    font-size: $fs-9;
    font-weight: $weight-400;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .showcase-status-bar {
    background: $cultured;
    position: relative;
    height: 10px;
    border-radius: 5px;
  }
  .showcase-status-bar::before {
    position: absolute;
    content: "";
    top: 3px;
    left: 3px;
    height: 4px;
    width: 40%;
    background: $salmon-pink;
    border-radius: 4px;
  }
  .countdown-desc {
    color: $eerie-black;
    font-size: $fs-9;
    font-weight: $weight-600;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .countdown {
    display: flex;
    gap: 5px;
  }
  .countdown-content {
    padding: 5px;
    background: $cultured;
    border-radius: $border-radius-md;
    text-align: center;
  }
  .display-number {
    color: $eerie-black;
    font-size: $fs-5;
    font-weight: $weight-500;
    min-width: 40px;
  }
  .display-text {
    color: $davys-gray;
    font-size: $fs-11;
  }
}

// product-grid
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

@media (min-width: 570px) {
  .product-minimal {
    .showcase-container {
      min-width: 50%;
    }
  }

  .product-featured {
    .showcase-img {
      max-width: 450px;
      margin: auto;
    }
    .countdown {
      gap: 20px;
    }
  }
}

@media (min-width: 768px) {
  .product-minimal {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    .product-showcase {
      min-width: calc(50% - 10px);
      width: calc(50% - 10px);
    }
    .showcase-container {
      min-width: 100%;
    }
  }

  .product-featured {
    .showcase {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-direction: row;
    }
  }
}

@media (min-width: 1024px) {
  .product-minimal {
    margin-bottom: 20px;
    .product-showcase {
      min-width: calc(33.33% - 14px);
      width: calc(33.33% - 14px);
      flex-grow: 1;
    }
    .showcase-wrapper {
      gap: 10px;
    }
    .showcase-container {
      padding: 2px;
    }
  }

  .product-featured {
    .countdown-content {
      padding: 5px 10px;
    }
  }

  .product-main {
    .product-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (min-width: 1200px) {
  .product-featured {
    .showcase > div {
      min-width: calc(50% - 10px);
    }
    .display-number {
      font-size: $fs-3;
    }
  }
  .product-main {
    .product-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
