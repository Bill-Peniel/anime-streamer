
<template>
  <nav class="bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-pink-400 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2 group">
            <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <span class="text-white font-bold text-xl">🎌</span>
            </div>
            <span class="otaku-title text-2xl group-hover:scale-105 transition-transform duration-200">
              AnimeStream
            </span>
          </router-link>
        </div>
        
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link 
              v-for="item in navItems" 
              :key="item.name"
              :to="item.path"
              class="nav-link px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105"
              :class="$route.path === item.path ? 'bg-pink-500 text-white shadow-lg' : 'text-gray-700 hover:bg-pink-100 hover:text-pink-600'"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
        
        <div class="md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-md text-gray-600 hover:text-pink-600 hover:bg-pink-100 transition-colors duration-200"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-pink-200 animate-slide-down">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          :class="$route.path === item.path ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100 hover:text-pink-600'"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false,
      navItems: [
        { name: 'Accueil', path: '/' },
        { name: 'Animes', path: '/animes' },
        { name: 'À propos', path: '/about' }
      ]
    }
  }
}
</script>

<style scoped>
@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out;
}
</style>
