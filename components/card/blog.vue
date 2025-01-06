<template>
  <div class="blog">
    <div class="container">
      <div class="blog-container has-scrollbar">
        <div class="blog-card">
          <a href="#">
            <img
              src="https://i.postimg.cc/2886v00v/blog-1.jpg"
              alt="Clothes Retail KPIs 2023 Guide for Clothes Executives"
              class="blog-banner"
              width="300"
            />
          </a>

          <div class="blog-content">
            <a href="#" class="blog-category">Fashion</a>
            <a href="#"
              ><h3 class="blog-title">
                Clothes Retail KPIs 2023 Guide for Clothes Executives
              </h3></a
            >
            <p class="blog-meta">
              By <cite>Mr Admin</cite> /
              <time datetime="2024-04-06">Apr 06, 2024</time>
            </p>
          </div>
        </div>

        <div class="blog-card">
          <a href="#">
            <img
              src="https://i.postimg.cc/cJWPgbmG/blog-2.jpg"
              alt="Curbside fashion Trends: How to Win the Pickup Battle"
              class="blog-banner"
              width="300"
            />
          </a>

          <div class="blog-content">
            <a href="#" class="blog-category">Clothes</a>
            <a href="#"
              ><h3 class="blog-title">
                Curbside fashion Trends: How to Win the Pickup Battle
              </h3></a
            >
            <p class="blog-meta">
              By <cite>Mr Robin</cite> /
              <time datetime="2024-01-18">Jan 18, 2024</time>
            </p>
          </div>
        </div>

        <div class="blog-card">
          <a href="#">
            <img
              src="https://i.postimg.cc/BQkj0xCK/blog-3.jpg"
              alt="EBT vendors: Claim Your Share of SNAP Online Revenue"
              class="blog-banner"
              width="300"
            />
          </a>

          <div class="blog-content">
            <a href="#" class="blog-category">Shoes</a>
            <a href="#"
              ><h3 class="blog-title">
                EBT vendors: Claim Your Share of SNAP Online Revenue
              </h3></a
            >
            <p class="blog-meta">
              By <cite>Mr Selsa</cite> /
              <time datetime="2023-02-23">Feb 23, 2023</time>
            </p>
          </div>
        </div>

        <div class="blog-card">
          <a href="#">
            <img
              src="https://i.postimg.cc/43Jskdjc/blog-4.jpg"
              alt="Curbside fashion Trends: How to Win the Pickup Battle"
              class="blog-banner"
              width="300"
            />
          </a>

          <div class="blog-content">
            <a href="#" class="blog-category">Electronics</a>
            <a href="#"
              ><h3 class="blog-title">
                Curbside fashion Trends: How to Win the Pickup Battle
              </h3></a
            >
            <p class="blog-meta">
              By <cite>Mr Pawar</cite> /
              <time datetime="2023-02-02">Feb 02, 2023</time>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.blog {
  margin-bottom: 30px;
}

.blog-container {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  cursor: grab; /* 鼠標變成抓取圖示 */
  user-select: none; /* 防止拖動時選中文字 */
  &.grabbing {
    cursor: grabbing; /* 拖動時的狀態 */
  }
}

.blog-card {
  min-width: 100%;
  scroll-snap-align: start;
}

.blog-banner {
  width: 100%;
  border-radius: $border-radius-md;
  margin-bottom: 20px;
}

.blog-category {
  width: max-content;
  color: $salmon-pink;
  font-size: $fs-6;
}

.blog-title {
  color: $eerie-black;
  font-size: $fs-5;
  font-weight: $weight-600;
  line-height: 1.4;
  margin-bottom: 5px;
  transition: $transition-timing;
  &:hover {
    color: $salmon-pink;
  }
}

.blog-meta {
  color: $sonic-silver;
  font-size: $fs-7;
  cite {
    font-style: normal;
    color: $davys-gray;
  }
}

@media (min-width: 570px) {
  .blog-container {
    gap: 30px;
  }
  .blog-card {
    min-width: calc(50% - 15px);
  }
}

@media (min-width: 1024px) {
  .blog-container {
    padding-top: 20px;
  }

  .blog-card {
    min-width: calc(33.33% - 20px);
  }
}

@media (min-width: 1024px) {
  .blog {
    margin-bottom: 50px;
  }

  .blog-card {
    min-width: calc(25% - 22.5px);
  }
}
</style>
