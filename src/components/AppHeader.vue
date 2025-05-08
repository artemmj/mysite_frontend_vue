<template>
  <header class="header">
    <div class="header__left">
      <div class="pika_img"><a href="/"><img src="./pik.png"/></a></div>
      <div class="logo"><a href="/"> fullstackdevblog.ru</a></div>
    </div>
    <div class="header__right">
      <div class="about"><a href="/about"><button class="about-btn" data-filter="python">Про сайт</button></a></div>
    </div>
  </header>
</template>

<script>
</script>

<script setup>
</script>

<style lang="scss" scoped>
header {
  background: var(--secondary);
  border-radius: 15px;
  border: 0.01rem solid;
  padding: 0.5rem;                           /* Внутренние отступы */
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);  /* Тень для глубины */
  width: 100%;                               /* На всю ширину экрана */
  top: 0;                                    /* Прижатие к верху */
  z-index: 1000;                             /* Поверх остальных элементов */
  display: flex;
  justify-content: space-between; /* Распределение по краям */
  align-items: center; /* Вертикальное выравнивание */
}
.header__left {
  display: flex;
  align-items: center;
  gap: 1.5rem; /* Пространство между лого и текстом */
}
.about {
  margin-left: 10px;
  min-width: 100px;
}
.about-btn {
  margin: 2px;
  padding: 8px 16px;
  border: 0.1rem none gray;
  background: #d8d8d8;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;
}
.about-btn:hover {
  background: #b2b2b2;
}
.logo {
  margin-left: 10px;
}
.logo a {
  border-bottom: solid;
  font-size: 20px;                    /* Размер шрифта */
  font-weight: bold;                  /* Жирное начертание */
  color: black;                     /* Акцентный цвет */
  text-decoration: none;              /* Убрать подчеркивание */
  color: #004998;
}
.filter-btn {
  margin: 2px;
  padding: 8px 16px;
  border: 0.1rem none gray;
  background: #f5f5f5;
  border-radius: 4px;
  transition: all 0.3s;
}
.filter-btn:hover {
  background: #cbcbcb;
}
.filter-btn.active {
  border-color: black;
}
.pika_img img {
  max-width: 70px;
  border-radius: 15px;
  margin-left: 10px;
}
// .head_img img:hover {
//   max-width: 170px;
// }
@media (max-width: 768px) {
  header {
    display: inline-block;
  }
}
</style>
