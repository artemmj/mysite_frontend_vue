<template>
    <header class="header">
        <div class="header__left">
            <div class="logo"><a href="/">fullstackdevblog.ru</a></div>
        </div>
        <div class="header__right">
            <div class="about"><a href="/about"><img src="./about.png"></a></div>
        </div>
    </header>
</template>

<script>
</script>


<script setup>
</script>

<style lang="scss" scoped>
header {
    // position: fixed;
    background: var(--secondary);
    border-radius: 15px;
    border: 0.01rem solid;
    padding: 0.5rem;                           /* Внутренние отступы */
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);  /* Тень для глубины */
    width: 100%;                               /* На всю ширину экрана */
    top: 0;                                    /* Прижатие к верху */
    z-index: 1000;                             /* Поверх остальных элементов */
    display: flex;
    justify-content: space-between; /* Распределение по краям */
    align-items: center; /* Вертикальное выравнивание */
}
.header__left {
    display: flex;
}
.header__right {
    display: flex;
}
.about {
    margin-top: 5px;
    margin-right: 20px;
}
.about img {
    max-width: 25px;
}
.logo {
    margin-left: 20px;
}
.logo a {
    border-bottom: solid;
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
    text-decoration: none;
    color: #004998;
}
</style>
