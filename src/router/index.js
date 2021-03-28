import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import HelloWorld from "../components/HelloWorld";
import Layout from "../views/layout/Index"
const routes = [
  {
    path: '/',
    component: Layout,//布局主页
    redirect: '/dashboard',
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',//重定向到index
    children: [
      {
        path: 'index',
        component: () => import('@/views/dashboard/Index'),//这种方式不需要在上面import引入
      }
    ]
  },
  { path: '/helloWorld',
    component: HelloWorld
  }//这种方式需要在上面import引入
]

const router = new Router({
  routes//注入路由组
})
export default router
