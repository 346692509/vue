import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'       //主页面
import Login from '@/components/Login'       //登录
import Regist from '@/components/Regist'     //注册
import Member from '@/components/Member'     //个人中心
import Product from '@/components/Product'   //单品页
import BuyCar from '@/components/BuyCar'   //购物车
import BuyCarTwo from '@/components/BuyCarTwo'   //购物车2
import BuyCarThree from '@/components/BuyCarThree'   //购物车2
import Member_Address from '@/components/Member_Address'   //收货地址
import IndexHeader from '@/components/IndexHeader'   //header1
import IndexHeadertow from '@/components/IndexHeadertwo'   //header2
import IndexHeaderthree from '@/components/IndexHeaderthree'   //header3
import IndexFool from '@/components/IndexFool'   //header3

import Test from '@/components/Test'   //测试页

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: Index},
    {path: '/Index', name: 'Index', component: Index},
    {path: '/Login', name: 'Login', component: Login},
    {path: '/Regist', name: 'Regist', component: Regist},
    {path: '/Member', name: 'Member', component: Member},
    {path: '/Product', name: 'Product', component: Product},
    {path: '/BuyCar', name: 'BuyCar', component: BuyCar},
    {path: '/BuyCarTwo', name: 'BuyCarTwo', component: BuyCarTwo},
    {path: '/BuyCarThree', name: 'BuyCarThree', component: BuyCarThree},
    {path: '/Member_Address', name: 'Member_Address', component: Member_Address},
    {path: '/Test', name: 'Test', component: Test},
    {path: '/IndexHeader', name: 'IndexHeader', component: IndexHeader},
    {path: '/IndexHeadertow', name: 'IndexHeadertow', component: IndexHeadertow},
    {path: '/IndexFool', name: 'IndexFool', component: IndexFool},

  ]
})

