<template>
  <q-page>
    <Slider />
    <!-- <NewArticle /> -->
    <div class="row q-mt-xl">
      <div class="col-8">
        <NewArticle />
        <ListArticle />
      </div>
      <div class="col-4 q-px-md">
        <!--random hashtag-->
        <q-item-label class="text-h6 q-my-md">Hashtag</q-item-label>
        <q-chip v-for="item in 10" :key="item" class="q-mb-sm" outlined clickable color="primary" text-color="white"
          :label="`#Hashtag${item}`" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import NewArticle from 'components/Article/template/NewArticle.vue'
import ListArticle from 'components/Article/template/ListArticle.vue'
import Slider from 'components/Slider/index.vue'

</script>
