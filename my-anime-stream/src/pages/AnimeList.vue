
<template>
  <div class="min-h-screen bg-gray-50 py-8 lg:py-12">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="text-center mb-8 lg:mb-12">
        <h1 class="otaku-title text-4xl lg:text-6xl mb-4">Catalogue des Animes</h1>
        <p class="text-lg lg:text-xl text-gray-600">Découvrez notre collection complète</p>
      </div>
      
      <!-- Barre de recherche et filtres -->
      <div class="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-8 lg:mb-12">
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
          <div class="flex-1 relative">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Rechercher un anime..."
              class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-pink-400 focus:outline-none transition-colors duration-200"
            >
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          
          <select 
            v-model="selectedGenre"
            class="px-4 py-3 border-2 border-gray-200 rounded-full focus:border-pink-400 focus:outline-none transition-colors duration-200"
          >
            <option value="">Tous les genres</option>
            <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
          </select>
          
          <select 
            v-model="sortBy"
            class="px-4 py-3 border-2 border-gray-200 rounded-full focus:border-pink-400 focus:outline-none transition-colors duration-200"
          >
            <option value="title">Trier par titre</option>
            <option value="rating">Trier par note</option>
            <option value="year">Trier par année</option>
          </select>
        </div>
      </div>
      
      <!-- Grille des animes -->
      <div v-if="loading" class="flex justify-center py-16">
        <LoadingSpinner message="Chargement de la liste..." />
      </div>
      
      <div v-else-if="filteredAnimes.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4">😢</div>
        <h3 class="text-2xl font-bold text-gray-700 mb-2">Aucun anime trouvé</h3>
        <p class="text-gray-500">Essayez de modifier vos critères de recherche</p>
      </div>
      
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
        <div 
          v-for="(anime, index) in paginatedAnimes" 
          :key="anime.id"
          class="anime-item"
          :style="{ animationDelay: `${(index % 8) * 0.1}s` }"
        >
          <AnimeCard 
            :anime="anime" 
            @click="$router.push(`/animes/${anime.id}`)"
          />
        </div>
      </div>
      
      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center mt-12">
        <div class="flex space-x-2">
          <button 
            v-for="page in totalPages" 
            :key="page"
            @click="currentPage = page"
            class="px-4 py-2 rounded-full font-medium transition-all duration-200"
            :class="currentPage === page 
              ? 'bg-pink-500 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-600'"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimeCard from '../components/AnimeCard.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

export default {
  name: 'AnimeList',
  components: {
    AnimeCard,
    LoadingSpinner
  },
  data() {
    return {
      loading: true,
      animes: [],
      searchQuery: '',
      selectedGenre: '',
      sortBy: 'title',
      currentPage: 1,
      itemsPerPage: 8,
      genres: ['Action', 'Aventure', 'Comédie', 'Drame', 'Fantasy', 'Romance', 'Science-Fiction', 'Thriller']
    }
  },
  computed: {
    filteredAnimes() {
      let filtered = this.animes

      // Filtrage par recherche
      if (this.searchQuery) {
        filtered = filtered.filter(anime => 
          anime.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          anime.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }

      // Filtrage par genre
      if (this.selectedGenre) {
        filtered = filtered.filter(anime => 
          anime.genres && anime.genres.includes(this.selectedGenre)
        )
      }

      // Tri
      return filtered.sort((a, b) => {
        switch (this.sortBy) {
          case 'rating':
            return (b.rating || 0) - (a.rating || 0)
          case 'year':
            return (b.year || 2020) - (a.year || 2020)
          default:
            return a.title.localeCompare(b.title)
        }
      })
    },
    paginatedAnimes() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredAnimes.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.filteredAnimes.length / this.itemsPerPage)
    }
  },
  watch: {
    filteredAnimes() {
      this.currentPage = 1
    }
  },
  mounted() {
    this.loadAnimes()
  },
  methods: {
    async loadAnimes() {
      // Simulation d'un appel API avec plus d'animes
      setTimeout(() => {
        this.animes = [
          {
            id: 1,
            title: "Attack on Titan",
            description: "L'humanité vit dans des villes entourées d'énormes murs pour se protéger des Titans...",
            image: "https://via.placeholder.com/300x400/FF69B4/FFFFFF?text=Attack+on+Titan",
            genres: ["Action", "Drame", "Fantasy"],
            rating: 5,
            status: "Terminé",
            year: 2013
          },
          {
            id: 2,
            title: "Demon Slayer",
            description: "Tanjiro Kamado devient un chasseur de démons pour sauver sa sœur...",
            image: "https://via.placeholder.com/300x400/9932CC/FFFFFF?text=Demon+Slayer",
            genres: ["Action", "Fantasy"],
            rating: 4.8,
            status: "En cours",
            year: 2019
          },
          {
            id: 3,
            title: "One Piece",
            description: "Monkey D. Luffy part à l'aventure pour devenir le roi des pirates...",
            image: "https://via.placeholder.com/300x400/FF4500/FFFFFF?text=One+Piece",
            genres: ["Aventure", "Comédie", "Action"],
            rating: 4.9,
            status: "En cours",
            year: 1999
          },
          {
            id: 4,
            title: "My Hero Academia",
            description: "Dans un monde où 80% de la population a des super-pouvoirs...",
            image: "https://via.placeholder.com/300x400/32CD32/FFFFFF?text=My+Hero+Academia",
            genres: ["Action", "Fantasy"],
            rating: 4.7,
            status: "En cours",
            year: 2016
          },
          {
            id: 5,
            title: "Naruto",
            description: "Un jeune ninja rêve de devenir Hokage...",
            image: "https://via.placeholder.com/300x400/FF8C00/FFFFFF?text=Naruto",
            genres: ["Action", "Aventure"],
            rating: 4.6,
            status: "Terminé",
            year: 2002
          },
          {
            id: 6,
            title: "Dragon Ball Z",
            description: "Goku et ses amis protègent la Terre des menaces extraterrestres...",
            image: "https://via.placeholder.com/300x400/FFD700/FFFFFF?text=Dragon+Ball+Z",
            genres: ["Action", "Aventure"],
            rating: 4.8,
            status: "Terminé",
            year: 1989
          }
        ]
        this.loading = false
      }, 1500)
    }
  }
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anime-item {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
</style>
