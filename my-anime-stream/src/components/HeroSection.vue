
<template>
  <div class="relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 text-white">
    <div class="absolute inset-0 bg-black/20"></div>
    
    <!-- Animations de fond -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
        <span class="otaku-title text-white">Bienvenue dans</span>
        <br>
        <span class="otaku-title bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
          AnimeStream
        </span>
      </h1>
      
      <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-up animation-delay-300">
        Découvrez les meilleurs animes, explorez de nouveaux univers et plongez dans des aventures épiques !
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
        <router-link 
          to="/animes"
          class="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Explorer les Animes 🚀
        </router-link>
        <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
          En savoir plus
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  opacity: 0;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 60px;
  height: 60px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 40px;
  height: 40px;
  top: 20%;
  right: 10%;
  animation-delay: 1s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 15%;
  animation-delay: 2s;
}

.shape-4 {
  width: 50px;
  height: 50px;
  bottom: 20%;
  right: 20%;
  animation-delay: 3s;
}

.shape-5 {
  width: 70px;
  height: 70px;
  top: 50%;
  left: 50%;
  animation-delay: 4s;
}
</style>
