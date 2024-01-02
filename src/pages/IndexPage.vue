<template>
  <q-page class="q-pb-xl">
    <Slider />
    <!-- <NewArticle /> -->
    <div class="row q-mt-lg ">
      <div class="col-8 col-flex">
        <NewArticle />
        <ListArticle />
      </div>
      <div class="col-4 col-flex q-px-md">
        <!--random hashtag-->
        <PopularTags />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import NewArticle from 'components/Article/template/NewArticle.vue'
import ListArticle from 'components/Article/template/ListArticle.vue'
import PopularTags from 'components/PopularTags.vue'
import Slider from 'components/Slider/index.vue'

</script>