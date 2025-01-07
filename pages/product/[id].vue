<template>
  <GlobalHeader />
  <div class="container">
    <div class="product-flex">
      <div class="product-img">
        <div :class="imageClass">
          <img :src="currentImage" alt="" />
        </div>
        <div class="product-img-group has-scrollbar">
          <img
            src="~public/images/products/jacket-1.jpg"
            alt=""
            @click="updateMainImage('/images/products/jacket-1.jpg')"
          />
          <img
            src="~public/images/products/jacket-2.jpg"
            alt=""
            @click="updateMainImage('/images/products/jacket-2.jpg')"
          />
          <img
            src="~public/images/products/jacket-3.jpg"
            alt=""
            @click="updateMainImage('/images/products/jacket-3.jpg')"
          />
          <img
            src="~public/images/products/jacket-4.jpg"
            alt=""
            @click="updateMainImage('/images/products/jacket-4.jpg')"
          />
          <img
            src="~public/images/products/jacket-4.jpg"
            alt=""
            @click="updateMainImage('/images/products/jacket-4.jpg')"
          />
          <img
            src="~public/images/products/jacket-4.jpg"
            alt=""
            @click="updateMainImage('/images/products/jacket-4.jpg')"
          />
        </div>
      </div>
      <div class="product-content">
        <h3 class="product-content-category">Home / T-shirt</h3>
        <div class="product-hashtag">
          <a href="#">冬季新品</a>
          <a href="#">限定優惠</a>
          <a href="#">補貨中</a>
        </div>
        <a href="#" class="product-content-title">
          <h2 class="product-content-title">Men Fashion T-Shirt</h2>
        </a>
        <div class="price-box">
          <p class="price">$150.00</p>
          <del>$200.00</del>
        </div>
        <div class="product-content-cart">
          <select name="product-qty" id="">
            <option value="" disabled selected>請選擇數量</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <select name="product-sizey" id="">
            <option value="" disabled selected>請選擇尺寸</option>
            <option value="size">XXL</option>
            <option value="size">XL</option>
            <option value="size">L</option>
            <option value="size">M</option>
            <option value="size">S</option>
          </select>
          <select name="product-sizey" id="">
            <option value="" disabled selected>請選擇顏色</option>
            <option value="size">XXL</option>
            <option value="size">XL</option>
            <option value="size">L</option>
            <option value="size">M</option>
            <option value="size">S</option>
          </select>
        </div>
        <div class="add-group">
          <button class="add-cart-btn">加到購物車</button>
          <button class="add-like-btn">
            <Icon icon="mdi:heart-outline" width="24" />
          </button>
        </div>
        <div class="product-content-detail">產品介紹</div>
        <p class="product-content-detail-info">
          這款 Men Fashion T-Shirt 採用高品質純棉材質製成，
          觸感柔軟、透氣舒適，適合四季穿著。簡約的設計結合經典的剪裁，無論是日常休閒還是戶外活動，都能展現您的個性魅力。
          特色包含： 舒適面料：高密度織法的純棉材質，耐穿耐洗，不易變形。
          多種顏色選擇：提供黑色、白色、灰色、藍色等經典配色，滿足不同穿搭需求。
          時尚剪裁：修身但不緊身的設計，適合多種身形。
          此外，我們特別注重細節處理：精緻的車工走線，耐用且不易脫線；領口、袖口和下擺均經過強化處理，穿著更舒適自然。
          這款 T-Shirt
          不僅適合單穿，還可以作為內搭服飾，與外套、牛仔褲或運動褲輕鬆搭配，打造多樣風格。
        </p>
      </div>
    </div>
  </div>
  <GlobalFooter />
</template>

<script setup>
const currentImage = ref("/images/products/jacket-1.jpg");
const imageClass = ref("product-img-main");
const updateMainImage = (newImage) => {
  imageClass.value = "product-img-main";
  currentImage.value = newImage;
  setTimeout(() => {
    imageClass.value = "product-img-main animate__animated animate__bounceIn";
  }, 10); // 這裡延遲 10ms 確保類別被正確更新
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.product-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 60px;
}
.product-img {
  width: 90%;
  img {
    width: 100%;
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
  }
  .product-img-group {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 20px;
    overflow: auto hidden;
    scroll-snap-type: inline mandatory;
    overscroll-behavior-inline: contain;
    img {
      flex: 1;
      max-width: 22%;
      object-fit: cover;
      box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
      transition: $transition-timing;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }
}

.product-content {
  width: 90%;
  padding: 1% 3%;
  margin-top: 30px;
  .product-hashtag {
    font-size: $fs-10;
    display: flex;
    align-items: center;
    gap: 10px;
    a {
      border: 1px solid $bittersweet;
      color: $bittersweet;
    }
  }
  .product-content-category {
    color: $sonic-silver;
    font-size: $fs-5;
    font-weight: $weight-600;
    letter-spacing: 1px;
    transition: $transition-timing;
    margin-bottom: 8px;
    &:hover {
      color: $eerie-black;
      cursor: pointer;
    }
  }
  .product-content-title {
    color: $eerie-black;
    margin-bottom: 8px;
    &:hover {
      color: $salmon-pink;
    }
  }
  .price-box {
    display: flex;
    gap: 10px;
    font-size: $fs-5;
    color: $sonic-silver;
    margin-bottom: 8px;
    align-items: center;
    .price {
      font-size: $fs-2;
      font-weight: $weight-500;
      color: $eerie-black;
    }
  }
  .product-content-cart {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    select {
      display: block;
      min-width: 80px;
      padding: 5px 0;
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
  .add-group {
    display: flex;
    gap: 10px;
  }
  .add-like-btn {
    border: 1px solid $cultured;
    border-radius: 20%;
    height: 50%;
    display: flex;
    padding: 7px 10px;
    background: $eerie-black;
    color: $cultured;
    transition: $transition-timing;
    &:hover {
      background: $salmon-pink;
    }
  }
  .add-cart-btn {
    background: $salmon-pink;
    padding: 8px 15px;
    color: $white;
    font-weight: $fs-9;
    font-weight: $weight-500;
    text-transform: uppercase;
    border-radius: $border-radius-sm;
    margin-bottom: 30px;
    transition: $transition-timing;
    &:hover {
      background: $eerie-black;
    }
  }
  .product-content-detail {
    color: $eerie-black;
    margin-bottom: 8px;
    font-weight: $weight-600;
  }
}

@media (min-width: 1024px) {
  .product-flex {
    margin-top: 30px;
  }
  .product-content {
    width: 50%;
    padding: 6%;
    margin-top: 0px;
  }

  .product-flex {
    flex-direction: row;
  }
  .product-img {
    width: 50%;
    img {
      width: 100%;
    }
    .product-img-group {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      img {
        flex: 1;
        max-width: 22%;
        object-fit: cover;
      }
    }
  }
}
</style>
