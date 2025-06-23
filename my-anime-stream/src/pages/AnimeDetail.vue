<template>
  <section v-if="anime">
    <div class="card-anime md:flex-row flex-col flex gap-8 items-center">
      <img :src="anime.image" :alt="anime.title" class="w-48 h-64 object-cover rounded-xl border-4 border-pink-200 shadow-lg" />
      <div class="flex-1 text-left">
        <h1 class="otaku-title text-3xl mb-2 text-purple-700">{{ anime.title }}</h1>
        <div class="mb-2">
          <span v-for="genre in anime.genres" :key="genre" class="badge-genre">{{ genre }}</span>
        </div>
        <p class="text-gray-700 mb-4">{{ anime.synopsis }}</p>
        <ul class="text-sm text-gray-600 space-y-1">
          <li><span class="font-semibold">Genres :</span> {{ anime.genres.join(', ') }}</li>
          <li><span class="font-semibold">Date de sortie :</span> {{ anime.release }}</li>
          <li><span class="font-semibold">Studio :</span> {{ anime.studio }}</li>
          <li><span class="font-semibold">Nombre d'episodes :</span> {{ anime.episodes }}</li>
        </ul>
      </div>
    </div>
  </section>
  <section v-else>
    <p class="text-center text-gray-500">Anime introuvable.</p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const animes = [
  {
    id: 1,
    title: 'Demon Slayer',
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
    synopsis: 'Un jeune pourfendeur de demons part sauver sa soeur.',
    genres: ['Action', 'Fantastique'],
    release: '2019',
    studio: 'ufotable',
    episodes: 26
  },
  {
    id: 2,
    title: 'My Hero Academia',
    image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
    synopsis: 'Dans un monde de super-pouvoirs, un garcon reve de devenir un heros.',
    genres: ['Action', 'Super-pouvoirs'],
    release: '2016',
    studio: 'Bones',
    episodes: 13
  },
  {
    id: 3,
    title: 'Attack on Titan',
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    synopsis: 'L\'humanite lutte pour survivre face aux titans.',
    genres: ['Action', 'Drame'],
    release: '2013',
    studio: 'Wit Studio',
    episodes: 25
  }
]

const anime = computed(() => {
  return animes.find(a => a.id === Number(route.params.id))
})
</script> 