<template>
    <div class="slider-container q-pa-md">
        <q-carousel animated v-model="slide" arrows class="slider">
            <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
                <div class="absolute-bottom custom-caption">
                    <div class="title">First stop</div>
                    <div class="subtitle">Mountains</div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
                <div class="absolute-bottom custom-caption">
                    <div class="title">Second stop</div>
                    <div class="subtitle">Famous City</div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom custom-caption">
                    <div class="title">Third stop</div>
                    <div class="subtitle">Famous Bridge</div>
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
    padding: 18px;
    color: white;
    background-color: rgba(0, 0, 0, .3);

    @media (max-width: 600px) {
        padding: 12px;
    }
}

.slider {
    @media (max-width: 600px) {
        height: 150px;
    }

    @media (min-width: 768px) {
        height: 300px;
    }

    @media (min-width: 1024px) {
        height: 460px;
    }
}

.title {
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 600px) {
        font-size: 16px;
    }
}

.subtitle {
    font-size: 16px;
    font-weight: medium;

    @media (max-width: 600px) {
        font-size: 12px;
    }
}

.slider-container {
    @media (max-width: 768px) {
        padding: 0;
    }
}
</style>
  