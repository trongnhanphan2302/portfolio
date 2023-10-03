// router.js
import { createRouter, createWebHistory } from 'vue-router';
import MainHeader from '@/components/MainHeader.vue'
import ProjectComponent from '@/components/ProjectComponent.vue'
import ProjectListComponent from '@/components/ProjectListComponent.vue'
import SelfIntroComponent from '@/components/SelfIntroComponent.vue'
import SkillsComponent from '@/components/SkillsComponent.vue'
import { createApp } from 'vue';



const routes = [
  { path: '/', name: MainHeader, component: MainHeader },
  { path: '/about', name: SelfIntroComponent, component: SelfIntroComponent },
  { path: '/project', name: ProjectComponent, component: ProjectComponent },
  { path: '/projectlist', name: ProjectListComponent, component: ProjectListComponent },
  { path: '/skills', name: SkillsComponent, component: SkillsComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes:routes
});

export default router;
