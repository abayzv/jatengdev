<template>
    <div class="row justify-between items-end q-px-md">
        <div class="text-h5 title">Berita Terkini</div>
        <div class="text-body1 text-red text-weight-bold">Lihat Semua</div>
    </div>
    <div class="row">
        <ArticleComponent v-for="article in articles" :key="article.id" :article="article" class="col-6" />
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
}
</style>