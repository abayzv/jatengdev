<template>
    <div class="article-detail q-px-md">
        <q-btn flat class="category bg-red text-white text-caption q-mt-md">
            {{ article.category.name }}
        </q-btn>
        <h1 class="q-mt-sm text-weight-bold text-h4 article-title">{{ article.title }}</h1>
        <div class="q-my-md article-info row items-center">
            <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <div class="q-ml-md">
                <span class="text-red">{{ article.author }}</span>
                <span> | </span>
                <span>{{ formatDate(article.published_at) }}</span>
            </div>
        </div>
        <q-img :src="article.featured_image" class="article-image" />
        <div class="row">
            <div class="col-8">
                <article>
                    <vue-markdown :source="article?.content" />
                </article>
            </div>
            <div class="col-4 q-px-md">
                <q-item-label class="text-h6 q-my-md">Hashtag</q-item-label>
                <q-chip v-for="item in 10" :key="item" class="q-mb-sm" outlined clickable color="primary" text-color="white"
                    :label="`#Hashtag${item}`" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { defineProps } from 'vue'
import { Article } from '../models';
import { PropType } from 'vue';

defineProps({
    article: {
        type: Object as PropType<Article>,
        required: true
    }
})

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
}

</script>

<style lang="scss">
.article-detail {
    article {
        h1 {
            font-size: 2rem;
            font-weight: bold;
            margin: 1rem 0;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: bold;
            margin: 1rem 0;
        }

        h3 {
            font-size: 1.17rem;
            font-weight: bold;
            margin: 1rem 0;
        }

        h4 {
            font-size: 1rem;
            font-weight: bold;
            margin: 1rem 0;
        }

        h5 {
            font-size: 0.83rem;
            font-weight: bold;
            margin: 1rem 0;
        }

        h6 {
            font-size: 0.67rem;
            font-weight: bold;
            margin: 1rem 0;
        }

        p {
            font-size: 1rem;
            margin: 1rem 0;
        }

        ul {
            margin: 1rem 0;
        }

        li {
            margin: 0.5rem 0;
        }

        blockquote {
            margin: 1rem 0;
        }

        pre {
            margin: 1rem 0;
            background-color: #2c2c2c;
            color: #fff;
            padding: 1rem;
            border-radius: 10px;
        }

        code {
            margin: 1rem 0;
        }
    }

    .article-image {
        aspect-ratio: 16/9;
        object-fit: cover;
    }

    .article-title {
        padding-bottom: 1rem;
        border-bottom: 1px solid #ccc;
    }

    .article-info {
        font-size: 16px;
        color: #777;
    }
}
</style>