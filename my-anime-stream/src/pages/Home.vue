<template>
  <section class="text-center">
    <h1 class="otaku-title text-5xl mb-4">Bienvenue sur OtakuStream !</h1>
    <p class="text-lg text-purple-700 mb-8 font-semibold">Découvre les meilleurs animés et mangas, explore l'univers Otaku !</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div v-for="anime in featuredAnimes" :key="anime.id" class="card-anime">
        <img :src="anime.image" :alt="anime.title" class="w-32 h-44 object-cover rounded mb-3 border-2 border-pink-200 shadow-lg" />
        <h2 class="otaku-title text-2xl text-purple-700 mb-1">{{ anime.title }}</h2>
        <div class="mb-2">
          <span v-for="genre in anime.genres" :key="genre" class="badge-genre">{{ genre }}</span>
        </div>
        <p class="text-sm text-gray-600 mt-2">{{ anime.synopsis }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const featuredAnimes = [
  {
    id: 1,
    title: 'Demon Slayer',
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
    synopsis: 'Un jeune pourfendeur de démons part sauver sa soeur.',
    genres: ['Action', 'Fantastique'],
  },
  {
    id: 2,
    title: 'My Hero Academia',
    image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
    synopsis: 'Dans un monde de super-pouvoirs, un garçon rêve de devenir un héros.',
    genres: ['Action', 'Super-pouvoirs'],
  },
  {
    id: 3,
    title: 'Attack on Titan',
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    synopsis: 'L\'humanité lutte pour survivre face aux titans.',
    genres: ['Action', 'Drame'],
  },
]
</script> 