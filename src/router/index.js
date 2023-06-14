import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComprendreView from '../views/ComprendreView.vue'
import ConcevoirView from '../views/ConcevoirView.vue'
import ExprimerView from '../views/ExprimerView.vue'
import DevelopperView from '../views/DevelopperView.vue'
import EntreprendreView from '../views/EntreprendreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/comprendre',
      name: 'comprendre',
      component: ComprendreView
    },
    {
      path: '/concevoir',
      name: 'concevoir',
      component: ConcevoirView
    },
    {
      path: '/exprimer',
      name: 'exprimer',
      component: ExprimerView
    },
    {
      path: '/developper',
      name: 'developper',
      component: DevelopperView
    },
    {
      path: '/entreprendre',
      name: 'entreprendre',
      component: EntreprendreView
    },
  ]
})

export default router
