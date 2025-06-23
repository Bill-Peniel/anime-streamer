import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Import des pages (à créer)
import Home from './pages/Home.vue'
import AnimeList from './pages/AnimeList.vue'
import AnimeDetail from './pages/AnimeDetail.vue'
import About from './pages/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/animes', name: 'AnimeList', component: AnimeList },
  { path: '/animes/:id', name: 'AnimeDetail', component: AnimeDetail, props: true },
  { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')')
