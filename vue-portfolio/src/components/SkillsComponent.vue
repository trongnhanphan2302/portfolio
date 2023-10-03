<script>
export default {
  data() {
    return {
      skills: [
        { id: 1, name: "HTML"},
        { id: 2, name: "CSS"},
        { id: 3, name: "JavaScript"},
        { id: 4, name: "Python"},
        { id: 4, name: "Vue.js"},
      ],
    };
  },
};
</script>

<template>
  <!--Skills Section-->
  <section class="col-12 col-s-12 skills-section">
    <h2 class="col-12 col-s-12">My Skills</h2>
    <ul class="col-8 col-s-8 skills-list">
      <li v-for="skill in skills" v-bind:key="skill.id">
        {{ skill.name }}
      </li>
    </ul>
  </section>
</template>

<style></style>
