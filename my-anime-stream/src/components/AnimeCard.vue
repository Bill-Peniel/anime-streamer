
<template>
  <div class="card-anime group cursor-pointer" @click="$emit('click')">
    <div class="relative overflow-hidden rounded-xl mb-3">
      <img 
        :src="anime.image || '/placeholder-anime.jpg'" 
        :alt="anime.title"
        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div class="absolute top-2 right-2">
        <span class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
          {{ anime.status || 'En cours' }}
        </span>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <div class="text-center space-y-2">
      <h3 class="font-bold text-lg text-gray-800 group-hover:text-pink-600 transition-colors duration-200">
        {{ anime.title }}
      </h3>
      <p class="text-sm text-gray-600 line-clamp-2">{{ anime.description }}</p>
      
      <div class="flex flex-wrap justify-center gap-1 mt-2">
        <span 
          v-for="genre in anime.genres?.slice(0, 3)" 
          :key="genre"
          class="badge-genre transform hover:scale-105 transition-transform duration-150"
        >
          {{ genre }}
        </span>
      </div>
      
      <div class="flex items-center justify-center space-x-2 mt-3">
        <div class="flex text-yellow-400">
          <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= (anime.rating || 0) ? 'fill-current' : 'text-gray-300'" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </div>
        <span class="text-sm text-gray-600">{{ anime.rating || 4.5 }}/5</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimeCard',
  props: {
    anime: {
      type: Object,
      required: true
    }
  },
  emits: ['click']
}
</script>
