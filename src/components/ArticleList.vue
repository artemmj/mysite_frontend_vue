<template>
  <div class="posts-grid">
    <div v-for="article in articles" :key="article.filename" class="post-card">
      <router-link :to="`/article/${article.filename}`">
        <h2>{{ article.title }}</h2>
        <p class="post-date">🗓 {{ article.date }}</p>
        <p class="post-tags">🏷️ {{ article.tags }}</p>
        <p class="short-content">{{ article.short_content }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  props: ['articles'], // Получаем статьи из HomeView

  data() {
    return {
      // Храним выбранный тег для фильтрации (пустая строка = нет фильтра)
      selectedTag: '', 

      // Массив статей (ваши реальные данные будут из API или файлов)
      // articles: [ 
      //   { 
      //     filename: 'post1', 
      //     tag: 'python', // Тег статьи (должен совпадать с кнопкой фильтра)
      //     title: 'Python Basics' 
      //   },
      //   // ... другие статьи
      // ]
    }
  },

  methods: {
    /**
     * Переключает фильтр: 
     * - Если кликаем на уже выбранный тег -> сбрасываем фильтр
     * - Если кликаем на новый тег -> применяем его
     */
    toggleFilter(tag) {
      this.selectedTag = this.selectedTag === tag ? '' : tag
    }
  },

  computed: {
    /**
     * Автоматически обновляемый список отфильтрованных статей.
     * Vue пересчитывает это свойство при изменении selectedTag или articles.
     */
    filteredArticles() {
      // Если фильтр не выбран -> возвращаем все статьи
      if (!this.selectedTag) return this.articles

      // Фильтруем статьи, сравнивая теги в нижнем регистре (регистронезависимо)
      return this.articles.filter(article => 
        article.tag.toLowerCase() === this.selectedTag.toLowerCase()
      )
    },

    /**
     * Динамический список уникальных тегов из всех статей 
     * (альтернатива хардкоду кнопок)
     */
    uniqueTags() {
      // Собираем все теги, преобразуем в нижний регистр, удаляем дубли
      return [...new Set(
        this.articles.map(article => article.tag.toLowerCase())
      )]
    }
  }
}
</script>

<style lang="scss" scoped>
.posts-grid {
  margin-top: 20px;
  display: grid;                                                /* CSS Grid раскладка */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  /* Адаптивные колонки */
  gap: 1rem;                                                     /* Расстояние между карточками */
}
.short-content {
  color: black;
  font-size: 0.8rem;
}
.post-card {
  background: var(--secondary);                    /* Фон карточки */
  border-radius: 15px;                             /* Закругленные углы */
  border: 0.01rem solid gray;
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
</style>
