<template>
  <v-app id="v-app" class="d-flex">
    <SystemBar />
    <v-navigation-drawer permanent app width="30vw" height="100%" class="nav-drawer d-none d-sm-flex">
      <UserList />
    </v-navigation-drawer>

    <v-main class="main pb-0">
      <router-view  />
    </v-main>
  </v-app>
</template>

<script>
import SystemBar from '@/components/SystemBar.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'App',
  components: {
    SystemBar,
    UserList,
  },
  data: () => ({
    //
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
#v-app {
  font-family: 'Source Sans Pro', sans-serif;
}
.f-NSJ {
  font-family: 'Noto Sans JP', sans-serif;
}
.f-black {
  color: #333333;
}
.nav-drawer {
  max-height: calc(100% - 34px) !important;
}
</style>
