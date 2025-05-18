<template>
    <footer class="footer">
        <p>© 2025 fullstackdevblog.ru</p>
        <p>Кот/д с любовью ❤️</p>
        <div class="pika_img"><img src="./pik.png"/></div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<script setup></script>

<style lang="scss" scoped>
.footer {
    background: var(--secondary);       /* Фон из переменных */
    border: 0.01rem solid;
    text-align: center;                /* Выравнивание по центру */
    padding: 1rem;                     /* Внутренние отступы */
    margin-top: 1rem;                  /* Отступ сверху */
    border-radius: 15px;
}
.pika_img img {
    max-width: 35px;
}
</style>
