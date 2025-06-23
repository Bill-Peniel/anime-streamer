<template>
  <section>
    <h1 class="otaku-title text-4xl mb-6">Liste des animés</h1>
    <input v-model="search" type="text" placeholder="Rechercher un animé..." class="w-full mb-6 px-4 py-2 border-2 border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 font-semibold" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="anime in filteredAnimes" :key="anime.id" class="card-anime">
        <router-link :to="`/animes/${anime.id}`" class="w-full flex flex-col items-center">
          <img :src="anime.image" :alt="anime.title" class="w-32 h-44 object-cover rounded mb-3 border-2 border-pink-200 shadow-lg" />
          <h2 class="otaku-title text-xl text-pink-600 mb-1">{{ anime.title }}</h2>
        </router-link>
        <div class="mb-2">
          <span v-for="genre in anime.genres" :key="genre" class="badge-genre">{{ genre }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const animes = [
  {
    id: 1,
    title: 'Demon Slayer',
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
    genres: ['Action', 'Fantastique']
  },
  {
    id: 2,
    title: 'My Hero Academia',
    image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
    genres: ['Action', 'Super-pouvoirs']
  },
  {
    id: 3,
    title: 'Attack on Titan',
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    genres: ['Action', 'Drame']
  },
]

const filteredAnimes = computed(() => {
  return animes.filter(anime =>
    anime.title.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script> 