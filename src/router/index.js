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


import Tema_2_1_1 from '../views/Unidad_2/2_1_1.vue'
import Tema_2_1_2 from '../views/Unidad_2/2_1_2.vue'
import Tema_2_1_3 from '../views/Unidad_2/2_1_3.vue'
import Tema_2_2_1 from '../views/Unidad_2/2_2_1.vue'
import Tema_2_2_2 from '../views/Unidad_2/2_2_2.vue'
import Tema_2_2_3 from '../views/Unidad_2/2_2_3.vue'


import Tema_3_1_1 from '../views/Unidad_3/3_1_1.vue'
import Tema_3_1_2 from '../views/Unidad_3/3_1_2.vue'
import Tema_3_2_1 from '../views/Unidad_3/3_2_1.vue'
import Tema_3_2_2 from '../views/Unidad_3/3_2_2.vue'
import Tema_3_2_3 from '../views/Unidad_3/3_2_3.vue'
import Tema_3_3_1 from '../views/Unidad_3/3_3_1.vue'
import Tema_3_3_2 from '../views/Unidad_3/3_3_2.vue'
import Tema_3_3_3 from '../views/Unidad_3/3_3_3.vue'


import Tema_4_1_1 from '../views/Unidad_4/4_1_1.vue'
import Tema_4_1_2 from '../views/Unidad_4/4_1_2.vue'
import Tema_4_1_3 from '../views/Unidad_4/4_1_3.vue'


import Tema_5_1_1 from '../views/Unidad_5/5_1_1.vue'
import Tema_5_1_2 from '../views/Unidad_5/5_1_2.vue'
import Tema_5_1_3 from '../views/Unidad_5/5_1_3.vue'
import Tema_5_1_4 from '../views/Unidad_5/5_1_4.vue'
import Tema_5_1_5 from '../views/Unidad_5/5_1_5.vue'
import Tema_5_2_1 from '../views/Unidad_5/5_2_1.vue'
import Tema_5_2_2 from '../views/Unidad_5/5_2_2.vue'
import Tema_5_3_1 from '../views/Unidad_5/5_3_1.vue'


//UnidadesComponents
import Unidad1 from '@/views/Headers/Unidad1.vue'
import Unidad2 from '@/views/Headers/Unidad2.vue'
import Unidad3 from '@/views/Headers/Unidad3.vue'
import Unidad4 from '@/views/Headers/Unidad4.vue'
import Unidad5 from '@/views/Headers/Unidad5.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Unidad1/',
      name: 'unidad_1',
      component: Unidad1

    },
    {
      path: '/Unidad2/',
      name: 'unidad_2',
      component: Unidad2

    },
    {
      path: '/Unidad3/',
      name: 'unidad_3',
      component: Unidad3

    },
    {
      path: '/Unidad4/',
      name: 'unidad_4',
      component: Unidad4

    },
    {
      path: '/Unidad5/',
      name: 'unidad_5',
      component: Unidad5

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
    {
      path: '/Unidad/2.1.1',
      name: 'unidad_2.1.1',
      component: Tema_2_1_1
    },
    {
      path: '/Unidad/2.1.2',
      name: 'unidad_2.1.2',
      component: Tema_2_1_2
    },
    {
      path: '/Unidad/2.1.3',
      name: 'unidad_2.1.3',
      component: Tema_2_1_3
    },
    {
      path: '/Unidad/2.2.1',
      name: 'unidad_2.2.1',
      component: Tema_2_2_1
    },
    {
      path: '/Unidad/2.2.2',
      name: 'unidad_2.2.2',
      component: Tema_2_2_2
    },
    {
      path: '/Unidad/2.2.3',
      name: 'unidad_2.2.3',
      component: Tema_2_2_3
    },
    {
      path: '/Unidad/3.1.1',
      name: 'unidad_3.1.1',
      component: Tema_3_1_1
    },
    {
      path: '/Unidad/3.1.2',
      name: 'unidad_3.1.2',
      component: Tema_3_1_2
    },
    {
      path: '/Unidad/3.2.1',
      name: 'unidad_3.2.1',
      component: Tema_3_2_1
    },
    {
      path: '/Unidad/3.2.2',
      name: 'unidad_3.2.2',
      component: Tema_3_2_2
    },
    {
      path: '/Unidad/3.2.3',
      name: 'unidad_3.2.3',
      component: Tema_3_2_3
    },
    {
      path: '/Unidad/3.3.1',
      name: 'unidad_3.3.1',
      component: Tema_3_3_1
    },
    {
      path: '/Unidad/3.3.2',
      name: 'unidad_3.3.2',
      component: Tema_3_3_2
    },
    {
      path: '/Unidad/3.3.3',
      name: 'unidad_3.3.3',
      component: Tema_3_3_3
    },
    {
      path: '/Unidad/4.1.1',
      name: 'unidad_4.1.1',
      component: Tema_4_1_1
    },
    {
      path: '/Unidad/4.1.2',
      name: 'unidad_4.1.2',
      component: Tema_4_1_2
    },
    {
      path: '/Unidad/4.1.3',
      name: 'unidad_4.1.3',
      component: Tema_4_1_3
    },
    {
      path: '/Unidad/5.1.1',
      name: 'unidad_5.1.1',
      component: Tema_5_1_1
    },
    {
      path: '/Unidad/5.1.2',
      name: 'unidad_5.1.2',
      component: Tema_5_1_2
    },
    {
      path: '/Unidad/5.1.3',
      name: 'unidad_5.1.3',
      component: Tema_5_1_3
    },
    {
      path: '/Unidad/5.1.4',
      name: 'unidad_5.1.4',
      component: Tema_5_1_4
    },
    {
      path: '/Unidad/5.1.5',
      name: 'unidad_5.1.5',
      component: Tema_5_1_5
    },
    {
      path: '/Unidad/5.2.1',
      name: 'unidad_5.2.1',
      component: Tema_5_2_1
    },
    {
      path: '/Unidad/5.2.2',
      name: 'unidad_5.2.2',
      component: Tema_5_2_2
    },
    {
      path: '/Unidad/5.3.1',
      name: 'unidad_5.3.1',
      component: Tema_5_3_1
    }





    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
