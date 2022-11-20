import Vue from 'vue'
import VueRouter from 'vue-router'
import userList from '../views/user-list.vue'
import userDetails from '../views/user-details.vue'
import chatScreen from '../views/chat-screen.vue'
import recipientList from '../views/message-list.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'userList', component: userList },
  { path: '/user/:id', name: 'userDetails', component: userDetails },
  { path: '/user/:id/chat', name: 'chatScreen', component: chatScreen },
  { path: '/message-list', name: 'recipientList', component: recipientList }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
