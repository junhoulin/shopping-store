<template>
  <div class="banner">
      <div class="container">
          <div class="slider-container has-scrollbar">
              <div class="slider-item">
                  <img src="~public/images/banner-1.jpg" class="banner-img" alt="banner-img">
                  <div class="banner-content">
                      <p class="banner-subtitle">Trending item</p>
                      <h2 class="banner-title">Women's <br>latest<br> fashion sale</h2>
                      <p class="banner-text">Starting at &dollar; <b>20</b>.00</p>
                      <a href="#" class="banner-btn">shop now</a>
                  </div>
              </div>
              <div class="slider-item">
                  <img src="~public/images/banner-2.jpg" class="banner-img" alt="banner-img">
                  <div class="banner-content">
                      <p class="banner-subtitle">Trending item</p>
                      <h2 class="banner-title">Women's latest fashion sale</h2>
                      <p class="banner-text">Starting at &dollar; <b>20</b>.00</p>
                      <a href="#" class="banner-btn">shop now</a>
                  </div>
              </div>
              <div class="slider-item">
                  <img src="~public/images/banner-3.jpg" class="banner-img" alt="banner-img">
                  <div class="banner-content">
                      <p class="banner-subtitle">Trending item</p>
                      <h2 class="banner-title">Women's latest fashion sale</h2>
                      <p class="banner-text">Starting at &dollar; <b>20</b>.00</p>
                      <a href="#" class="banner-btn">shop now</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>

</script>

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
    .banner-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: right;
    }
    .banner-content {
        background: hsla(0, 0%, 100%, .5);
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
        letter-spacing: 2px;
        margin-bottom: 10px;
    }
    .banner-title {
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

</style>
