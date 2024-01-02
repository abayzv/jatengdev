<template>
    <div class="bg-grey-3 q-pa-md">
        <div class="text-h5">Tags Populer</div>
        <div class="q-mt-md">
            <q-chip v-for="item in hashTag" :key="item" class="q-mb-sm" outlined clickable color="red" text-color="white"
                :label="`#${item}`" />
        </div>
    </div>
</template>

<script setup lang="ts">
// generate 10 random hashtag 
const hashTag = [
    'laravel', 'vuejs', 'quasar', 'javascript', 'php', 'python', 'java', 'c++', 'c#', 'ruby'
]
</script>