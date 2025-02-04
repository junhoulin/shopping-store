<template>
  <div class="category">
    <div class="container">
      <div class="category-item-container has-scrollbar">
        <div class="category-item">
          <div class="category-img-box">
            <img
              src="~public/images/icons/dress.svg"
              alt="dress & fork"
              width="30px"
            />
          </div>
          <div class="category-content-box">
            <div class="category-content-flex">
              <h3 class="category-item-title">長袖襯衫</h3>
              <p class="category-item-amount">(53)</p>
            </div>
            <NuxtLink
              :to="{ path: '/product/', query: { name: '長袖襯衫' } }"
              class="category-btn"
              >查看商品
            </NuxtLink>
          </div>
        </div>
        <div class="category-item">
          <div class="category-img-box">
            <img
              src="~public/images/icons/coat.svg"
              alt="winter wear"
              width="30"
            />
          </div>

          <div class="category-content-box">
            <div class="category-content-flex">
              <h3 class="category-item-title">長袖上衣</h3>
              <p class="category-item-amount">(58)</p>
            </div>
            <NuxtLink
              :to="{ path: '/product/', query: { name: '長袖上衣' } }"
              class="category-btn"
              >查看商品
            </NuxtLink>
          </div>
        </div>
        <div class="category-item">
          <div class="category-img-box">
            <img
              src="~public/images/icons/jacket.svg"
              alt="winter wear"
              width="30"
            />
          </div>

          <div class="category-content-box">
            <div class="category-content-flex">
              <h3 class="category-item-title">外套</h3>
              <p class="category-item-amount">(58)</p>
            </div>
            <NuxtLink
              :to="{ path: '/product/', query: { name: '外套' } }"
              class="category-btn"
              >查看商品
            </NuxtLink>
          </div>
        </div>
        <div class="category-item">
          <div class="category-img-box">
            <img
              src="~public/images/icons/shorts.svg"
              alt="winter wear"
              width="30"
            />
          </div>

          <div class="category-content-box">
            <div class="category-content-flex">
              <h3 class="category-item-title">短褲</h3>
              <p class="category-item-amount">(58)</p>
            </div>
            <a href="#" class="category-btn">Show All</a>
          </div>
        </div>
        <div class="category-item">
          <div class="category-img-box">
            <img
              src="~public/images/icons/tee.svg"
              alt="winter wear"
              width="30"
            />
          </div>

          <div class="category-content-box">
            <div class="category-content-flex">
              <h3 class="category-item-title">背心</h3>
              <p class="category-item-amount">(58)</p>
            </div>
            <a href="#" class="category-btn">Show All</a>
          </div>
        </div>
        <div class="category-item">
          <div class="category-img-box">
            <img
              src="~public/images/icons/watch.svg"
              alt="winter wear"
              width="30"
            />
          </div>

          <div class="category-content-box">
            <div class="category-content-flex">
              <h3 class="category-item-title">tee</h3>
              <p class="category-item-amount">(58)</p>
            </div>
            <a href="#" class="category-btn">Show All</a>
          </div>
        </div>
        <div class="category-item">
          <div class="category-img-box">
            <img
              src="~public/images/icons/hat.svg"
              alt="winter wear"
              width="30"
            />
          </div>

          <div class="category-content-box">
            <div class="category-content-flex">
              <h3 class="category-item-title">tee</h3>
              <p class="category-item-amount">(58)</p>
            </div>
            <a href="#" class="category-btn">Show All</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;
.category {
  margin-bottom: 30px;
}

.category-item-container {
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: auto hidden;
  scroll-snap-type: inline mandatory;
  overscroll-behavior-inline: contain;
}

.category-item {
  min-width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border: 1px solid $cultured;
  border-radius: $border-radius-md;
  scroll-snap-align: start;
}

.category-img-box {
  background: $cultured;
  border: 1px solid hsl(0, 0%, 80%);
  padding: 10px;
  border-radius: $border-radius-sm;
}
.category-content-box {
  width: 100%;
}

.category-content-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.category-item-title {
  color: $eerie-black;
  font-size: $fs-9;
  font-weight: $weight-600;
  text-transform: uppercase;
}

.category-item-amount {
  color: $sonic-silver;
  font-size: $fs-11;
}

.category-btn {
  color: $salmon-pink;
  font-size: $fs-9;
  font-weight: $weight-500;
  text-transform: capitalize;
}

@media (min-width: 768px) {
  .category-item-container {
    gap: 30px;
  }
  .category-item {
    min-width: calc(50% - 15px);
  }
  .category-img-box {
    padding: 20px;
  }
}

@media (min-width: 1024px) {
  .category-item {
    min-width: calc(33.33% - 20px);
  }
  .category-img-box {
    padding: 10px;
  }
}
</style>
