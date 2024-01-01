<template>
    <div class="q-pa-md">
        <div v-if="type === 'card'">
            <q-img :src="article.featured_image" class="article-image" />
            <q-btn flat class="category bg-red text-white text-caption q-mt-md">
                {{ article.category.name }}
            </q-btn>
            <h2 class="q-mt-sm text-weight-bold title">{{ article.title }}</h2>
            <div class="text-body2 q-mt-sm excerpt">{{ article.excerpt }}</div>
            <div class="q-mt-md">
                <span class="text-caption text-red">{{ article.author }}</span>
                <span> | </span>
                <span class="text-caption">{{ formatDate(article.published_at) }}</span>
            </div>
        </div>

        <div v-else class="row">
            <div class="col-4">
                <q-img :src="article.featured_image" class="article-image" :class="`thumbnail-${thumbnailSize}`" />
            </div>
            <div class="col-8 q-pl-md">
                <q-btn flat class="category bg-red text-white text-caption">
                    {{ article.category.name }}
                </q-btn>
                <h2 class="q-mt-sm text-weight-bold title">{{ article.title }}</h2>
                <div class="text-body2 q-mt-sm excerpt">{{ article.excerpt }}</div>
                <div class="q-mt-md">
                    <span class="text-caption text-red">{{ article.author }}</span>
                    <span> | </span>
                    <span class="text-caption">{{ formatDate(article.published_at) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Article } from "../models";

defineProps({
    article: {
        type: Object as PropType<Article>,
        required: true
    },
    type: {
        type: String as PropType<'card' | 'list'>,
        default: 'card'
    },
    thumbnailSize: {
        type: String as PropType<'small' | 'medium' | 'large'>,
        default: 'medium'
    }
})

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
}

</script>

<style scoped lang="scss">
.article-image {
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 10px;
}

.thumbnail-small {
    height: 150px;
}

.thumbnail-medium {
    height: 200px;
}

.thumbnail-large {
    height: 300px;
}

.title {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 0;
}

// excerpt max 2 lines
.excerpt {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
