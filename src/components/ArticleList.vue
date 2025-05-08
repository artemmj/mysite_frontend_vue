<template>
  <div class="filters">
    <button
      v-for="category in allCategories"
      :key="category"
      @click="toggleCategory(category)"
      :class="{ active: activeCategory === category }"
      class="filter-btn"
    >
      {{ category }}
    </button>
  </div>
  <div class="posts-grid">
    <div 
      v-for="(articles, category) in groupedArticles" 
      :key="category"
      v-show="shouldShowCategory(category)"
      class="category-group"
    >
      <h2 class="category-title">{{ category }}</h2>
      <div class="articles-grid">
        <article 
          v-for="article in articles" 
          :key="article.id"
          class="post-card"
        >
          <router-link :to="`/article/${article.filename}`">
            <h2>{{ article.title }}</h2>
            <p class="post-date">🗓 {{ article.date }}</p>
            <p class="post-tags">🏷️ {{ article.tags }}</p>
            <p class="short-content">{{ article.short_content }}</p>
          </router-link>
        </article>
      </div>
    </div>
  </div>

  <!-- <hr>
  <div class="posts-grid">
    <div v-for="article in articles" class="post-card">
      <router-link :to="`/article/${article.filename}`">
        <h2>{{ article.title }}</h2>
        <p class="post-date">🗓 {{ article.date }}</p>
        <p class="post-tags">🏷️ {{ article.tags }}</p>
        <p class="short-content">{{ article.short_content }}</p>
      </router-link>
    </div>
  </div> -->
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  articles: {
    type: Array,
    required: true
  }
})
const activeCategory = ref(null)
// Все уникальные категории
const allCategories = computed(() => {
  return [...new Set(props.articles.map(a => a.category))].sort()
})
// Группировка статей по категориям
const groupedArticles = computed(() => {
  return props.articles.reduce((acc, article) => {
    const category = article.category || 'Без категории'
    if (!acc[category]) acc[category] = []
    acc[category].push(article)
    return acc
  }, {})
})
// Логика фильтрации
const toggleCategory = (category) => {
  activeCategory.value = activeCategory.value === category ? null : category
}
const shouldShowCategory = (category) => {
  return !activeCategory.value || activeCategory.value === category
}
// Форматирование даты
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ru-RU')
}
</script>

<script>
export default {
  name: 'ArticleList',
  props: ['articles'], // Получаем статьи из HomeView
}
</script>

<style lang="scss" scoped>
.posts-grid {
  margin-top: 20px;
  display: grid;                                                /* CSS Grid раскладка */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  /* Адаптивные колонки */
  gap: 1rem;                                                     /* Расстояние между карточками */
}
.category-group {
  background-color: rgb(234, 233, 233);
  border-radius: 20px;
  padding: 10px;
  // border-style: dotted;
}
.category-group h2{
  color: var(--accent);
  text-align: center;
}
.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-top: 30px;
}
.filter-btn {
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}
.filter-btn:hover {
  background: #f5f5f5;
}

.filter-btn.active {
  background: #2196F3;
  color: white;
  border-color: transparent;
}
.short-content {
  color: black;
  font-size: 0.8rem;
}
.post-card {
  background: var(--secondary);                    /* Фон карточки */
  border-radius: 15px;                             /* Закругленные углы */
  border: 0.01rem solid gray;
  margin-bottom: 10px;
  padding: 20px;                                   /* Внутренние отступы */
  cursor: pointer;                                 /* Курсор-указатель */
  transform: translateY(0);                        /* Начальное положение для анимации */
  animation: card-entrance 0.5s ease-out forwards; /* Анимация появления */
  opacity: 0;                                      /* Начальная прозрачность для анимации */
}
.post-card.hidden {
  opacity: 0;
  max-height: 0;
  padding: 0;
  margin: 0;
  display: none;
}
.post-card:hover {
  transform: translateX(-10px);       /* Поднятие карточки */
  box-shadow: 0 10px 25px rgba(0,0,0,0.1); /* Тень при наведении */
}
.post-card h2 {
  font-size: 1.1rem;
  color: var(--accent);              /* Акцентный цвет */
  margin-bottom: 2px;                /* Отступ снизу */
}
.post-card a {
  text-decoration: none;
}
.post-date {
  font-size: 0.7rem;      /* Размер шрифта */
  color: var(--text);   /* Цвет из переменных */
  opacity: 0.7;         /* Полупрозрачность */
  margin-bottom: 3px;
}
.post-tags {
  font-size: 0.7rem;      /* Размер шрифта */
  color: var(--text);   /* Цвет из переменных */
  opacity: 0.7;         /* Полупрозрачность */
  margin-bottom: 3px;
}
@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
  .filters {
    gap: 8px;
  }
  .filter-btn {
    padding: 6px 12px;
    font-size: 0.9em;
  }
}
@media (max-width: 480px) {
  .articles-container {
    padding: 15px;
  }
  .category-title {
    font-size: 1.3em;
  }
}
</style>
