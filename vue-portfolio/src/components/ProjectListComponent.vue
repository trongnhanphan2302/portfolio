<script>
import ProjectComponent from "@/components/ProjectComponent.vue";
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          content: '<a href="https://github.com/trongnhanphan2302">Project 1</a>',
          image: "/images/p1.jpg",
          
        },
        {
          id: 2,
          content: '<a href="https://github.com/trongnhanphan2302">Project 2</a>',
          image: "/images/p2.jpg",
        },
        {
          id: 3,
          content: '<a href="https://github.com/trongnhanphan2302">Project 3</a>',
          image: "/images/p3.jpg",
        },
      ],
    };
  },
  components: { ProjectComponent },
};
</script>

<template>
  <!--Projects Section-->
  <section class="col-12 col-s-12 porject-section" id="project">
    <h2 class="col-12 col-s-12">My Projects</h2>
    <ProjectComponent
      v-for="post in posts"
      :content="post.content"
      :image="post.image"
      :id="post.id"
      :key="post.id"

    ></ProjectComponent>
  </section>
</template>

<style></style>
