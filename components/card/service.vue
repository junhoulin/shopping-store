<template>
  <div class="container">
    <div class="testimonials-box">
      <div class="service">
        <h2 class="title">Our Services</h2>
        <div class="service-container">
          <a href="#" class="service-item">
            <div class="service-icon">
              <Icon icon="mdi:car-outline" />
            </div>

            <div class="service-content">
              <h3 class="service-title">Worldwide Delivery</h3>
              <p class="service-desc">For Order Over $100</p>
            </div>
          </a>

          <a href="#" class="service-item">
            <div class="service-icon">
              <Icon icon="mdi:car-outline" />
            </div>

            <div class="service-content">
              <h3 class="service-title">Next Day Delivery</h3>
              <p class="service-desc">UK Orders Only</p>
            </div>
          </a>

          <a href="#" class="service-item">
            <div class="service-icon">
              <Icon icon="tdesign:call" />
            </div>

            <div class="service-content">
              <h3 class="service-title">Best Online Support</h3>
              <p class="service-desc">Hours: 8AM - 11PM</p>
            </div>
          </a>

          <a href="#" class="service-item">
            <div class="service-icon">
              <Icon icon="solar:box-linear" />
            </div>

            <div class="service-content">
              <h3 class="service-title">Return Policy</h3>
              <p class="service-desc">Easy & Free Return</p>
            </div>
          </a>

          <a href="#" class="service-item">
            <div class="service-icon">
              <Icon icon="tabler:ticket" />
            </div>

            <div class="service-content">
              <h3 class="service-title">30% Money Back</h3>
              <p class="service-desc">For Order Over $100</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *;

.service-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px 15px;
  border: 1px solid $cultured;
  border-radius: $border-radius-md;
}

.title {
  color: $eerie-black;
  font-size: $fs-5;
  font-weight: $weight-600;
  letter-spacing: 0.4px;
  text-transform: capitalize;
  padding-bottom: 10px;
  border-bottom: 1px solid $cultured;
  margin-bottom: 30px;
}

.testimonials-box {
  margin-bottom: 50px;
}

.service-item {
  min-width: 190px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.service-icon {
  font-size: 35px;
  color: $salmon-pink;
  transition: $transition-timing;
  &:hover {
    color: $eerie-black;
  }
}

.service-title {
  color: $sonic-silver;
  font-size: $fs-7;
  font-weight: $weight-600;
  text-transform: capitalize;
  margin-bottom: 5px;
}

.service-desc {
  color: $sonic-silver;
  font-size: $fs-9;
}
</style>
