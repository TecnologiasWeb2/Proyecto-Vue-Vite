import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'
import AddProduct from '../components/AddPorudct.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: ProductDetail},
    { path: '/add-product', component: AddProduct},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;