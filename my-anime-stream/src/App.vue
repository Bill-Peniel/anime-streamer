<template>
  <div id="app" class="min-h-screen">
    <Navbar />
    <main class="w-full">
      <router-view />
    </main>
    <footer class="bg-gray-800 text-white py-8 mt-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="otaku-title text-2xl mb-4">AnimeStream</p>
        <p class="text-gray-400">Votre destination pour les meilleurs animes © 2024</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.router-link-exact-active {
  color: #ec4899 !important;
}
</style>