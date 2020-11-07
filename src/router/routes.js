import Home from '../views/Home.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/mazda_cn',
        name: 'mazda_cn',
        component: () => import('../views/mazda_cn.vue')
    }
]
export default routes