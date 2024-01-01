<template>
    <div class="q-pa-md">
        <q-carousel animated v-model="slide" height="460px" navigation>
            <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
                <div class="absolute-bottom custom-caption">
                    <div class="text-h4">First stop</div>
                    <div class="text-subtitle1">Mountains</div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
                <div class="absolute-bottom custom-caption">
                    <div class="text-h4">Second stop</div>
                    <div class="text-subtitle1">Famous City</div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom custom-caption">
                    <div class="text-h4">Third stop</div>
                    <div class="text-subtitle1">Famous Bridge</div>
                </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
const slide = ref('first')
</script>
  
<style lang="scss" scoped>
.custom-caption {
    text-align: center;
    padding: 12px;
    padding-bottom: 72px;
    padding-top: 32px;
    color: white;
    background-color: rgba(0, 0, 0, .3)
}
</style>
  