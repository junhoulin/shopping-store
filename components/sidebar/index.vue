<template>
  <div class="product-container">
    <div class="container">
      <div
        class="sidebar has-scrollbar"
        :class="{ active: props.isActiveList4 }"
      >
        <div class="sidebar-category">
          <div class="sidebar-top">
            <h2 class="sidebar-title">Category</h2>
            <button class="sidebar-close-btn" @click="updateList4">
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <ul class="sidebar-menu-category-list">
            <li class="sidebar-menu-category">
              <button
                class="sidebar-accordion-menu"
                @click="toggleNavMenu('list1')"
              >
                <div class="menu-title-flex">
                  <img
                    src="~public/images/icons/dress.svg"
                    alt="clothes"
                    class="menu-title-img"
                    width="20"
                    height="20"
                  />
                  <p class="menu-title">Clothes</p>
                </div>
                <div>
                  <Icon
                    icon="material-symbols:add"
                    class="add-icon"
                    v-if="!activeMenu.list1"
                  />
                  <Icon
                    icon="material-symbols:remove"
                    class="remove-icon"
                    v-else
                  />
                </div>
              </button>
              <ul
                class="sidebar-submenu-category-list"
                :class="{ active: activeMenu.list1 }"
              >
                <li class="sidebar-submenu-category">
                  <a href="" class="sidebar-submenu-title">
                    <p class="product-name">Shirt</p>
                    <data value="300" class="stock" title="Available Stock"
                      >300</data
                    >
                  </a>
                </li>
                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Shorts & Jeans</p>
                    <data value="60" class="stock" title="Available Stock"
                      >60</data
                    >
                  </a>
                </li>
                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Jacket</p>
                    <data value="50" class="stock" title="Available Stock"
                      >50</data
                    >
                  </a>
                </li>
                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Dress & Frock</p>
                    <data value="87" class="stock" title="Available Stock"
                      >87</data
                    >
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-menu-category">
              <button
                class="sidebar-accordion-menu"
                @click="toggleNavMenu('list2')"
              >
                <div class="menu-title-flex">
                  <img
                    src="~public/images/icons/shoes.svg"
                    alt="footwear"
                    class="menu-title-img"
                    width="20"
                    height="20"
                  />
                  <p class="menu-title">Footwear</p>
                </div>
                <div>
                  <Icon
                    icon="material-symbols:add"
                    class="add-icon"
                    v-if="!activeMenu.list2"
                  />
                  <Icon
                    icon="material-symbols:remove"
                    class="remove-icon"
                    v-else
                  />
                </div>
              </button>

              <ul
                class="sidebar-submenu-category-list"
                :class="{ active: activeMenu.list2 }"
              >
                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Sports</p>
                    <data value="45" class="stock" title="Available Stock"
                      >45</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Formal</p>
                    <data value="75" class="stock" title="Available Stock"
                      >75</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Casual</p>
                    <data value="35" class="stock" title="Available Stock"
                      >35</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Safety Shoes</p>
                    <data value="26" class="stock" title="Available Stock"
                      >26</data
                    >
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-menu-category">
              <button
                class="sidebar-accordion-menu"
                @click="toggleNavMenu('list3')"
              >
                <div class="menu-title-flex">
                  <img
                    src="~public/images/icons/jewelry.svg"
                    alt="footwear"
                    class="menu-title-img"
                    width="20"
                    height="20"
                  />
                  <p class="menu-title">jewelry</p>
                </div>
                <div>
                  <Icon
                    icon="material-symbols:add"
                    class="add-icon"
                    v-if="!activeMenu.list3"
                  />
                  <Icon
                    icon="material-symbols:remove"
                    class="remove-icon"
                    v-else
                  />
                </div>
              </button>

              <ul
                class="sidebar-submenu-category-list"
                :class="{ active: activeMenu.list3 }"
              >
                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Sports</p>
                    <data value="45" class="stock" title="Available Stock"
                      >45</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Formal</p>
                    <data value="75" class="stock" title="Available Stock"
                      >75</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Casual</p>
                    <data value="35" class="stock" title="Available Stock"
                      >35</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Safety Shoes</p>
                    <data value="26" class="stock" title="Available Stock"
                      >26</data
                    >
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-menu-category">
              <button
                class="sidebar-accordion-menu"
                @click="toggleNavMenu('list4')"
              >
                <div class="menu-title-flex">
                  <img
                    src="~public/images/icons/Perfume.svg"
                    alt="footwear"
                    class="menu-title-img"
                    width="20"
                    height="20"
                  />
                  <p class="menu-title">Perfume</p>
                </div>
                <div>
                  <Icon
                    icon="material-symbols:add"
                    class="add-icon"
                    v-if="!activeMenu.list4"
                  />
                  <Icon
                    icon="material-symbols:remove"
                    class="remove-icon"
                    v-else
                  />
                </div>
              </button>

              <ul
                class="sidebar-submenu-category-list"
                :class="{ active: activeMenu.list4 }"
              >
                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Sports</p>
                    <data value="45" class="stock" title="Available Stock"
                      >45</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Formal</p>
                    <data value="75" class="stock" title="Available Stock"
                      >75</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Casual</p>
                    <data value="35" class="stock" title="Available Stock"
                      >35</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Safety Shoes</p>
                    <data value="26" class="stock" title="Available Stock"
                      >26</data
                    >
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-menu-category">
              <button
                class="sidebar-accordion-menu"
                @click="toggleNavMenu('list5')"
              >
                <div class="menu-title-flex">
                  <img
                    src="~public/images/icons/Cosmetics.svg"
                    alt="footwear"
                    class="menu-title-img"
                    width="20"
                    height="20"
                  />
                  <p class="menu-title">Cosmetics</p>
                </div>
                <div>
                  <Icon
                    icon="material-symbols:add"
                    class="add-icon"
                    v-if="!activeMenu.list5"
                  />
                  <Icon
                    icon="material-symbols:remove"
                    class="remove-icon"
                    v-else
                  />
                </div>
              </button>

              <ul
                class="sidebar-submenu-category-list"
                :class="{ active: activeMenu.list5 }"
              >
                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Sports</p>
                    <data value="45" class="stock" title="Available Stock"
                      >45</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Formal</p>
                    <data value="75" class="stock" title="Available Stock"
                      >75</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Casual</p>
                    <data value="35" class="stock" title="Available Stock"
                      >35</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Safety Shoes</p>
                    <data value="26" class="stock" title="Available Stock"
                      >26</data
                    >
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-menu-category">
              <button
                class="sidebar-accordion-menu"
                @click="toggleNavMenu('list6')"
              >
                <div class="menu-title-flex">
                  <img
                    src="~public/images/icons/Glasses.svg"
                    alt="footwear"
                    class="menu-title-img"
                    width="20"
                    height="20"
                  />
                  <p class="menu-title">Glasses</p>
                </div>
                <div>
                  <Icon
                    icon="material-symbols:add"
                    class="add-icon"
                    v-if="!activeMenu.list6"
                  />
                  <Icon
                    icon="material-symbols:remove"
                    class="remove-icon"
                    v-else
                  />
                </div>
              </button>

              <ul
                class="sidebar-submenu-category-list"
                :class="{ active: activeMenu.list6 }"
              >
                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Sports</p>
                    <data value="45" class="stock" title="Available Stock"
                      >45</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Formal</p>
                    <data value="75" class="stock" title="Available Stock"
                      >75</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Casual</p>
                    <data value="35" class="stock" title="Available Stock"
                      >35</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Safety Shoes</p>
                    <data value="26" class="stock" title="Available Stock"
                      >26</data
                    >
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-menu-category">
              <button
                class="sidebar-accordion-menu"
                @click="toggleNavMenu('list7')"
              >
                <div class="menu-title-flex">
                  <img
                    src="~public/images/icons/Bag.svg"
                    alt="footwear"
                    class="menu-title-img"
                    width="20"
                    height="20"
                  />
                  <p class="menu-title">Bags</p>
                </div>
                <div>
                  <Icon
                    icon="material-symbols:add"
                    class="add-icon"
                    v-if="!activeMenu.list7"
                  />
                  <Icon
                    icon="material-symbols:remove"
                    class="remove-icon"
                    v-else
                  />
                </div>
              </button>

              <ul
                class="sidebar-submenu-category-list"
                :class="{ active: activeMenu.list7 }"
              >
                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Sports</p>
                    <data value="45" class="stock" title="Available Stock"
                      >45</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Formal</p>
                    <data value="75" class="stock" title="Available Stock"
                      >75</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Casual</p>
                    <data value="35" class="stock" title="Available Stock"
                      >35</data
                    >
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Safety Shoes</p>
                    <data value="26" class="stock" title="Available Stock"
                      >26</data
                    >
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="product-showcase">
          <h3 class="showcase-heading">best sellers</h3>
          <div class="showcase-wrapper">
            <div class="showcase-container">
              <div class="showcase">
                <a href="#" class="showcase-img-box">
                  <img
                    src="~public/images/products/1.jpg"
                    alt="baby fabric shoes"
                    class="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>
                <div class="showcase-content">
                  <a href="#">
                    <h4 class="showcase-title">baby fabric shoes</h4>
                  </a>
                  <div class="showcase-rating">
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                  </div>
                  <div class="price-box">
                    <del>$5.00</del>
                    <p class="price">4.00</p>
                  </div>
                </div>
              </div>
              <div class="showcase">
                <a href="#" class="showcase-img-box">
                  <img
                    src="~public/images/products/2.jpg"
                    alt="baby fabric shoes"
                    class="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>
                <div class="showcase-content">
                  <a href="#">
                    <h4 class="showcase-title">Men's hoodies t-shirt</h4>
                  </a>
                  <div class="showcase-rating">
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                  </div>
                  <div class="price-box">
                    <del>$5.00</del>
                    <p class="price">4.00</p>
                  </div>
                </div>
              </div>
              <div class="showcase">
                <a href="#" class="showcase-img-box">
                  <img
                    src="~public/images/products/3.jpg"
                    alt="baby fabric shoes"
                    class="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>
                <div class="showcase-content">
                  <a href="#">
                    <h4 class="showcase-title">Girls t-shirt</h4>
                  </a>
                  <div class="showcase-rating">
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                  </div>
                  <div class="price-box">
                    <del>$5.00</del>
                    <p class="price">4.00</p>
                  </div>
                </div>
              </div>
              <div class="showcase">
                <a href="#" class="showcase-img-box">
                  <img
                    src="~public/images/products/4.jpg"
                    alt="baby fabric shoes"
                    class="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>
                <div class="showcase-content">
                  <a href="#">
                    <h4 class="showcase-title">Woolen hat for men</h4>
                  </a>
                  <div class="showcase-rating">
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                    <Icon icon="material-symbols:star-rounded" />
                  </div>
                  <div class="price-box">
                    <del>$5.00</del>
                    <p class="price">4.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//底下導覽列打開關閉
