<template>
  <div>
    <div class="overlay"></div>
  </div>
  <!-- modal -->
  <div class="modal" v-if="isActiveModal">
    <div class="modal-close-overlay" @click="toggleClass"></div>
    <div class="modal-content">
      <div class="modal-close-btn" @click="toggleClass">
        <Icon icon="typcn:delete" class="iconDelete" />
      </div>
      <div class="newsletter-img">
        <img
          src="~public/images/newsletter.png"
          alt="subscribe newsletter"
          width="400"
          height="400"
        />
      </div>
      <div class="newsletter">
        <form action="#">
          <div class="newsletter-header">
            <div class="newsletter-title">
              <h3 class="newsletter-title">接收最新消息</h3>
              <p class="newsletter-desc">
                訂閱我們品牌 - <b>Yushin </b
                ><br />我們有最新的優惠或活動時，第一時間將消息發送您的電子郵件！
              </p>
            </div>
            <input
              type="email"
              name="email"
              class="email-field"
              placeholder="電子郵件地址"
              required
            />
            <button type="submit" class="btn-newsletter">訂閱消息</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const isActiveModal = ref(true);

const toggleClass = () => {
  isActiveModal.value = !isActiveModal.value;
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  z-index: 15;
  transition: 0.5s ease;
}

.overlay.active {
  opacity: 1;
  pointer-events: all;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  z-index: 10;
  animation: popup 1s ease-in-out 5s forwards;
}

.iconDelete {
  width: 36px;
  height: 36px;
  color: hsl(353, 100%, 78%);
}

@keyframes popup {
  0% {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  100% {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
}

.modal-close-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.newsletter-img {
  display: none;
}

.modal-content {
  position: relative;
  max-width: 350px;
  margin: 20px;
  background: $white;
  border-radius: $border-radius-md;
  overflow: hidden;
  z-index: 2;
  animation: scaleUp 0.5s ease-in-out 5s forwards;
}

@keyframes scaleUp {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  &:hover {
    opacity: 0.8;
  }
}

.newsletter {
  padding: 50px 30px;
  text-align: center;
}

.newsletter-title {
  color: $onyx;
  font-size: $fs-2;
  font-weight: $weight-600;
  margin-bottom: 10px;
}

.newsletter-desc {
  color: $sonic-silver;
  font-size: $fs-5;
  line-height: 1.6;
  margin-bottom: 10px;
}

.email-field {
  font-style: $fs-7;
  padding: 8px 16px;
  border-radius: $border-radius-sm;
  border: 1px solid $cultured;
  margin-bottom: 16px;
}

.btn-newsletter {
  background: $eerie-black;
  color: $white;
  font-size: $fs-7;
  font-weight: $weight-500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 10px 15px;
  margin: auto;
  border-radius: $border-radius-sm;
  transition: $transition-timing;
  &:hover {
    background: $bittersweet;
  }
}

@media (min-width: 768px) {
  .modal-content {
    display: flex;
    align-items: center;
    max-width: 750px;
    width: fit-content;
  }
  .newsletter-img {
    display: block;
  }
  .newsletter {
    text-align: left;
  }
}
</style>
