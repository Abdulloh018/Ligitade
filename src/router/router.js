import { createRouter, createWebHistory } from "vue-router"
import Index from "@/pages/home.vue"
import ContactPage from "@/pages/ContactPage.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  // {
  //   path: '/product',
  //   name: 'product',
  //   component: Product
  // },
  // {
  //   path: '/pricing',
  //   name: 'pricing',
  //   component: Pricing
  // },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router