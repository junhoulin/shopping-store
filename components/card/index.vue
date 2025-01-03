<template>
<!-- 感言 -->
  <div class="container">
    <div class="testimonials-box">
      <div class="testimonial">
        <h2 class="title">testimonial</h2>
        <div class="testimonial-card">
          <img src="~public/images/testimonial-1.jpg"
          alt="alan doe" class="testimonial-banner">
          <p class="testimonial-name">JIM LIN</p>
          <p class="testimonial-title">CEO & Founder </p>
          <img src="https://i.postimg.cc/QCSxhM8W/quotes.png" alt="" class="quotation-img" width="26">
          <p class="testimonial-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos esse laboriosam quaerat. Perspiciatis, suscipit sint, atque earum cum dicta, dolore magnam rem
            repellendus facere animi ab! A officia eos architecto.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as *; 


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

.testimonial-card {
  padding: 30px 20px;
  border: 1px solid $cultured;
  border-radius: $border-radius-md;
  text-align: center;
  margin-bottom: 25px;
}

.testimonial-banner {
  margin: auto;
  margin-bottom: 20px;
  border-radius: 50%;
}

.testimonial-name {
    font-weight: $weight-700;
    text-transform: uppercase;
    color: $sonic-silver;
    margin-bottom: 5px;
}

.testimonial-title {
  color: $onyx;
  font-size: $fs-7;
  margin-bottom: 15px;
}

.quotation-img {
  margin: auto;
  margin-bottom: 10px;
}

.testimonial-desc {
  max-width: 70%;
  margin: auto;
  color: $sonic-silver;
  font-size: $fs-7;
}

</style>
