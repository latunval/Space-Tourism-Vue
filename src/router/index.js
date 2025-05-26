// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import CrewView from '../views/CrewView.vue'
// import DestinationView from '../views/DestinationView.vue'
// import TechnologyView from '../views/TechnologyView.vue'

// const routes = [
//   // Home page
//   { path: '/', name: 'Home', component: HomeView },
//   // Destination page
//   { path: '/destination', name: 'Destination', component: DestinationView },
//   // Crew page
//   { path: '/crew', name: 'Crew', component: CrewView },
//   // Technology page
//   { path: '/technology', name: 'Technology', component: TechnologyView },
//   // Catch-all 404 route
//   { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') },
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination',
      name: 'destination',
      component: () => import('../views/DestinationView.vue'),
    },
    {
      path: '/crew',
      name: 'crew',
      component: () => import('../views/CrewView.vue'),
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('../views/TechnologyView.vue'),
    },
  ],
})

export default router
