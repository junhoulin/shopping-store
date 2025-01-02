<template>
    <header>
        <!-- header-top -->
        <div class="header-top">
            <div class="container">
                <ul class="header-social-container">
                <li>
                    <a href="#" class="social-link"></a>
                    <Icon icon="ic:baseline-facebook" />
                </li>
                <li>
                    <a href="#" class="social-link"></a>
                    <Icon icon="mdi:twitter" />
                </li>
                <li>
                    <a href="#" class="social-link"></a>
                    <Icon icon="ri:instagram-fill" />
                </li>
                <li>
                    <a href="#" class="social-link"></a>
                    <Icon icon="mdi:github" />
                </li>
                </ul>
                
                <div class="header-alert-news">
                    <p><b>Free Shopping</b>This week Order Over - $55</p>
                </div>
                <div class="header-top-actions">
                    <div class="currency">
                        <select name="currency" id="">
                            <option value="TWD">TWD&#20803</option>
                            <option value="USD">USD&dollar;</option>
                        </select>
                        <select name="language" id="">
                            <option value="chinese">中文</option>
                            <option value="english">English</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <!-- header-main -->
        <div class="header-main">
            <div class="container">
                <a href="#" class="header-logo">
                    <img src="~public/images/logo/logo.svg" alt="Yushin's logo" width="120px" height="36px">
                </a>
                <div class="header-search-container">
                    <input type="search" name="search" class="search-field" placeholder="輸入您想搜尋的產品.....">
                    <button class="search-btn">
                        <Icon icon="tabler:search"/>
                    </button>
                </div>
                <div class="header-user-actions">
                    <div class="action-btn">
                        <Icon icon="solar:user-bold" />
                    </div>
                    <div class="action-btn">
                        <Icon icon="mingcute:love-fill" />
                        <span class="count">0</span>
                    </div>
                    <div class="action-btn">
                        <Icon icon="material-symbols-light:shopping-bag" />
                        <span class="count">0</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- desktop-navigation-menu -->
        <nav class="desktop-navigation-menu">
            <div class="container">
                <ul class="desktop-menu-category-list">
                    <li class="menu-category">
                        <a href="" class="menu-title">主頁</a>
                    </li>
                    <li class="menu-category">
                        <a href="" class="menu-title">檢視類別</a>

                        <div class="-dropdown-panel">
                            <ul class="dropdown-panel-list">
                                <li class="menu-title"><a href="#">檢視類別</a></li>
                                <div class="panel-list-item"><a href="#">主頁</a></div>
                                <div class="panel-list-item"><a href="#">筆記型電腦</a></div>
                                <div class="panel-list-item"><a href="#">數位相機</a></div>
                                <div class="panel-list-item"><a href="#">五金百貨</a></div>
                                <div class="panel-list-item"><a href="#">生活用品</a></div>
                                <div class="panel-list-item">
                                    <a href="#">
                                        <img src="~/public/images/electronics-banner-1.jpg" alt="headphone" width="250px" height="119px">
                                    </a>
                                </div>
                            </ul>
                            <ul class="dropdown-panel-list">
                                <li class="menu-title"><a href="#">Men's</a></li>
                                <li class="panel-list-item"><a href="#">Formal</a></li>
                                <li class="panel-list-item"><a href="#">Casual</a></li>
                                <li class="panel-list-item"><a href="#">Sports</a></li>
                                <li class="panel-list-item"><a href="#">Jacket</a></li>
                                <li class="panel-list-item"><a href="#">Sunglasses</a></li>
                                <li class="panel-list-item">
                                    <img src="~/public/images/mens-banner.jpg" alt="image" width="250" height="119">
                                </li>
                            </ul>
                            <ul class="dropdown-panel-list">
                                <li class="menu-title"><a href="#">Women's</a></li>
                                <li class="panel-list-item"><a href="#">Formal</a></li>
                                <li class="panel-list-item"><a href="#">Casual</a></li>
                                <li class="panel-list-item"><a href="#">Perfume</a></li>
                                <li class="panel-list-item"><a href="#">Cosmetics</a></li>
                                <li class="panel-list-item"><a href="#">Bags</a></li>
                                <li class="panel-list-item">
                                    <img src="~/public/images/womens-banner.jpg" alt="image" width="250" height="119">
                                </li>
                            </ul>
                            <ul class="dropdown-panel-list">
                                <li class="menu-title"><a href="#">Electronics</a></li>
                                <li class="panel-list-item"><a href="#">Smart Watch</a></li>
                                <li class="panel-list-item"><a href="#">Smart TV</a></li>
                                <li class="panel-list-item"><a href="#">Keyboard</a></li>
                                <li class="panel-list-item"><a href="#">Mouse</a></li>
                                <li class="panel-list-item"><a href="#">Microphone</a></li>
                                <li class="panel-list-item">
                                    <img src="~/public/images/electronics-banner-2.jpg" alt="image" width="250" height="119">
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li class="menu-category">
                        <a href="" class="menu-title">男生</a>
                        <ul class="dropdown-list">
                            <li class="dropdown-item"><a href="#">Shirt</a></li>
                            <li class="dropdown-item"><a href="#">Shorts & Jeans</a></li>
                            <li class="dropdown-item"><a href="#">Safety Shoes</a></li>
                            <li class="dropdown-item"><a href="#">Wallet</a></li>
                        </ul>
                    </li>
                    <li class="menu-category">
                        <a href="#" class="menu-title">女生</a>

                        <ul class="dropdown-list">
                            <li class="dropdown-item"><a href="#">Dress & Frock</a></li>
                            <li class="dropdown-item"><a href="#">Earrings</a></li>
                            <li class="dropdown-item"><a href="#">Necklace</a></li>
                            <li class="dropdown-item"><a href="#">Makeup Kit</a></li>
                        </ul>
                    </li>
                    <li class="menu-category">
                        <a href="#" class="menu-title">Jewelyr</a>

                        <ul class="dropdown-list">
                            <li class="dropdown-item"><a href="#">Earrings</a></li>
                            <li class="dropdown-item"><a href="#">Couple Rings</a></li>
                            <li class="dropdown-item"><a href="#">Necklace</a></li>
                            <li class="dropdown-item"><a href="#">Bracelets</a></li>
                        </ul>
                    </li>
                    <li class="menu-category">
                        <a href="#" class="menu-title">Perfume</a>

                        <ul class="dropdown-list">
                            <li class="dropdown-item"><a href="#">Clothes Perfume</a></li>
                            <li class="dropdown-item"><a href="#">Deodorant</a></li>
                            <li class="dropdown-item"><a href="#">Flower Fragrance</a></li>
                            <li class="dropdown-item"><a href="#">Air Freshener</a></li>
                        </ul>
                    </li>
                    <li class="menu-category">
                        <a href="#" class="menu-title">Blog</a>
                    </li>
                    <li class="menu-category">
                        <a href="#" class="menu-title">Hot Offers</a>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- mobile-bottom-navigation -->
        <div class="mobile-bottom-navigation">
            <button class="action-btn" @click="toggleMobileNav('list1')">
                <Icon icon="gg:menu-round"/>
            </button>
            <button class="action-btn">
                <Icon icon="material-symbols-light:shopping-bag"/>
                <span class="count">0</span>
            </button>
            <button class="action-btn">
                <Icon icon="mingcute:love-fill"/>
                <span class="count">0</span>
            </button>
            <button class="action-btn" @click="toggleMobileNav('list4')">
                <Icon icon="mynaui:grid"/>
            </button>
        </div>
        <!-- mobile-navigation-menu -->
        <nav class="mobile-navigation-menu has-scrollbar" :class="{ active: isActive.list1 }">
            <!-- mobile-navigation-menu-top -->
            <div class="menu-top">
                <div class="menu-title">Menu</div>
                <button class="menu-close-btn" @click="toggleMobileNav('list1')">
                    <Icon icon="material-symbols:close" />
                </button>
            </div>
            <!-- mobile-navigation-menu-list -->
            <ul class="mobile-menu-category-list">
                <li class="menu-category">
                    <a href="#" class="menu-title">Home</a>
                </li>
                <li class="menu-category">
                    <button class="accordion-menu" @click="toggleNavMenu('list1')">
                        <p class="menu-title">Men's</p>
                        <div>
                            <Icon icon="material-symbols:add" class="add-icon" v-if="!activeMenu.list1" />
                            <Icon icon="material-symbols:remove" class="remove-icon" v-else />
                        </div>
                    </button>
                    <ul class="submenu-category-list" :class="{ active: activeMenu.list1}">
                        <li class="submenu-category"><a href="#" class="submenu-title">Shirt</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Short & Jeans</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Safety Shoes</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Wallet</a></li>
                    </ul>
                </li>
                <li class="menu-category">
                    <button class="accordion-menu" @click="toggleNavMenu('list2')">
                        <p class="menu-title">Women's</p>

                        <div>
                            <Icon icon="material-symbols:add" class="add-icon" v-if="!activeMenu.list2" />
                            <Icon icon="material-symbols:remove" class="remove-icon" v-else />
                        </div>
                    </button>

                    <ul class="submenu-category-list" :class="{ active: activeMenu.list2}">
                        <li class="submenu-category"><a href="#" class="submenu-title">Dress & Frock</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Earrings</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Necklace</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Makeup Kit</a></li>
                    </ul>
                </li>
                <li class="menu-category">
                    <button class="accordion-menu" @click="toggleNavMenu('list3')">
                        <p class="menu-title">Jewelyr</p>

                        <div>
                            <Icon icon="material-symbols:add" class="add-icon" v-if="!activeMenu.list3" />
                            <Icon icon="material-symbols:remove" class="remove-icon" v-else />
                        </div>
                    </button>

                    <ul class="submenu-category-list" :class="{ active: activeMenu.list3}">
                        <li class="submenu-category"><a href="#" class="submenu-title">Earrings</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Couple Rings</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Necklace</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Bracelets</a></li>
                    </ul>
                </li>
                <li class="menu-category">
                    <button class="accordion-menu" @click="toggleNavMenu('list4')">
                        <p class="menu-title">Perfume</p>

                        <div>
                            <Icon icon="material-symbols:add" class="add-icon" v-if="!activeMenu.list4" />
                            <Icon icon="material-symbols:remove" class="remove-icon" v-else />
                        </div>
                    </button>

                    <ul class="submenu-category-list" :class="{ active: activeMenu.list4}">
                        <li class="submenu-category"><a href="#" class="submenu-title">Clothes Perfume</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Deodorant</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Flower Fragrance</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Air Freshener</a></li>
                    </ul>
                </li>
                <li class="menu-category"><a href="#" class="menu-title">Blog</a></li>
                <li class="menu-category"><a href="#" class="menu-title">Hot Offers</a></li>
            </ul>
            <!-- mobile-navigation-menu-bottom -->
            <div class="menu-bottom">
                <ul class="menu-category-list">
                    <li class="menu-category">
                        <button class="accordion-menu" @click="toggleNavMenu('list5')">
                            <p class="menu-title">Language</p>
                            <Icon icon="ion:caret-back" class="caret-back" :class="{ active: activeMenu.list5}" />
                        </button>

                        <ul class="submenu-category-list" :class="{ active: activeMenu.list5}">
                            <li class="submenu-category"><a href="#" class="submenu-title">English</a></li>
                            <li class="submenu-category"><a href="#" class="submenu-title">Espa</a></li>
                            <li class="submenu-category"><a href="#" class="submenu-title">French</a></li>
                        </ul>
                    </li>

                    <li class="menu-category">
                        <button class="accordion-menu" @click="toggleNavMenu('list6')">
                            <p class="menu-title">Currency</p>
                            <Icon icon="ion:caret-back" class="caret-back" :class="{ active: activeMenu.list6}" />
                        </button>

                        <ul class="submenu-category-list" :class="{ active: activeMenu.list6}">
                            <li class="submenu-category"><a href="#" class="submenu-title">USD </a></li>
                            <li class="submenu-category"><a href="#" class="submenu-title">EUR </a></li>
                        </ul>
                    </li>
                </ul>

                <ul class="menu-social-container">
                    <li><a href="#" class="social-link"><Icon icon="ic:baseline-facebook" /></a></li>
                    <li><a href="#" class="social-link"><Icon icon="mdi:twitter" /></a></li>
                    <li><a href="#" class="social-link"><Icon icon="ri:instagram-fill" /></a></li>
                    <li><a href="#" class="social-link"><Icon icon="mdi:github" /></a></li>
                </ul>
            </div>
        </nav>
        <!-- sidebar -->
        <sidebar :is-active-list4="isActive.list4"  @update:isActiveList4="updateIsActiveList4"/>
    </header>
