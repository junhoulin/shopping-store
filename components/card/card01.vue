<template>
  <div class="container">
    <div class="testimonials-box">
      <div class="cta-container">
        <img src="~public/images/cta-banner.jpg" alt="" class="cta-banner">
        <a href="#" class="cta-content">
          <p class="discount">25% discount</p>
          <h2 class="cta-title">Summer collection</h2>
          <p class="cta-text">String @ $10</p>
          <button class="cta-btn">Shop now</button>
        </a>
      </div>
    </div>
  </div>
</template>~

<script setup>
</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.testimonials-box {
  margin-bottom: 50px;
}

.cta-container {
  position: relative;
  aspect-ratio: 5 / 6;
  border-radius: $border-radius-md;
  overflow: hidden;
  margin-bottom: 25px;
}

.cta-banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cta-content {
    background: hsla(0, 0%, 100%, .7);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    padding: 15px 20px;
    text-align: center;
    border-radius: $border-radius-sm;
}

.discount {
  background: $eerie-black;
  color: $white;
  font-size: $fs-11;
  font-weight: $weight-600;
  text-transform: uppercase;
  width: max-content;
  margin: auto;
  padding: 0 5px;
  border-radius: $border-radius-sm;
  margin-bottom: 5px;
}

.cta-title {
  color: $onyx;
  font-size: $fs-5;
  text-transform: capitalize;
  margin-bottom: 5px;
}

.cta-text {
  color: $sonic-silver;
  font-size: $fs-7;
  margin-bottom: 5px;
}

.cta-btn {
  font-size: $fs-9;
  color: $sonic-silver;
  text-transform: uppercase;
  font-weight: $weight-700;
  margin: auto;
}


</style>
