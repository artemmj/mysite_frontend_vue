<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
    <AppScrollTopButton />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppScrollTopButton from './components/AppScrollTop.vue';
</script>

<style lang="scss">
#app {
  max-width: 1200px;       /* Ограничение ширины */
  margin: 10px auto 40px;  /* Отступы сверху/снизу и центрирование */
  padding: 0 20px;         /* Боковые отступы */
}
@media (max-width: 768px) {
  #app {
    padding-left: 3px;
    padding-right: 3px;
  }
}
</style>
