<template>
    <div v-if="article">
        <ArticleDetail :article="article" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Article } from 'components/models'
import { getArticleBySlug } from 'src/boot/axios';
import ArticleDetail from 'components/Article/detail.vue'

const route = useRoute()
const slug = route.params.slug as string

const article = ref<Article | null>(null)

onMounted(async () => {
    const { data } = await getArticleBySlug(slug)
    article.value = data
})

</script>