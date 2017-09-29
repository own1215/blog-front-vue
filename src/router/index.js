import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/404'
import PostIndex from '@/components/post/Index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/post/:id', name: 'post-index', component: PostIndex },
    { path: '/*', component: NotFound }
  ]
})
