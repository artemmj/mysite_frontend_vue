<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
    <button class="scroll-top" aria-label="Наверх" title="Наверх">
      ↑
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

onMounted(async () => {
  const scrollBtn = document.querySelector('.scroll-top');

  // Показать/скрыть кнопку
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 100) { scrollBtn.classList.add('visible'); }
    else { scrollBtn.classList.remove('visible'); }
  });

  // Плавный скролл
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
</script>

<style lang="scss">
#app {
  max-width: 1200px;       /* Ограничение ширины */
  margin: 10px auto 40px;  /* Отступы сверху/снизу и центрирование */
  padding: 0 20px;         /* Боковые отступы */
}
.scroll-top {
  position: fixed;
  bottom: -60px; /* Скрыта по умолчанию */
  right: 30px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: #007bff;
  color: white;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.4s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.scroll-top.visible {
  bottom: 30px;
  opacity: 1;
}
.scroll-top:hover {
  background: #0056b3;
  transform: translateY(-2px);
}
.scroll-top:active {
  transform: scale(0.95);
}
@media (max-width: 768px) {
  #app {
    padding-left: 3px;
    padding-right: 3px;
  }
}
</style>
