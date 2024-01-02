<template>
    <div v-if="article">
        <div class="q-pa-md">
            <q-breadcrumbs gutter="sm" class="text-body1 text-red" active-color="grey-7">
                <q-breadcrumbs-el label="Home" to="/" />
                <q-breadcrumbs-el label="Blog" />
                <q-breadcrumbs-el :label="article.title" />
            </q-breadcrumbs>
        </div>
        <ArticleDetail :article="article" />
    </div>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Article } from 'components/models'
import { getArticleBySlug } from 'src/boot/axios';
import ArticleDetail from 'components/Article/detail.vue'

const route = useRoute()
const slug = route.params.slug as string

const article = ref<Article | null>(null)

useMeta({
    title: article.value?.title,
})

onMounted(async () => {
    const { data } = await getArticleBySlug(slug)
    article.value = data
})

</script>