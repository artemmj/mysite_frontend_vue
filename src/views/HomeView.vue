<template>
  <div id="main">
    <div class="posts-grid">
      <ArticleList :articles="articles" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ArticleList from '../components/ArticleList.vue';

// Моковые данные (можно заменить на запрос к API)
const articles = ref([
  {
      id: 8,
      filename: "python_base.html",
      title: "Python. База",
      date: "19 Апреля 2025",
      tags: "Python",
      short_content: "Переменные, арифметические операции, условные конструкции, циклы, фукнции, упаковка и распаковка, лямбды, преобразования типов, декораторы try..except, строки, ООП, списки, кортежи, словари, множества, List Comprehension",
      // data_category: "python"
  },
  {
      id: 7,
      filename: "go_deep.html",
      title: "Go. Глубже",
      date: "18 Апреля 2025",
      tags: "Go",
      short_content: "Функции (параметры, возврат, тип), указатели, структуры, методы, интерфейсы, полиморфизм",
      // data_category: "go",
  },
  {
      id: 6,
      filename: "go_base.html",
      title: "Go. Основы",
      date: "10 Апреля 2025",
      tags: "Go",
      short_content: "Базовые операции, условные выражения, массивы, условные конструкции, циклы, срезы, отображения, именованные типы и псевдонимы, defer и panic",
      // data_category: "go",
  },
  {
      id: 5,
      filename: "javascript_funcs.html",
      title: "JavaScript. Функциональное программирование",
      date: "8 Апреля 2025",
      tags: "JavaScript",
      short_content: "",
      // data_category: "js",
  },
  {
      id: 4,
      filename: "javascript_base.html",
      title: "JavaScript. Основы",
      date: "7 Апреля 2025",
      tags: "JavaScript",
      short_content: "",
      // data_category: "js",
  },
  {
      id: 3,
      filename: "django_setup_jwt_auth.html",
      title: "Django Setup JWT authentication",
      date: "25 Марта 2025",
      tags: "Django, Auth, JWT",
      short_content: "Настройка JWT аутентификации в проекте Django",
      // data_category: "django",
  },
  {
      id: 2,
      filename: "django_setup_rest_api.html",
      title: "Django Setup Basics REST API",
      date: "18 Марта 2025",
      tags: "Django, Docker, Django Rest Framework, API, Swagger, CORS",
      short_content: "Настройка чистого проекта Django в Docker для работы с REST API с Swagger, Celery, Redis",
      // data_category: "django",
  },
  {
      id: 1,
      filename: "ubuntu_setup.html",
      title: "Linux Ubuntu Setup",
      date: "15 Марта 2025",
      tags: "Linux, Ubuntu, DevOps, Docker, Nginx",
      short_content: "Быстрая настройка Linux Ubuntu под простой домашний сервер, команды и конфигурации",
      // data_category: "devops",
  }
]);
</script>

<style lang="scss" scoped>
</style>
