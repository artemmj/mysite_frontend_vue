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
    id: 9,
    filename: "go_grpc_diceroll.html",
    title: "Go. Статья. Проект gRPC API (игра \"Подбрасывание кубика\")",
    date: "09 июня 2025",
    tags: "Go, gRPC",
    short_content: "Структура проекта, логгер, конфиг, настройка и миграции БД, описание основного аппа, описание апи приложения, генераторы (TODO: тесты, улучшения описания)",
},
{
    id: 8,
    filename: "go_grpc_auth.html",
    title: "Go. Статья. Проект gRPC API (SSO Auth)",
    date: "25 Мая 2025",
    tags: "Go, gRPC",
    short_content: "Описание и генерация контракта, конфигурация, gRPC-сервер, сервисный слой Auth, Storage, Gracefull Shutdown, функциональные тесты (TODO: интеграция)",
},
{
    id: 7,
    filename: "go_rest_api.html",
    title: "Go. Статья. Проект REST API (URL-Shortener)",
    date: "15 Мая 2025",
    tags: "Go, REST API",
    short_content: "Конфигурация приложения, логирование, storage, подготовка HTTP сервера, обработчики запросов (handlers), авторизация, тесты (TODO: деплой, больше тестов)",
},
{
    id: 6,
    filename: "vuejs_forms_comps.html",
    title: "Vue 3. Статья. Формы и компоненты",
    date: "8 Мая 2025",
    tags: "Vue 3, JavaScript",
    short_content: "Двусторонняя привязка данных, формы реактивного добавления, удаления, редактирования, работа с компонентами",
},
{
    id: 5,
    filename: "vuejs_base.html",
    title: "Vue 3. Статья. Основы",
    date: "6 Мая 2025",
    tags: "Vue 3, JavaScript",
    short_content: "Структура компонента, data, работа с атрибутами, v-bind, методы, обработчики событий, v-on, data внутри методов, вычисляемые свойства, модификаторы событий, показ по условию, v-if, v-else, v-show, v-for, перебор массивов, стилизация",
},
{
    id: 4,
    filename: "fastapi_base.html",
    title: "FastAPI. Основы",
    date: "28 Апреля 2025",
    tags: "FastAPI, Python",
    short_content: "Обработка запросов и отправка ответов, параметры пути и строки запроса, статус коды, переадресация, статические файлы, даннные запроса, заголовки, куки, формы, SQLAlchemy",
},
{
    id: 3,
    filename: "django_setup_jwt_auth.html",
    title: "Django Setup JWT authentication",
    date: "25 Марта 2025",
    tags: "Django, JWT",
    short_content: "Настройка JWT аутентификации в проекте Django",
},
{
    id: 2,
    filename: "django_setup_rest_api.html",
    title: "Django Setup REST API",
    date: "18 Марта 2025",
    tags: "Django, Docker",
    short_content: "Настройка чистого проекта Django в Docker для работы с REST API с Swagger, Celery, Redis",
},
{
    id: 1,
    filename: "ubuntu_setup.html",
    title: "Linux Ubuntu Setup",
    date: "15 Марта 2025",
    tags: "Linux, Ubuntu, Docker, Nginx",
    short_content: "Быстрая настройка Linux Ubuntu под простой домашний сервер, команды и конфигурации",
}]);
</script>

<style lang="scss" scoped>
</style>
