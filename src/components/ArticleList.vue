<template>
    <div class="filters">
        <button
        v-for="category in allCategories"
        :key="category"
        @click="toggleTag(category)"
        :class="{ active: activeCategory === category }"
        class="filter-btn"
        >
        {{ category }}
        </button>
    </div>
    <div class="posts-grid">
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
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'

const props = defineProps({
    articles: {
        type: Array,
        required: true
    }
})
const activeCategory = ref(null)

// Все уникальные категории
const allCategories = computed(() => {
    const cats = new Set()
    for (const article of props.articles) {
        const acats = article.tags.split(', ')
        for (const cat of acats) {
            cats.add(cat)
        }
    }
    return cats
    // return [...new Set(props.articles.map(a => a.category.split(', ')))]
})

// Логика фильтрации
const toggleTag = (category) => {
    console.log("TOGGLE TAG, FILTER BY ", category)
}
</script>

<script>
export default {
    name: 'ArticleList',
}
</script>

<style lang="scss" scoped>
.posts-grid {
  margin-top: 20px;
  display: grid;                                                /* CSS Grid раскладка */
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));  /* Адаптивные колонки */
  gap: 1rem;                                                     /* Расстояние между карточками */
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
