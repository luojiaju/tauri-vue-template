// createWebHashHistory 是hash模式就是访问链接带有#
// createWebHistory  是history模式
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../pages/home/index.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,

})


// BAD
router.beforeEach((_to, _from, next) => {
    // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' }){}
    // 如果用户未能验证身份，则 `next` 会被调用两次

    next()

})

export default router