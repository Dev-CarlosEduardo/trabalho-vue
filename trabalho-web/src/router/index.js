import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AreasClube from '../views/AreasClube.vue'
import ListagemClube from '../views/ListagemClube.vue'
import RegisterClube from '../views/RegisterClube.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/area',
    name: 'AreasClube',
    component: AreasClube
  },
  {
    path: '/listagem',
    name: 'ListagemClube',
    component: ListagemClube
  },
  {
    path: '/register',
    name: 'RegisterClube',
    component: RegisterClube
  },
  
]

const router = new VueRouter({
  routes
})

export default router
