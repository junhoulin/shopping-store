<template>
    <Modal />
    <header>
        <!-- header-top -->
        <div class="header-top">
            <div class="container">
                <ul class="header-social-container">
                <li>
                    <a href="#" class="social-link"></a>
                    <Icon icon="ic:baseline-facebook" width="24" height="24"  style="color: #793434" />
                </li>
                <li>
                    <a href="#" class="social-link"></a>
                    <Icon icon="mdi:twitter" width="24" height="24"  style="color: #793434" />
                </li>
                <li>
                    <a href="#" class="social-link"></a>
                    <Icon icon="ri:instagram-fill" width="24" height="24"  style="color: #793434" />
                </li>
                <li>
                    <a href="#" class="social-link"></a>
                    <Icon icon="mdi:github" width="24" height="24"  style="color: #793434" />
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
                        <Icon icon="tabler:search" width="24" height="24"  style="color: #793434" />
                    </button>
                </div>
                <div class="header-user-actions">
                    <div class="action-btn">
                        <Icon icon="solar:user-bold" width="24" height="24"  style="color: #793434" />
                    </div>
                    <div class="action-btn">
                        <Icon icon="mingcute:love-fill" width="24" height="24"  style="color: #793434" />
                        <span class="count">0</span>
                    </div>
                    <div class="action-btn">
                        <Icon icon="material-symbols-light:shopping-bag" width="24" height="24"  style="color: #793434" />
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
            <button class="action-btn">
                <Icon icon="gg:menu-round" width="24" height="24"  style="color: #793434" />
            </button>
            <button class="action-btn">
                <Icon icon="material-symbols-light:shopping-bag" width="24" height="24"  style="color: #793434" />
                <span class="count">0</span>
            </button>
            <button class="action-btn">
                <Icon icon="mingcute:love-fill" width="24" height="24"  style="color: #793434" />
                <span class="count">0</span>
            </button>
            <button class="action-btn">
                <Icon icon="mynaui:grid" width="24" height="24"  style="color: #793434" />
            </button>
        </div>
        <!-- mobile-navigation-menu -->
        <nav class="mobile-navigation-menu has-scrollbalar">
            <!-- mobile-navigation-menu-top -->
            <div class="menu-top">
                <div class="menu-title">Menu</div>
                <button class="menu-close-btn">
                    <Icon icon="material-symbols:close" width="24" height="24"  style="color: #793434" />
                </button>
            </div>
            <!-- mobile-navigation-menu-list -->
            <ul class="mobile-menu-category-list">
                <li class="menu-category">
                    <a href="#" menu-title>Home</a>
                </li>
                <li class="menu-category">
                    <button class="accordion-menu" data-accordion-btn>
                        <p class="menu-title">Men's</p>

                        <div>
                            <Icon icon="material-symbols:add" width="24" height="24"  style="color: #793434" />
                            <Icon icon="material-symbols:remove" width="24" height="24"  style="color: #793434" />
                        </div>
                    </button>
                    <ul class="submenu-category-list " data-accordion>
                        <li class="submenu-category"><a href="#" class="submenu-title">Shirt</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Short & Jeans</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Safety Shoes</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Wallet</a></li>
                    </ul>
                </li>
                <li class="menu-category">
                    <button class="accordion-menu" data-accordion-btn>
                        <p class="menu-title">Women's</p>

                        <div>
                            <Icon icon="material-symbols:add" width="24" height="24"  style="color: #793434" />
                            <Icon icon="material-symbols:remove" width="24" height="24"  style="color: #793434" />
                        </div>
                    </button>

                    <ul class="submenu-category-list" data-accordion>
                        <li class="submenu-category"><a href="#" class="submenu-title">Dress & Frock</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Earrings</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Necklace</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Makeup Kit</a></li>
                    </ul>
                </li>
                <li class="menu-category">
                    <button class="accordion-menu" data-accordion-btn>
                        <p class="menu-title">Jewelyr</p>

                        <div>
                            <Icon icon="material-symbols:add" width="24" height="24"  style="color: #793434" />
                            <Icon icon="material-symbols:remove" width="24" height="24"  style="color: #793434" />
                        </div>
                    </button>

                    <ul class="submenu-category-list" data-accordion>
                        <li class="submenu-category"><a href="#" class="submenu-title">Earrings</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Couple Rings</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Necklace</a></li>
                        <li class="submenu-category"><a href="#" class="submenu-title">Bracelets</a></li>
                    </ul>
                </li>
                <li class="menu-category">
                    <button class="accordion-menu" data-accordion-btn>
                        <p class="menu-title">Perfume</p>

                        <div>
                            <Icon icon="material-symbols:add" width="24" height="24"  style="color: #793434" />
                            <Icon icon="material-symbols:remove" width="24" height="24"  style="color: #793434" />
                        </div>
                    </button>

                    <ul class="submenu-category-list" data-accordion>
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
                        <button class="accordion-menu ">
                            <p class="menu-title">Language</p>
                            <Icon icon="ion:caret-back" width="24" height="24"  style="color: #793434" />
                        </button>

                        <ul class="submenu-category-list ">
                            <li class="submenu-category"><a href="#" class="submenu-title">English</a></li>
                            <li class="submenu-category"><a href="#" class="submenu-title">Espa</a></li>
                            <li class="submenu-category"><a href="#" class="submenu-title">French</a></li>
                        </ul>
                    </li>

                    <li class="menu-category">
                        <button class="accordion-menu">
                            <p class="menu-title">Currency</p>
                            <Icon icon="ion:caret-back" width="24" height="24"  style="color: #793434" />
                        </button>

                        <ul class="submenu-category-list">
                            <li class="submenu-category"><a href="#" class="submenu-title">USD </a></li>
                            <li class="submenu-category"><a href="#" class="submenu-title">EUR </a></li>
                        </ul>
                    </li>
                </ul>

                <ul class="menu-social-container">
                    <li><a href="#" class="social-link"><Icon icon="ic:baseline-facebook" width="24" height="24"  style="color: #793434" /></a></li>
                    <li><a href="#" class="social-link"><Icon icon="mdi:twitter" width="24" height="24"  style="color: #793434" /></a></li>
                    <li><a href="#" class="social-link"><Icon icon="ri:instagram-fill" width="24" height="24"  style="color: #793434" /></a></li>
                    <li><a href="#" class="social-link"><Icon icon="mdi:github" width="24" height="24"  style="color: #793434" /></a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>

</script>

<style scoped>

</style>
