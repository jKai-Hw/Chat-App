<template>
  <v-app>
    <NavAppBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
//import { compile } from 'vue/types/umd';
import NavAppBar from '@/components/NavAppBar.vue'


export default {
  name: 'App',
  components: { NavAppBar },
  data: () => ({
    //
  }),
}
</script>
