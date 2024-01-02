
<template>
  <q-layout view="hhh lpR fff">

    <q-header bordered class="bg-white text-black" height-hint="98">
      <div class="header-top q-pa-md">
        <div class="container-xl">
          <q-toolbar>
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" class="show hide-lg" />

            <q-toolbar-title>
              <q-img src="../assets/logo-jatengdev.svg" width="150px" @click="$router.push('/')" class="cursor-pointer" />
            </q-toolbar-title>

            <q-space />

            <div class="show-lg hide">
              <q-list class="row">
                <q-item v-for="menu in menus" :key="menu.title">
                  <q-item-section>
                    <q-item-label>{{ menu.title }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

          </q-toolbar>
        </div>
      </div>

      <div class="container-xl q-pa-sm">
        <!-- render submenus -->
        <div class="submenu">
          <div v-if="isShowCategory" class="q-pa-sm">
            <q-item-label class="q-pa-sm submenu-title">Semua Kategori</q-item-label>
          </div>
          <q-list v-else class="row slider">
            <q-item v-for="(menu, index) in subMenus" :key="menu.title" class="q-pa-sm">
              <q-item-section>
                <q-btn flat rounded :label="menu.title" :to="menu.link" class="q-px-md"
                  :class="route.query.category == menu.menu ? 'bg-red text-white' : 'bg-outline'" />
              </q-item-section>
            </q-item>
          </q-list>

          <div style="border-left: 1px solid #ddd;" class="row items-center justify-center">
            <q-btn :riple="false" flat icon="arrow_drop_down" style="height: 100%;"
              @click="isShowCategory = !isShowCategory" />
          </div>
        </div>
      </div>

      <div v-if="isShowCategory" class="header-bottom">
        <div class="container-xl q-pa-sm">
          <q-list class="row">
            <q-item v-for="(menu, index) in subMenus" :key="menu.title" class="q-pa-sm">
              <q-item-section>
                <q-btn flat rounded :label="menu.title" :to="menu.link" class="q-px-md"
                  :class="route.query.category == menu.menu ? 'bg-red text-white' : 'bg-outline'" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile">
      <!-- drawer content -->
      <q-list>
        <q-item-label header>
          <q-img src="../assets/logo-jatengdev.svg" width="150px" />
        </q-item-label>

        <EssentialLink v-for="link in menus" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container class="container-xl">
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white q-pa-md text-grey-7 q-py-xl">
      <div class="container-xl row justify-between">
        <div class="col-4 col-flex">
          <div>
            <q-img src="../assets/logo-jatengdev.svg" width="150px" @click="$router.push('/')" class="cursor-pointer" />
            <p class="text-body1 q-mt-md">
              JatengDev adalah komunitas pengembang perangkat lunak di Jawa Tengah yang berfokus pada pengembangan
              aplikasi berbasis web dan mobile.
            </p>
          </div>
        </div>

        <div class="col-6 col-flex">
          <div class="footer2">
            <q-item-label class="text-weight-bold" header>Connect With US</q-item-label>
            <!-- Social -->
            <q-list class="row">
              <q-item>
                <q-item-section>
                  <q-btn flat round icon="ion-logo-facebook" class="bg-outline" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-btn flat round icon="ion-logo-linkedin" class="bg-outline" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-btn flat round icon="ion-logo-instagram" class="bg-outline" />
                </q-item-section>
              </q-item>
            </q-list>

            <!-- Link -->
            <q-list class="row">
              <q-item>
                <q-item-section>
                  <q-item-label>About Jateng Dev</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Privacy Policy</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Contact Us</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

            <!-- Copyright -->
            <q-item-label class="copyright">
              Copyright © 2021 JatengDev. All rights reserved
            </q-item-label>
          </div>
        </div>
      </div>
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const leftDrawerOpen = ref(false)
const isShowCategory = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const menus = [
  {
    title: 'Beranda',
    link: '/'
  },
  {
    title: 'Berita',
    link: '/news'
  },
  {
    title: 'Belajar',
    link: '/tutorial'
  },
  {
    title: 'Tentang Kami',
    link: '/about'
  }
]

const subMenus = [
  {
    title: 'Semua',
    menu: null,
    link: '/'
  },
  {
    title: 'Laravel',
    menu: 'laravel',
    link: '/?category=laravel'
  },
  {
    title: 'Vue',
    menu: 'vue',
    link: '/?category=vue'
  },
  {
    title: 'React',
    menu: 'react',
    link: '/?category=react'
  },
  {
    title: 'Javascript',
    menu: 'javascript',
    link: '/?category=javascript'
  },
  {
    title: 'PHP',
    menu: 'php',
    link: '/?category=php'
  },
  {
    title: 'Python',
    menu: 'python',
    link: '/?category=python'
  }
]

</script>

<style scoped lang="scss">
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  xxl: 1536px,
);

$container-max-width: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  xxl: 1536px,
);

// create container only each breakpoint
@each $breakpoint in map-keys($breakpoints) {
  @media (min-width: map-get($breakpoints, $breakpoint)) {
    .container-#{$breakpoint} {
      max-width: map-get($container-max-width, $breakpoint);
      margin: 0 auto;
    }
  }
}

// create show and hide classes for each breakpoint
@each $breakpoint in map-keys($breakpoints) {
  @media (min-width: map-get($breakpoints, $breakpoint)) {
    .show-#{$breakpoint} {
      display: block !important;
    }

    .hide-#{$breakpoint} {
      display: none !important;
    }
  }
}

.show {
  display: block;
}

.hide {
  display: none;
}

.header-top {
  border-bottom: 1px solid #ddd;
}

.header-bottom {
  border-top: 1px solid #ddd;
}

.bg-red {
  background-color: #f44336;
  color: white;
}

.bg-outline {
  background-color: white;
  color: #272727;
  border: 1px solid #cfcfcf;
}

.slider {
  overflow-x: auto;
  flex-wrap: nowrap;

  // hide scrollbar
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;

  /* IE 10+ */
  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
}

.submenu {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.submenu-title {
  font-size: 1rem;
  font-weight: bold;
}

// footer2 on mobile align left, on desktop align right
.footer2 {
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}

.copyright {

  // on desktop margin right 1rem
  @media (min-width: 1024px) {
    margin-right: 1rem;
  }
}
</style>

<style lang="scss">
.col-flex {
  @media (max-width: 768px) {
    width: 100% !important;
  }
}
</style>