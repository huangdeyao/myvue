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
    redirect: '/home',
    name: 'HelloWorld',
    component: HelloWorld,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/company/frameWork',
        name: 'frameWork',
        component: frameWork
      },
      {
        path: '/company/business',
        name: 'business',
        component: business
      },
      {
        path: '/staff/baseInfo',
        name: 'baseInfo',
        component: baseInfo
      },
      {
        path: '/staff/about',
        name: 'about',
        component: about
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
];
