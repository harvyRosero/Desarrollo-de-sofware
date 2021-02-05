import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  if(to.matched.some(record => record.meta.requireAuth)){
    if(localStorage.getItem('jwt') === null){
      next({
        path: '/'
      })
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
