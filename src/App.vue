<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/comprendre">Comprendre</RouterLink>
        <RouterLink to="/concevoir">Concevoir</RouterLink>
        <RouterLink to="/exprimer">Exprimer</RouterLink>
        <RouterLink to="/developper">Développer</RouterLink>
        <RouterLink to="/entreprendre">Entreprendre</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
