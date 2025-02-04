<template>
  <div class="banner">
    <div class="container">
      <div class="slider-container has-scrollbar">
        <div class="slider-item">
          <img
            src="~public/images/banner-1.jpg"
            class="banner-img"
            alt="banner-img"
          />
          <div class="banner-content">
            <p class="banner-subtitle">2025 冬季大特賣</p>
            <h2 class="banner-title">女士冬季<br />超級特惠</h2>
            <p class="banner-text">限時優惠，低至 <b>$20元</b> 起！</p>
            <a href="#" class="banner-btn">立即搶購</a>
          </div>
        </div>
        <div class="slider-item">
          <img
            src="~public/images/banner-2.jpg"
            class="banner-img"
            alt="banner-img"
          />
          <div class="banner-content">
            <p class="banner-subtitle">2025 冬季大特賣</p>
            <h2 class="banner-title">女士冬季<br />超級特惠</h2>
            <p class="banner-text">限時優惠，低至 <b>$20元</b> 起！</p>
            <a href="#" class="banner-btn">立即搶購</a>
          </div>
        </div>
        <div class="slider-item">
          <img
            src="~public/images/banner-3.jpg"
            class="banner-img"
            alt="banner-img"
          />
          <div class="banner-content">
            <p class="banner-subtitle">2025 冬季大特賣</p>
            <h2 class="banner-title">女士冬季<br />超級特惠</h2>
            <p class="banner-text">限時優惠，低至 <b>$20元</b> 起！</p>
            <a href="#" class="banner-btn">立即搶購</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.banner {
  margin: 30px 0;
}

.slider-container {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: $border-radius-md;
  overflow: auto hidden;
  scroll-snap-type: inline mandatory;
  overscroll-behavior-inline: contain;
}

.slider-item {
  position: relative;
  min-width: 100%;
  max-height: 450px;
  aspect-ratio: 1 / 1;
  border-radius: $border-radius-md;
  overflow: hidden;
  scroll-snap-align: start;
  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
  }
  .banner-content {
    background: hsla(0, 0%, 100%, 0.5);
    position: absolute;
    bottom: 25px;
    left: 25px;
    right: 25px;
    padding: 20px 25px;
    border-radius: $border-radius-md;
  }
  .banner-subtitle {
    color: $salmon-pink;
    font-size: $fs-7;
    font-weight: $weight-500;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  .banner-title {
    letter-spacing: 1px;
    color: $eerie-black;
    font-size: $fs-1;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 10px;
  }
  .banner-text {
    display: none;
  }
}
.banner-btn {
  background: $salmon-pink;
  color: $white;
  width: max-content;
  font-size: $fs-11;
  font-weight: $weight-600;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: $border-radius-md;
  transition: $transition-timing;
  &:hover {
    background: $eerie-black;
  }
}

@media (min-width: 480px) {
  .slider-item {
    aspect-ratio: 5 / 3;
    .banner-content {
      max-width: 320px;
      bottom: 50%;
      transform: translateY(50%);
    }
    .banner-text {
      display: block;
      color: $sonic-silver;
      font-size: $fs-7;
      font-weight: $weight-500;
      margin-bottom: 10px;
      b {
        font-size: $fs-2;
      }
    }
    .banner-btn {
      padding: 7px 20px;
    }
  }
}

@media (min-width: 520px) {
  .slider-item {
    aspect-ratio: 4/2;
  }
}

@media (min-width: 768px) {
  .slider-item {
    height: 350px;
    aspect-ratio: auto;
  }
}

@media (min-width: 1024px) {
  .banner {
    margin-top: 0;
  }
  .slider-item {
    height: 360px;
    .banner-content {
      left: 75px;
      max-width: 400px;
    }
    .banner-subtitle {
      font-size: 1.625rem;
    }
    .banner-text {
      font-size: 1.625rem;
    }
    .banner-btn {
      font-size: 0.875rem;
    }
  }
}
</style>
