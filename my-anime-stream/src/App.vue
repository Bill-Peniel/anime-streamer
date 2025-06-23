<script setup>
// Pas de logique spécifique ici
</script>

<template>
  <div class="min-h-screen bg-white">
    <header class="bg-white border-b-2 border-pink-200 py-3 px-6 flex items-center justify-between shadow-sm">
      <div class="flex items-center gap-2">
        <span class="otaku-title text-2xl text-pink-600 tracking-wide">OtakuStream</span>
        <span class="text-2xl">🍥</span>
      </div>
      <nav class="flex gap-6 text-base">
        <router-link to="/" class="hover:text-pink-500 transition font-semibold">Accueil</router-link>
        <router-link to="/animes" class="hover:text-pink-500 transition font-semibold">Animés</router-link>
        <router-link to="/about" class="hover:text-pink-500 transition font-semibold">À propos</router-link>
      </nav>
    </header>
    <main class="max-w-5xl mx-auto py-8 px-4">
      <router-view />
    </main>
    <footer class="text-center text-gray-400 py-6 text-xs flex flex-col items-center gap-2">
      <span>© 2024 OtakuStream. Tous droits réservés.</span>
      <span class="text-lg">🍥 Merci de soutenir la culture Otaku !</span>
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
