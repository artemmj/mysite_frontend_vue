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
    id: 16,
    filename: "go_grpc_diceroll.html",
    title: "Go. Статья. Проект gRPC API (игра \"Подбрасывание кубика\")",
    date: "29 Мая 2025",
    tags: "Go, gRPC",
    short_content: "В работе...",
},
{
    id: 15,
    filename: "go_grpc.html",
    title: "Go. Статья. Проект gRPC API (SSO Auth)",
    date: "25 Мая 2025",
    tags: "Go, gRPC",
    short_content: "Описание и генерация контракта, конфигурация, gRPC-сервер, сервисный слой Auth, Storage, Gracefull Shutdown, функциональные тесты (TODO: интеграция)",
},
{
    id: 14,
    filename: "go_intro.html",
    title: "Язык программирования Go (Донован, Керниган). Конспект. Вступление",
    date: "23 Мая 2025",
    tags: "Go",
    short_content: "Вступление, Hello World, аргументы командной строки, примеры программ, задания, некоторые мелочи",
},
{
    id: 11,
    filename: "go_rest_api.html",
    title: "Go. Статья. REST API приложение",
    date: "15 Мая 2025",
    tags: "Go, REST API",
    short_content: "Конфигурация приложения, логирование, storage, подготовка HTTP сервера, обработчики запросов (handlers), авторизация, тесты (TODO: деплой, больше тестов)",
},
{
    id: 10,
    filename: "vuejs_forms_comps.html",
    title: "Vue 3. Статья. Формы и компоненты",
    date: "8 Мая 2025",
    tags: "Vue 3, JavaScript",
    short_content: "Двусторонняя привязка данных, формы реактивного добавления, удаления, редактирования, работа с компонентами",
},
{
    id: 9,
    filename: "vuejs_base.html",
    title: "Vue 3. Статья. Основы",
    date: "6 Мая 2025",
    tags: "Vue 3, JavaScript",
    short_content: "Структура компонента, data, работа с атрибутами, v-bind, методы, обработчики событий, v-on, data внутри методов, вычисляемые свойства, модификаторы событий, показ по условию, v-if, v-else, v-show, v-for, перебор массивов, стилизация",
},
{
    id: 13,
    filename: "go_io.html",
    title: "Go. Потоки и файлы (by metanit.com)",
    date: "19 Мая 2025",
    tags: "Go",
    short_content: "Операции ввода-вывода. Reader и Writer. Работа с  файлами. Стандартные потоки ввода-вывода и io.Copy. Форматированный вывод. Форматируемый ввод. Чтение с консоли. Буферизированный ввод-вывод",
},
{
    id: 12,
    filename: "go_async.html",
    title: "Go. Параллельное программирование (by metanit.com)",
    date: "18 Мая 2025",
    tags: "Go",
    short_content: "Горутины. Каналы. Синхронизация. Передача потоков данных. Мьютексы. WaitGroup",
},
{
    id: 8,
    filename: "fastapi_base.html",
    title: "FastAPI. Основы (by metanit.com)",
    date: "28 Апреля 2025",
    tags: "FastAPI, Python",
    short_content: "Обработка запросов и отправка ответов, параметры пути и строки запроса, статус коды, переадресация, статические файлы, даннные запроса, заголовки, куки, формы, SQLAlchemy",
},
{
    id: 7,
    filename: "python_base.html",
    title: "Python. Статья. База (by metanit.com) (переработать)",
    date: "19 Апреля 2025",
    tags: "Python",
    short_content: "Переменные, арифметические операции, условные конструкции, циклы, фукнции, упаковка и распаковка, лямбды, преобразования типов, декораторы try..except, строки, ООП, списки, кортежи, словари, множества, List Comprehension",
},
{
    id: 6,
    filename: "go_prog_struct.html",
    title: "Go. Глубже (будет удалено)",
    date: "18 Апреля 2025",
    tags: "Go",
    short_content: "Функции (параметры, возврат, тип), указатели, структуры, методы, интерфейсы, полиморфизм",
},
{
    id: 5,
    filename: "javascript_funcs.html",
    title: "JavaScript. Функциональное программирование (удалить/переписать)",
    date: "8 Апреля 2025",
    tags: "JavaScript",
    short_content: "",
},
{
    id: 4,
    filename: "javascript_base.html",
    title: "JavaScript. Основы (удалить/переписать)",
    date: "7 Апреля 2025",
    tags: "JavaScript",
    short_content: "",
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
    title: "Django Setup Basics REST API",
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
