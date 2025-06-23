
<template>
  <div class="flex items-center justify-center p-8">
    <div class="relative">
      <div class="w-16 h-16 border-4 border-pink-200 rounded-full animate-spin"></div>
      <div class="absolute top-0 left-0 w-16 h-16 border-4 border-pink-500 rounded-full animate-spin border-t-transparent"></div>
      <div class="absolute top-2 left-2 w-12 h-12 border-4 border-purple-300 rounded-full animate-spin animate-reverse"></div>
    </div>
    <p class="ml-4 text-gray-600 font-medium animate-pulse">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    message: {
      type: String,
      default: 'Chargement des animes...'
    }
  }
}
</script>

<style scoped>
@keyframes reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.animate-reverse {
  animation: reverse 1s linear infinite;
}
</style>
