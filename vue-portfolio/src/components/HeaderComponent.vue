<template>
  <!-- Header and Navigation Bar -->
  <div class="col-12 col-s-12 header-and-nav">
    <header class="col-4 col-s-4 header">
      <h1>{{ websiteName }}</h1>
    </header>
    <nav class="col-8 col-s-8">
      <ul class="nav-list">
        <!-- Use router-link for navigation -->
        <router-link v-for="navLink in navLinks" :key="navLink.id" :to="navLink.link" tag="li" class="nav-item" >
          <a v-bind:href="navLink.link">{{ navLink.name }}</a>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { id: 1, name: "Home", link: "/" }, 
        { id: 2, name: "About", link: "/about" }, 
        { id: 3, name: "Project", link: "/projectlist" }, 
      ],
    };
  },
  props: ["websiteName"],
};
</script>

<style></style>