const emit = defineEmits();
const props = defineProps({
  isActiveList4: {
    type: Boolean,
    required: true,
  },
});
const updateList4 = () => {
  emit("update:isActiveList4", false);
};
//視窗的選項動畫
//控制第一個按鈕視窗裡面的元素動畫
const activeMenu = reactive({
  list1: false,
  list2: false,
  list3: false,
  list4: false,
  list5: false,
  list6: false,
  list7: false,
});
const toggleNavMenu = (menu) => {
  activeMenu[menu] = !activeMenu[menu];
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.sidebar {
  background: $white;
  position: fixed;
  top: 0;
  left: -100%;
  bottom: 0;
  max-width: 320px;
  width: 100%;
  padding: 30px;
  overflow: scroll;
  overscroll-behavior: contain;
  visibility: hidden;
  transition: 0.5s ease;
  z-index: 20;
  &.active {
    left: 0;
    visibility: visible;
  }
}

.sidebar-category {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid $cultured;
  .sidebar-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .sidebar-title {
    color: $onyx;
    font-size: $fs-5;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: $weight-600;
  }
  .sidebar-close-btn {
    color: $eerie-black;
    font-size: 22px;
    font-weight: $weight-600;
  }
}

.sidebar-accordion-menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  .add-icon,
  .remove-icon {
    color: $sonic-silver;
    font-size: 14px;
  }
  .menu-title-flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .menu-title {
    font-size: $fs-5;
    color: $sonic-silver;
    font-weight: $weight-500;
  }
}

