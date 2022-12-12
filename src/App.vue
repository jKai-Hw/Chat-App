<template>
  <v-app class="d-flex">
    <SystemBar />
    <!-- <v-navigation-drawer permanent app width="30vw" v-model="drawer" class="drawer"> -->
    <v-navigation-drawer permanent app width="30vw" height="100%" class="nav-drawer d-none d-sm-flex">

      <UserList1 />
    </v-navigation-drawer>
    <div>
      <!-- <NavAppBar /> -->

      <!--サイドバー上アイコンなどとデザインと新機能とスクロール -->
      <!-- 終わった→  Dialog入れ子(詳細＋電話(番号表示できる)とビデオ通話とバック画像と国にピンIcon)とChatScreen上アイコンと -->

      <v-main class="main pb-0">
        <router-view  />
      </v-main>
    </div>
  </v-app>
</template>

<script>
//import { compile } from 'vue/types/umd';
import NavAppBar from '@/components/NavAppBar.vue'
import SystemBar from '@/components/SystemBar.vue'
import UserList1 from '@/components/UserList1.vue'



export default {
  name: 'App',
  components: {
    NavAppBar,
    SystemBar,
    UserList1,
  },
  data: () => ({
    //
  }),
}
</script>

<style>
.nav-drawer {
  max-height: calc(100% - 34px) !important;
}
@media only screen and (min-width: 37.5rem) {
  /* .main {
    width: 70vw;
    position: absolute;
    left: 30vw;
  } */
}
@media only screen and (max-width: 37.5rem/* スマホの時 */) {
  /* .main {
    padding-top: 32px !important;
  } */
}
</style>
