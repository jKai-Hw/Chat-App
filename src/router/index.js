import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import chatScreen from '../views/chat-screen.vue'
import talkView from '../views/talk-view.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'index', component: index },
  { path: '/user/:id/chat', name: 'chatScreen', component: chatScreen },
  { path: '/talk-view', name: 'talk-view', component: talkView }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
