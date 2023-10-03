<script>
export default {
  props: ["content", "image", "id"],
};
</script>

<template>
  <div class="col-4 col-s-4">
    <div class="project-card">
      <h3></h3>
      <img :src="image" />
      <p v-html="content"></p>
    </div>
  </div>
</template>

<style></style>
