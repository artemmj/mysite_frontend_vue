<template>
    <div class="about-block">
        <p>Добро пожаловать на сайт <b>fullstackdevblog.ru</b> - по сути техно- кодо- программистский блог, который запустился в марте-апреле 2025 года. По факту - живой архив моих знаний, заметок, конспектов, шпаргалок и т.п., который растёт вместе со мной. Ниже на странице располагаются планы на будущее, а также фиксируется процесс развития.</p><br>
        <p><b>TODO:</b></p>
        <ul>
            <li>🛠️ <b>Грокаем алгоритмы: </b>Статья</li>
            <li>📝 <b>Go: </b>Статья про проект gRPC API. Игра "Подбрасывание кубика". Доработки</li>
            <li>📝 <b>Vue 3: </b>Статья с примером простого приложения</li>
            <br><hr><br>
            <li>✅ <b>Go: </b>Статья про проект gRPC API. Игра "Подбрасывание кубика". Первая итерация, доработать</li>
            <li>✅ <b>Go:</b> Ознакомительная статья про поднятие сервера gRPC API (SSO Auth).</li>
            <li>✅ <b>Go:</b> Статья про простой REST API сервис.</li>
            <li>✅ <b>Vue 3:</b> Основы, формы, компоненты.</li>
        </ul>
        <table>
            <tbody>
                <tr>
                    <td><b><u>09.06.2025</u></b></td>
                    <td>Go gRPC API. Игра "Подбрасывание кубика". Первая итерация</td>
                </tr>
                <tr>
                    <td><b><u>26.05.2025</u></b></td>
                    <td>Go gRPC API. SSO Auth. Заключительная итерация.</td>
                </tr>
                <tr>
                    <td><b><u>25.05.2025</u></b></td>
                    <td>Go gRPC API. SSO Auth. Первая итерация.</td>
                </tr>
                <tr>
                    <td><b><u>24.05.2025</u></b></td>
                    <td>Язык программирования Go by Донован и Керниган. Вступление.</td>
                </tr>
                <tr>
                    <td><b><u>19.05.2025</u></b></td>
                    <td>Статья по параллельному программированию, ввод-вывод в Go.</td>
                </tr>
                <tr>
                    <td><b><u>18.05.2025</u></b></td>
                    <td>Go gPRC. Параллельно асинхронность, файлы, сетевое программирование отдельной статьей.</td>
                </tr>
                <tr>
                    <td><b><u>15.05.2025</u></b></td>
                    <td>REST API приложение на Go.</td>
                </tr>
                <tr>
                    <td><b><u>13.05.2025</u></b></td>
                    <td>Vue 3 - формы и компоненты</td>
                </tr>
                <tr>
                    <td><b><u>6.05.2025</u></b></td>
                    <td>Основы Vue 3.</td>
                </tr>
                <tr>
                    <td><b><u>4.05.2025</u></b></td>
                    <td>Добавлен этот раздел.</td>
                </tr>
                <tr>
                    <td><b><u>28.04.2025</u></b></td>
                    <td>FastAPI - основы</td>
                </tr>
                <tr>
                    <td><b><u>25.04.2025</u></b></td>
                    <td>Завершены статьи по основам Go.</td>
                </tr>
                <tr>
                    <td><b><u>19.04.2025</u></b></td>
                    <td>Решил переключиться, и пробежаться по основам любимого Python. Чисто заметка-напоминалка.</td>
                </tr>
                <tr>
                    <td><b><u>18.04.2025</u></b></td>
                    <td>Не отходя далеко от кассы, вникаем в Go дальше.</td>
                </tr>
                <tr>
                    <td><b><u>10.04.2025</u></b></td>
                    <td>Всегда был очень интересен язык Go, параллельно с любимым Python.</td>
                </tr>
                <tr>
                    <td><b><u>8.04.2025</u></b></td>
                    <td>Продолжение пробежки по JavaScript, накидал конспект по функциональщине.</td>
                </tr>
                <tr>
                    <td><b><u>7.04.2025</u></b></td>
                    <td>Пробежка по основам JavaScript, конспект по основе.</td>
                </tr>
                <tr>
                    <td><b><u>25.03.2025</u></b></td>
                    <td>Добавил свою старую статью по настройке JWT авторизации в Django.</td>
                </tr>
                <tr>
                    <td><b><u>18.03.2025</u></b></td>
                    <td>Добавил заметку по поднятию проекта Django под классический REST API.</td>
                </tr>
                <tr>
                    <td><b><u>15.03.2025</u></b></td>
                    <td>Создание сайта, продолжение знакомства и эксперименты с HTML CSS. Деплой на сервер, домен.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'AppAbout' // Явное имя для ESLint
}
</script>

<script setup>
</script>

<style lang="scss" scoped>
.about-block {
    background: var(--secondary);
    border-radius: 15px;
    border: 0.01rem solid rgb(220, 220, 220);
    margin: 20px;
    padding: 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);  /* Тень для глубины */
}
.about-block ul {
    margin-left: 40px;
}
table {
    border-spacing: 0rem;
    margin-top: 40px;
    width: 100%;
    font-family: 'Segoe UI', sans-serif;
    background: whitesmoke;
}
td {
    padding: 0.5rem;
    border: 1px solid #008aaa;
    color: #34495e;
}
@media (max-width: 768px) {
    .about-block {
        padding: 15px;
        margin: 1px;
    }
}
</style>
