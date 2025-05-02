<template>
  <div class="article-container">
    <div v-html="articleContent"></div> <!-- Здесь рендерится HTML -->
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const articleContent = ref('');

import { highlightAll } from '@/plugins/prism';

// Загрузка HTML-статьи
onMounted(async () => {
  const filename = route.params.id;
  const response = await fetch(`/articles/${filename}`);
  articleContent.value = await response.text();
});
watch(articleContent, async () => {
  await nextTick(); // Ждем обновления DOM
  highlightAll();
});
</script>

<style lang="scss"> /*scoped*/
.list-headings {
  padding: 2px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--accent);
}
.list-headings a {
  font-style: bold;
  color: var(--accent-light);
  font-size: 14px;
  text-decoration: none;
}
.list-headings a:hover {
  font-weight: bold;
}
/* Основной контейнер для статьи */
.article-container {
  border: 0.01rem solid;
  margin: 20px auto 40px;                     /* Вертикальные отступы + автоматическое центрирование по горизонтали */
  padding: 2rem;                              /* Внутренние отступы со всех сторон */
  background: var(--secondary);               /* Цвет фона из CSS-переменных (меняется при смене темы) */
  border-radius: 15px;                        /* Закругление углов контейнера */
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);  /* Тень с прозрачностью 5% для эффекта глубины */
  animation: card-entrance 0.5s ease-out;     /* Анимация появления с названием, длительностью и функцией времени */
}
.article-container h2 {
  text-align: center;
}
.article-container h3 {
  text-align: center;
  background-color: rgb(244, 244, 244);
}
.article-container p {
  margin: 20px;
}
.article-container ol {
  columns: 3;
  margin-left: 40px;
  -webkit-columns: 2;
  -moz-columns: 2;
}
.article-container ul {
  margin-left: 30px;
}
.article-title {
  color: var(--accent);  /* Цвет текста из акцентной переменной */
  margin-bottom: 1.5rem;  /* Отступ снизу для визуального разделения */
  font-size: 2.0rem;  /* Размер шрифта для заголовка */
  border-bottom: 2px solid var(--accent);  /* Подчеркивание акцентной линией */
  padding-bottom: 0.5rem;  /* Отступ между текстом и нижней границей */
}
.article-meta {
  display: flex;  /* Гибкий контейнер для элементов в строку */
  gap: 1rem;  /* Расстояние между дочерними элементами */
  margin-bottom: 2rem;  /* Отступ снизу для разделения с контентом */
  opacity: 0.8;  /* Полупрозрачность для второстепенной информации */
  font-size: 0.9rem;  /* Уменьшенный размер шрифта */
}
.section-title {
  color: var(--accent);  /* Акцентный цвет текста */
  margin: 2rem auto 1rem;  /* Отступы: сверху 2rem, снизу 1rem */
  padding-bottom: 0.3rem;  /* Отступ для визуального разделения линии */
  border-bottom: 1px dashed var(--accent);  /* Пунктирная акцентная линия снизу */
}
/* Стилизация путей к файлам */
.file-path {
  color: var(--accent);  /* Акцентный цвет текста */
  font-family: monospace;  /* Моноширинный шрифт */
  margin-left: 20px;
  padding: 0.5rem 0.8rem;  /* Компактные внутренние отступы */
  background: var(--primary);  /* Фон из первичной переменной */
  border-radius: 4px;  /* Слегка закругленные углы */
  display: inline-block;  /* Строчно-блочное отображение */
}
.table-wrapper {
  overflow-x: auto; /* Для адаптива на мобильных */
  box-shadow: 0 2px 15px rgba(0,0,0,0.1); /* Мягкая тень */
  border-radius: 10px; /* Закругленные углы */
}
table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Segoe UI', sans-serif;
  margin: 1rem 0;
  background: whitesmoke;
}
th {
  background: var(--accent); /* Темно-синий цвет */
  color: white;
  font-weight: 600;
  text-align: left;
  padding: 1.2rem;
  border-bottom: 3px solid #34495e;
}
td {
  padding: 1rem;
  border: 1px solid #0898bc; /* Светлая граница */
  color: #34495e; /* Темно-серый цвет текста */
}
// tr:nth-child(even) {
//   background: #f8f9fa; /* Чередование фона строк */
// }
tr:hover {
  background: #f1f5f9; /* Ховер-эффект */
  transition: background 0.2s ease;
}
pre[class*="language-"] {
  margin: 20px;
  padding: 20px;
  font-size: 0.9rem;
  border-radius: 5px;  /* Закругленные углы */
}
@media (max-width: 768px) {
  #app {
    padding-left: 3px;
    padding-right: 3px;
  }
  .article-container {
    /* Уменьшенные отступы и адаптивная ширина */
    margin: 1px;
    /* Меньшие внутренние отступы */
    padding: 1rem;
  }
  .article-container p {
    margin: 5px;
  }
  .article-container ol {
    columns: 2;
    margin-left: 20px;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
}
</style>
