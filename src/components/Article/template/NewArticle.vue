<template>
    <div class="row justify-between q-px-md">
        <div class="title">Berita Terkini</div>
        <div class="text-body1 text-red text-weight-bold">Lihat Semua</div>
    </div>
    <div class="row q-mt-sm article-list">
        <ArticleComponent v-for="article in articles" :key="article.id" :article="article" class="col-6 col-flex" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Article } from '../../models';
import ArticleComponent from '../index.vue';
import { getArticles } from '../../../boot/axios'

const articles = ref<Article[]>([])

onMounted(async () => {
    const { data } = await getArticles()
    articles.value = data
})

</script>

<style scoped lang="scss">
.title {
    padding-bottom: 8px;
    border-bottom: 3px solid #f44336;
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 18px;
    }
}

// article list, on mobile only show 1 child
.article-list {
    @media (max-width: 768px) {
        &>*:not(:first-child) {
            display: none;
        }
    }
}
</style>