
<template>
  <div>
    <HeroSection />
    
    <section class="py-12 lg:py-20 px-4 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="otaku-title text-3xl lg:text-5xl text-center mb-8 lg:mb-16 animate-bounce">
          Animes Populaires
        </h2>
        
        <div v-if="loading" class="flex justify-center">
          <LoadingSpinner message="Chargement des animes populaires..." />
        </div>
        
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
          <div 
            v-for="(anime, index) in featuredAnimes" 
            :key="anime.id"
            class="anime-card-container"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <AnimeCard 
              :anime="anime" 
              @click="$router.push(`/animes/${anime.id}`)"
            />
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link 
            to="/animes"
            class="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Voir tous les animes
          </router-link>
        </div>
      </div>
    </section>
    
    <section class="bg-gray-50 py-12 lg:py-20 px-4 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="otaku-title text-3xl lg:text-5xl mb-8 lg:mb-12">Pourquoi AnimeStream ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <div class="feature-card bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <div class="text-6xl mb-4">🎌</div>
            <h3 class="text-xl font-bold mb-2">Vaste Collection</h3>
            <p class="text-gray-600">Des milliers d'animes classiques et récents</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <div class="text-6xl mb-4">⚡</div>
            <h3 class="text-xl font-bold mb-2">Streaming Rapide</h3>
            <p class="text-gray-600">Qualité HD avec un chargement ultra-rapide</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <div class="text-6xl mb-4">💖</div>
            <h3 class="text-xl font-bold mb-2">Interface Intuitive</h3>
            <p class="text-gray-600">Navigation simple et design moderne</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import AnimeCard from '../components/AnimeCard.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    AnimeCard,
    LoadingSpinner
  },
  data() {
    return {
      loading: true,
      featuredAnimes: []
    }
  },
  mounted() {
    this.loadFeaturedAnimes()
  },
  methods: {
    async loadFeaturedAnimes() {
      // Simulation d'un appel API
      setTimeout(() => {
        this.featuredAnimes = [
          {
            id: 1,
            title: "Attack on Titan",
            description: "L'humanité vit dans des villes entourées d'énormes murs pour se protéger des Titans...",
            image: "https://via.placeholder.com/300x400/FF69B4/FFFFFF?text=Attack+on+Titan",
            genres: ["Action", "Drame", "Fantasy"],
            rating: 5,
            status: "Terminé"
          },
          {
            id: 2,
            title: "Demon Slayer",
            description: "Tanjiro Kamado devient un chasseur de démons pour sauver sa sœur...",
            image: "https://via.placeholder.com/300x400/9932CC/FFFFFF?text=Demon+Slayer",
            genres: ["Action", "Supernatural", "Historique"],
            rating: 4.8,
            status: "En cours"
          },
          {
            id: 3,
            title: "One Piece",
            description: "Monkey D. Luffy part à l'aventure pour devenir le roi des pirates...",
            image: "https://via.placeholder.com/300x400/FF4500/FFFFFF?text=One+Piece",
            genres: ["Aventure", "Comédie", "Action"],
            rating: 4.9,
            status: "En cours"
          },
          {
            id: 4,
            title: "My Hero Academia",
            description: "Dans un monde où 80% de la population a des super-pouvoirs...",
            image: "https://via.placeholder.com/300x400/32CD32/FFFFFF?text=My+Hero+Academia",
            genres: ["Action", "École", "Super-héros"],
            rating: 4.7,
            status: "En cours"
          }
        ]
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anime-card-container {
  animation: slideInUp 0.6s ease-out forwards;
  opacity: 0;
}

.feature-card {
  animation: slideInUp 0.8s ease-out forwards;
}
</style>
