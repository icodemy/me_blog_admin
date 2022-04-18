import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login/Login";
import Home from "../views/home/Home";
import Manage from "../views/article/Manage";
import Write from "../views/article/Write";
import Category from "../views/category/Category";
import Comment from "../views/comment/Comment";
import Dashboard from "../views/dashboard/Dashboard";
import Account from "../views/settings/Account";
import Tag from "../views/tag/Tag";
import Link from "../views/link/Link";
import {Message} from "element-ui";
import NProgress from "nprogress";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: '登录',
        component: Login
    },
    {
        path: '/home',
        name: '首页',
        component: Home,
        children: [
            {
                path: '/article/manage',
                name: '博客管理',
                component: Manage
            },
            {
                path: '/article/write',
                name: '编写博客',
                component: Write
            },
            {
                path: '/category',
                name: '分类',
                component: Category
            },
            {
                path: '/comment',
                name: '评论',
                component: Comment
            },
            {
                path: '/dashboard',
                name: '仪表盘',
                component: Dashboard
            },
            {
                path: '/settings/account',
                name: '用户管理',
                component: Account
            },
            {
                path: '/tag',
                name: '标签',
                component: Tag
            },
            {
                path: '/link',
                name: '友链',
                component: Link
            },
        ]
    }
]



const router = new VueRouter({
    mode: 'hash',
    routes
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    const token = localStorage.getItem('token')
    if (to.name !== '登录' && !token) {
        Message.error({message:'请先登录'})
        next({name: '登录'})
    }
    else next()
})


router.afterEach(() => {
    NProgress.done();
})

export default router