.sidebar-submenu-category-list {
  border-top: 1px solid $cultured;
  max-height: 0;
  overflow: hidden;
  visibility: hidden;
  transition: 0.5s ease-in-out;
  &.active {
    max-height: 200px;
    visibility: visible;
    padding: 13px 0 8px;
  }
  .sidebar-submenu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $sonic-silver;
    font-size: $fs-7;
    padding: 2px 0;
    &:hover {
      color: $eerie-black;
    }
  }
}

.showcase-heading {
  font-size: $fs-5;
  font-weight: $weight-600;
  color: $onyx;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 15px;
}
.showcase {
  display: flex;
  align-items: center;
  gap: 15px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  .showcase-img {
    border-radius: $border-radius-sm;
  }
  .showcase-content {
    width: calc(100% - 90px);
  }
  .showcase-title {
    color: $onyx;
    font-size: $fs-7;
    font-weight: $weight-400;
    text-transform: capitalize;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    letter-spacing: 0.5px;
  }
  .showcase-rating {
    display: flex;
    align-items: center;
    color: $sandy-brown;
    font-size: 13px;
    padding: 4px 0;
  }
  .price-box {
    display: flex;
    align-items: center;
    gap: 15px;
    del {
      color: $sonic-silver;
      font-size: 13px;
    }
    .price {
      font-size: $fs-7;
      font-weight: $weight-600;
      color: $davys-gray;
    }
  }
}
</style>
