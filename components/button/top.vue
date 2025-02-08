<template>
  <div class="topbutton">
    <Icon
      class="topbutton"
      v-show="showButton"
      @click="scrollToTop"
      icon="si:arrow-upward-circle-fill"
    />
  </div>
</template>

<script setup>
const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 100; // 只有滾動超過 100px 才顯示按鈕
};
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;
.topbutton {
  width: 42px;
  height: 42px;
  position: fixed;
  bottom: 80px;
  right: 30px;
  z-index: 10;
  color: $bittersweet;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
}

@media (min-width: 900px) {
  .topbutton {
    bottom: 40px;
  }
}
</style>
