import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tema_1_1_1 from '../views/Unidad_1/1_1_1.vue'
import Tema_1_1_2 from '../views/Unidad_1/1_1_2.vue'
import Tema_1_2_1 from '../views/Unidad_1/1_2_1.vue'
import Tema_1_2_2 from '../views/Unidad_1/1_2_2.vue'
import Tema_1_2_3 from '../views/Unidad_1/1_2_3.vue'
import Tema_1_3_1 from '../views/Unidad_1/1_3_1.vue'
import Tema_1_3_2 from '../views/Unidad_1/1_3_2.vue'
import Tema_1_3_3 from '../views/Unidad_1/1_3_3.vue'
import Tema_1_4_1 from '../views/Unidad_1/1_4_1.vue'
import Tema_1_4_2 from '../views/Unidad_1/1_4_2.vue'
import Tema_1_4_3 from '../views/Unidad_1/1_4_3.vue'
import Tema_1_4_4 from '../views/Unidad_1/1_4_4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Unidad/1.1.1',
      name: 'unidad_1.1.1',
      component: Tema_1_1_1
    },
    {
      path: '/Unidad/1.1.2',
      name: 'unidad_1.1.2',
      component: Tema_1_1_2
    },
    {
      path: '/Unidad/1.2.1',
      name: 'unidad_1.2.1',
      component: Tema_1_2_1
    },
    {
      path: '/Unidad/1.2.2',
      name: 'unidad_1.2.2',
      component: Tema_1_2_2
    },
    {
      path: '/Unidad/1.2.3',
      name: 'unidad_1.2.3',
      component: Tema_1_2_3
    },
    {
      path: '/Unidad/1.3.1',
      name: 'unidad_1.3.1',
      component: Tema_1_3_1
    },
    {
      path: '/Unidad/1.3.2',
      name: 'unidad_1.3.2',
      component: Tema_1_3_2
    },
    {
      path: '/Unidad/1.3.3',
      name: 'unidad_1.3.3',
      component: Tema_1_3_3
    },
    {
      path: '/Unidad/1.4.1',
      name: 'unidad_1.4.1',
      component: Tema_1_4_1
    },
    {
      path: '/Unidad/1.4.2',
      name: 'unidad_1.4.2',
      component: Tema_1_4_2
    },
    {
      path: '/Unidad/1.4.3',
      name: 'unidad_1.4.3',
      component: Tema_1_4_3
    },
    {
      path: '/Unidad/1.4.4',
      name: 'unidad_1.4.4',
      component: Tema_1_4_4
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
