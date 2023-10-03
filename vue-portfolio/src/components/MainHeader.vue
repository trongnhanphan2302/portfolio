<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SelfIntroComponent from "@/components/SelfIntroComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import SkillsComponent from "@/components/SkillsComponent.vue";
import ProjectListComponent from "@/components/ProjectListComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

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
    <SelfIntroComponent :websiteName="websiteName"/>


    <ContactComponent :websiteName="websiteName"/> 


    <SkillsComponent :websiteName="websiteName"/> 


    <ProjectListComponent websiteName="websiteName"/> 


    <FooterComponent :websiteName="websiteName"/> 
  </div>
</template>

<style>
</style>

