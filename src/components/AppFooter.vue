<template>
    <footer class="footer">
        <p>© 2025 fullstackdevblog.ru</p>
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
</style>
