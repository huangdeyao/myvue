import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import Login from '@/page/login'
import frameWork from '@/page/company/frameWork'
import business from '@/page/company/business'
import baseInfo from '@/page/staff/baseInfo'
import about from '@/page/staff/about'

export const appRouter = [
  {
    path: '/',
    redirect: '/home/index',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    text: '首页',
    access: 0,
    component: HelloWorld,
    children: [
        { path: 'index', text: '首页', name: 'home_index', access: 0, component: Home, meta: {openNames: 'home'}}
    ]
  },
  {
    path: '/company',
    name: 'company',
    text: '公司基本信息',
    component: HelloWorld,
    children: [
        { path: 'frameWork', text: '公司架构', name: 'frameWork', component: frameWork, meta: {openNames: 'company'}},
        { path: 'business', text: '公司业务', name: 'business', component: business, meta: {openNames: 'company'}}
    ]
  },
  {
    path: '/staff',
    name: 'staff',
    text: '员工基本信息',
    component: HelloWorld,
    children: [
        { path: 'baseInfo', text: '基本情况', name: 'baseInfo', component: baseInfo, meta: {openNames: 'staff'}},
        { path: 'about', text: '信息调查', name: 'about', component: about, meta: {openNames: 'staff'}}
    ]
  }
];
