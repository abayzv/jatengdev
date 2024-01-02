<template>
    <div>
        <div class="q-px-md">
            <q-btn flat class="category bg-red text-white text-caption q-mt-md">
                {{ article.category.name }}
            </q-btn>
            <h1 class="text-weight-bold article-title">{{ article.title }}</h1>
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
        </div>
        <div class="q-px-md thumbnail">
            <q-img :src="article.featured_image" class="article-image" />
        </div>
    </div>
    <div class="article-detail q-px-md q-pb-xl">
        <div class="row q-col-gutter-lg q-mt-md">
            <div class="col-8 col-flex">
                <article>
                    <vue-markdown :source="article?.content" />
                </article>

                <div class="text-h5 text-weight-bold q-mt-lg">Tags</div>
                <div class="q-mt-sm row q-gutter-sm">
                    <q-btn outline flat rounded style="color: gray; border: 1px solid gray;" v-for="tag in article.tags"
                        :key="tag" :label="tag" />
                </div>

                <div class="text-h5 text-weight-bold q-mt-lg">Share this article</div>
                <div class="row q-gutter-sm q-mt-sm">
                    <div>
                        <q-btn class="bg-primary text-white" flat rounded icon="mdi-facebook" label="Facebook" />
                    </div>
                    <div>
                        <q-btn class="bg-primary text-white" flat rounded icon="mdi-twitter" label="Twitter" />
                    </div>
                    <div>
                        <q-btn class="bg-primary text-white" flat rounded icon="mdi-whatsapp" label="Whatsapp" />
                    </div>
                </div>
            </div>
            <div class="col-4 col-flex">
                <popular-tags />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { defineProps } from 'vue'
import { Article } from '../models';
import { PropType } from 'vue';
import PopularTags from '../PopularTags.vue';
import { onMounted } from 'vue';

defineProps({
    article: {
        type: Object as PropType<Article>,
        required: true
    }
})

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
}

onMounted(() => {
    // get all pre tag
    const preTags = document.querySelectorAll('pre')

    // foreach pre tag add copy button
    preTags.forEach(pre => {
        const button = document.createElement('button')
        button.innerHTML = `<i class="mdi mdi-content-copy" ></i> Copy`
        button.classList.add('btn-copy')
        button.addEventListener('click', () => {
            const text = pre.innerText.replace(' Copy', '')
            navigator.clipboard.writeText(text)
        })
        pre.appendChild(button)

        // add event listener to pre tag
        button.addEventListener('click', () => {
            button.innerHTML = `<i class="mdi mdi-check" ></i> Copied`
            setTimeout(() => {
                button.innerHTML = `<i class="mdi mdi-content-copy" ></i> Copy`
            }, 1000)
        })
    })
})

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
            overflow-x: auto;
            position: relative;
            padding-top: 3rem;
        }

        code {
            margin: 1rem 0;
        }

        img {
            max-width: 100%;
        }
    }

    .article-info {
        font-size: 16px;
        color: #777;
    }
}


.article-image {
    aspect-ratio: 16/9;
    object-fit: cover;
}

h1 {
    margin: 0;
}

.article-title {
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
    font-size: 34px;
    line-height: 2;

    @media (max-width: 768px) {
        margin-top: 1rem;
        font-size: 20px;
        padding-bottom: 0;
        line-height: 1.5;
    }
}

.btn-copy {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f44336;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 0 10px 0 10px;
    cursor: pointer;
}

.thumbnail {
    @media (max-width: 768px) {
        padding: 0;
    }
}
</style>