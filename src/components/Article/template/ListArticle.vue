<template>
    <div>
        <ArticleComponent v-for="article in articles" :key="article.id" :article="article" type="list"
            thumbnail-size="small" />
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

<style scoped></style>