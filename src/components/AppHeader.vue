<template>
  <header class="header">
    <div class="logo"><a href="/"> fullstackdevblog.ru</a></div>
    <div class="nav">
      <a href="/">Главная</a>
      <a href="/">О сайте</a>
    </div>
    <div class="filters">
      <!-- <button class="filter-btn active" data-filter="all">Всё</button> -->
      <button class="filter-btn" data-filter="python">Python</button>
      <button class="filter-btn" data-filter="django">Django</button>
      <button class="filter-btn" data-filter="go">Go</button>
      <button class="filter-btn" data-filter="js">JS</button>
      <button class="filter-btn" data-filter="devops">DevOps</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader' // Явное имя для ESLint
}
</script>

<script setup>
// Логика компонента (если нужна)
</script>

<style lang="scss" scoped>
header {
  border-style: dotted;
  background-color: rgb(255, 255, 255);
  padding: 1rem;                             /* Внутренние отступы */
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);  /* Тень для глубины */
  width: 100%;                               /* На всю ширину экрана */
  top: 0;                                    /* Прижатие к верху */
  z-index: 1000;                             /*Поверх остальных элементов */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav {
  // border-style: dotted;
  display: flex;
  justify-content: space-between;
}
.nav a {
  margin: 10px;
  padding: 10px;
  // border-style: dotted;
}
.logo a {
  // border-style: dotted;
  font-size: 20px;                    /* Размер шрифта */
  font-weight: bold;                  /* Жирное начертание */
  color: black;                     /* Акцентный цвет */
  text-decoration: none;              /* Убрать подчеркивание */
  animation: logo-float 2s ease-in-out infinite;
  color: #004998;
}
.filters {
  border-style: dotted;
}
.filter-btn {
  margin: 2px;
  padding: 8px 16px;
  border: 1px solid black;
  background: #f5f5f5;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}
.filter-btn.active {
  border-color: black;
}
@media (max-width: 768px) {
  header {
    display: block;
  }
}
</style>
