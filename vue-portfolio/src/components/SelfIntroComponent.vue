<script>
export default {
  data() {
    return {
      selfIntroContent:
        "I'm Trong Nhan. I'm a student at Deakin University :)",
    };
  },
};
</script>

<template>
  <!--Self Introduction Section-->
  <section class="col-12 col-s-12 self-intro">
    <img src="/images/profile-image.jpg" class="col-4 col-s-4 profile-image" />
    <div class="col-8 col-s-8 self-intro-text">
      <h2>Hello, I am Trong Nhan. Welcome to My Portfolio.</h2>
      <p>{{ selfIntroContent }}</p>
    </div>
  </section>
</template>

<style></style>