</template>

<script setup>
//控制底下導覽列按鈕的視窗
const isActive = reactive({
    list1: false,
    list2: false,
    list3: false,
    list4: false,
});
const toggleMobileNav = (menu) => {
    isActive[menu] = !isActive[menu];
};
const updateIsActiveList4 = (newValue) => {
  isActive.list4 = newValue;
};
//控制第一個按鈕視窗裡面的元素動畫
const activeMenu = reactive({
    list1: false,
    list2: false,
    list3: false,
    list4: false,
    list5: false,
    list6: false,
});

const toggleNavMenu = (menu) => {
    activeMenu[menu] = !activeMenu[menu];
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.header-top,
.header-user-actions,
.desktop-navigation-menu {
    display: none;
}

// header-main
.header-main {
    padding: 20px 0;
    border-bottom: 1px solid $cultured ;
}

.header-logo {
    margin-bottom: 15px;
    img {
        margin: auto;
    }
}

.header-search-container {
    position: relative;
    .search-field {
        font-size: $fs-7;
        color: $onyx;
        padding: 10px 15px;
        padding-right: 50px;
        border: 1px solid $cultured;
        border-radius: $border-radius-md;
    }
}

.search-field::-webkit-search-cancel-button {
  display: none; /* 隱藏內建的清除按鈕 */
}

.search-btn {
    background: $white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2px;
    color: $onyx;
    font-size: 22px;
    padding: 2px 15px;
    border-radius: $border-radius-md;
    transition: color $transition-timing;
    &:hover {
        color: $salmon-pink;
    }
}

.mobile-bottom-navigation {
    background-color: $white;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    max-width: 500px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
    z-index: 5;
    .action-btn {
        position: relative;
        font-size: 30px;
    }
    .count {
        background: $bittersweet;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 12px;
        font-weight: $weight-500;
        line-height: 1;
        padding: 2px 4px;
        border-radius: 20px;
    }
}

.mobile-navigation-menu {
    background: $white;
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 320px;
    height: 100vh;
    padding: 20px;
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
    overflow-y: scroll;
    overscroll-behavior: contain;
    transition: 0.5s ease;
    z-index: 6;
    left: -100%;
    visibility: hidden;
    &.active {
        left: 0;
        visibility: visible;
    }
}

.menu-top {
    padding-bottom: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid $cultured;
    .menu-title {
        font-size: $fs-4;
        color: $salmon-pink;
        font-weight: $weight-600;
    }
    .menu-close-btn {
        color: $eerie-black;
        font-size: 22px;
    }
}

.mobile-menu-category-list {
    margin-bottom: 30px;
    .menu-category {
        border-bottom: 1px solid $cultured;
    }
    .menu-title {
        color: $onyx;
        font-size: $fs-6;
        font-weight: $weight-500;
        padding: 12px 0;
    }
}

.menu-category .accordion-menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-category .submenu-category-list { 
    margin-left: 10px;
}

.accordion-menu > div { 
    font-size: 15px;
    color: $onyx;
}

.submenu-title {
  padding: 6px 0;
  font-size: $fs-6;
  color: $sonic-silver;
  font-weight: $weight-300;
  &:hover {
    color: $davys-gray;
  }
}

.submenu-category-list {
  visibility: hidden;
  max-height: 0;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  &.active{
    max-height: 148px;
    visibility: visible;
  }
}

.menu-bottom {
    .menu-category-list{
        margin-bottom: 20px;
    }
    .menu-category { 
        border-bottom: none;
    }
    .menu-title {
        font-size: $fs-6;
        font-weight: $weight-500;
        color: $eerie-black;
        padding: 12px 0;
    }
    .submenu-category-list {
        border: 1px solid $cultured;
        border-radius: $border-radius-md;
        padding: 0 15px;
        margin-left: 0;
        box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.05);
    }
    .submenu-category:not(:last-child) {
        border-bottom: 1px solid $cultured;
    }
}

.caret-back {
    &.active{
        transform: rotate(-90deg);
    }  
}

.menu-social-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  .social-link {
    font-size: 20px;
    padding: 7px 10px;
    border-radius: $border-radius-md;
    background: $cultured;
    color: $eerie-black;
  }
}


</style>
