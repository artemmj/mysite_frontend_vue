<template>
  <div id="main">
    <div class="welcome-block">
      <p><b>Добро пожаловать</b> на цифровую стройплощадку знаний - <b>fullstackdevblog.ru</b>. Запустился в апреле 2025 года. Этот сайт — <b>живой архив</b>, который растёт вместе со мной: конспекты по <b>Linux</b>, база <b>Python</b>, заметки о <b>Django</b> и <b>FastAPI</b>, первые наброски статей про <b>Go</b>, <b>JavaScript</b> и <b>Vue</b>. Здесь нет музейных экспонатов — только <b>свежий код</b>, <b>рабочие примеры</b> и <b>мысли</b>, которые ещё пахнут кофе. Сайт только <b>набирает ход</b>: база статей <b>пополняется</b>, разделы <b>обрастают деталями</b>, а некоторые темы <b>ждут своего часа</b> в черновиках.</p>
    </div>
    <p><b>Материалы:</b></p>
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
    id: 9,
    filename: "fastapi_base.html",
    title: "FastApi. Основы",
    date: "28 Апреля 2025",
    tags: "FastAPI, Python",
    short_content: "Обработка запросов и отправка ответов, параметры пути и строки запроса, статус коды, переадресация, статические файлы, даннные запроса, заголовки, куки, формы, SQLAlchemy",
  },
  {
    id: 8,
    filename: "python_base.html",
    title: "Python. База",
    date: "19 Апреля 2025",
    tags: "Python",
    short_content: "Переменные, арифметические операции, условные конструкции, циклы, фукнции, упаковка и распаковка, лямбды, преобразования типов, декораторы try..except, строки, ООП, списки, кортежи, словари, множества, List Comprehension",
  },
  {
    id: 7,
    filename: "go_deep.html",
    title: "Go. Глубже",
    date: "18 Апреля 2025",
    tags: "Go",
    short_content: "Функции (параметры, возврат, тип), указатели, структуры, методы, интерфейсы, полиморфизм",
  },
  {
    id: 6,
    filename: "go_base.html",
    title: "Go. Основы",
    date: "10 Апреля 2025",
    tags: "Go",
    short_content: "Базовые операции, условные выражения, массивы, условные конструкции, циклы, срезы, отображения, именованные типы и псевдонимы, defer и panic",
  },
  {
    id: 5,
    filename: "javascript_funcs.html",
    title: "JavaScript. Функциональное программирование",
    date: "8 Апреля 2025",
    tags: "JavaScript",
    short_content: "",
  },
  {
    id: 4,
    filename: "javascript_base.html",
    title: "JavaScript. Основы",
    date: "7 Апреля 2025",
    tags: "JavaScript",
    short_content: "",
  },
  {
    id: 3,
    filename: "django_setup_jwt_auth.html",
    title: "Django Setup JWT authentication",
    date: "25 Марта 2025",
    tags: "Django, Auth, JWT",
    short_content: "Настройка JWT аутентификации в проекте Django",
  },
  {
    id: 2,
    filename: "django_setup_rest_api.html",
    title: "Django Setup Basics REST API",
    date: "18 Марта 2025",
    tags: "Django, Docker, Django Rest Framework, API, Swagger, CORS",
    short_content: "Настройка чистого проекта Django в Docker для работы с REST API с Swagger, Celery, Redis",
  },
  {
    id: 1,
    filename: "ubuntu_setup.html",
    title: "Linux Ubuntu Setup",
    date: "15 Марта 2025",
    tags: "Linux, Ubuntu, DevOps, Docker, Nginx",
    short_content: "Быстрая настройка Linux Ubuntu под простой домашний сервер, команды и конфигурации",
  }
]);
</script>

<style lang="scss" scoped>
.welcome-block {
  background: var(--secondary);
  border-radius: 15px;
  border: 0.01rem solid gray;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);  /* Тень для глубины */
}
</style>
