<script>
import MainHeader from "./components/MainHeader.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import SelfIntroComponent from "./components/SelfIntroComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import ProjectListComponent from "./components/ProjectListComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  data() {
    return {
      websiteName: "My Portfolio",
    };
  },
  components: {
    HeaderComponent,
    SelfIntroComponent,
    ContactComponent,
    SkillsComponent,
    ProjectListComponent,
    FooterComponent,
  },
};
</script>

<template>
  <div class="container">
    <HeaderComponent :websiteName="websiteName"/> <router-view /> 


  </div>
</template>

<style>
@import "./assets/style.css";
</style>

