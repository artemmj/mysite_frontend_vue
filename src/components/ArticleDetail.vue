<template>
    <div class="article-layout">
        <!-- Боковое меню для десктопа -->
        <aside class="toc-desktop" :class="{ 'toc-visible': tocVisible }">
            <div class="toc-header">
                <h3>Оглавление</h3>
                <button class="toc-close" @click="tocVisible = false" v-if="isMobile">
                    &times;
                </button>
            </div>
            <ul class="toc-list">
                <li 
                    v-for="(item, index) in tocItems" 
                    :key="index"
                    :class="{ 'active': activeItem === index }"
                    @click="scrollToHeading(item.id)"
                >
                    {{ item.text }}
                </li>
            </ul>
        </aside>

        <!-- Кнопка бургер для мобильных -->
        <button class="toc-toggle" @click="tocVisible = !tocVisible" v-if="isMobile">
            ☰ Оглавление
        </button>

        <div class="article-container">
            <div v-html="articleContent"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { highlightAll } from '@/plugins/prism';

const route = useRoute();
const articleContent = ref('');
const tocItems = ref([]);
const activeItem = ref(null);
const tocVisible = ref(false);
const isMobile = ref(false);

// Проверка на мобильное устройство
const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
};

// Загрузка HTML-статьи
onMounted(async () => {
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const filename = route.params.id;
    const response = await fetch(`/articles/${filename}`);
    articleContent.value = await response.text();
});

watch(articleContent, async () => {
    await nextTick();
    highlightAll();
    generateTOC();
    setupScrollSpy();
});

// Генерация оглавления
const generateTOC = () => {
    const articleContainer = document.querySelector('.article-container');
    if (!articleContainer) return;

    const headings = articleContainer.querySelectorAll('h3');
    tocItems.value = Array.from(headings).map((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        return {
            id,
            text: heading.textContent
        };
    });
};

// Плавная прокрутка к заголовку
const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    if (isMobile.value) {
        tocVisible.value = false;
    }
};

// Отслеживание активного заголовка при прокрутке
const setupScrollSpy = () => {
    const headings = document.querySelectorAll('h3');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    const id = entry.target.id;
                    const index = tocItems.value.findIndex(item => item.id === id);
                    if (index !== -1) {
                        activeItem.value = index;
                    }
                }
            });
        },
        {
            rootMargin: '0px 0px -50% 0px',
            threshold: 0.5
        }
    );

    headings.forEach(heading => {
        observer.observe(heading);
    });

    onUnmounted(() => {
        headings.forEach(heading => {
            observer.unobserve(heading);
        });
    });
};
</script>

<style lang="scss">
.article-layout {
    display: flex;
    position: relative;
    margin: 0 auto;
    padding: 20px;
}
/* Основной контейнер для статьи */
.article-container {
    flex: 1;
    min-width: 0; /* Предотвращает переполнение */
    max-width: 100%;
    border: 0.01rem solid;
    margin: 20px auto 40px;                     /* Вертикальные отступы + автоматическое центрирование по горизонтали */
    padding: 2rem;                              /* Внутренние отступы со всех сторон */
    background: var(--secondary);               /* Цвет фона из CSS-переменных (меняется при смене темы) */
    border-radius: 15px;                        /* Закругление углов контейнера */
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);  /* Тень с прозрачностью 5% для эффекта глубины */
    animation: card-entrance 0.5s ease-out;     /* Анимация появления с названием, длительностью и функцией времени */
}
.article-container p {
    margin: 20px;
}
.article-container b {
    background-color: rgb(240, 240, 240);
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
}
.article-container ul {
    margin-left: 50px;
}
.article-title {
    text-align: center;
    color: var(--accent);  /* Цвет текста из акцентной переменной */
    margin-bottom: 1.5rem;  /* Отступ снизу для визуального разделения */
    font-size: 2.0rem;  /* Размер шрифта для заголовка */
    border-bottom: 2px solid var(--accent);  /* Подчеркивание акцентной линией */
    padding-bottom: 0.5rem;  /* Отступ между текстом и нижней границей */
}
.article-meta {
  display: flex;  /* Гибкий контейнер для элементов в строку */
  gap: 1rem;  /* Расстояние между дочерними элементами */
  margin-bottom: 2rem;  /* Отступ снизу для разделения с контентом */
  opacity: 0.8;  /* Полупрозрачность для второстепенной информации */
  font-size: 0.9rem;  /* Уменьшенный размер шрифта */
}
.article-ol {
    columns: 1;
    margin-left: 80px;
    -webkit-columns: 1;
    -moz-columns: 1;
}
.section-title {
    text-align: center;
    color: var(--accent);  /* Акцентный цвет текста */
    background-color: rgb(236, 234, 234);
    margin: 2rem auto 1rem;  /* Отступы: сверху 2rem, снизу 1rem */
    padding-bottom: 0.3rem;  /* Отступ для визуального разделения линии */
    border-bottom: 1px dashed var(--accent);  /* Пунктирная акцентная линия снизу */
}
/* Стилизация путей к файлам */
.file-path {
    color: var(--accent);  /* Акцентный цвет текста */
    font-family: monospace;  /* Моноширинный шрифт */
    margin-left: 20px;
    padding: 0.5rem 0.8rem;  /* Компактные внутренние отступы */
    background: var(--primary);  /* Фон из первичной переменной */
    border-radius: 4px;  /* Слегка закругленные углы */
    display: inline-block;  /* Строчно-блочное отображение */
}
pre[class*="language-"] {
    margin: 20px;
    padding: 20px;
    font-size: 0.9rem;
    border-radius: 5px;  /* Закругленные углы */
    overflow-x: auto;
}

.toc-desktop {
    max-width: 250px;
    padding: 20px;
    position: sticky;
    top: 20px;
    align-self: flex-start;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    border-right: 1px solid #eee;
}

.toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.toc-list li {
    padding: 8px 0;
    cursor: pointer;
    transition: all 0.2s;
    border-left: 3px solid transparent;
    padding-left: 10px;
}

.toc-list li:hover {
    color: #42b983;
}

.toc-list li.active {
    border-left: 3px solid #42b983;
    color: #42b983;
    font-weight: bold;
}

.toc-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.toc-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.toc-toggle {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 60px;
    padding: 10px 15px;
    background: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    #app {
        padding-left: 3px;
        padding-right: 3px;
    }
    .article-container {
        /* Уменьшенные отступы и адаптивная ширина */
        margin: 1px;
        /* Меньшие внутренние отступы */
        padding: 1rem;
    }
    .article-container p {
        margin: 5px;
    }
    pre[class*="language-"] {
        margin: 5px;
        font-size: 0.8rem;
    }
    .toc-desktop {
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        max-width: 300px;
        height: 100vh;
        background: white;
        z-index: 1000;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }

    .toc-desktop.toc-visible {
        transform: translateX(0);
    }

    .toc-toggle {
        display: block;
    }

    .article-container {
        width: 100%;
    }
}
</style>
