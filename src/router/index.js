import Vue from 'vue'
import VueRouter from 'vue-router'

//1.use方法调用
Vue.use(VueRouter);

//2. 配置路由关系

const Home = ()=>{import ("../views/home/Home")};
const Category = ()=>{import ("../views/category/Category")};
const Cart = ()=>{import ("../views/cart/Cart")};
const Profile = ()=>{import ("../views/profile/Profile")};

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    components:Home,
  },
  {
    path:'/category',
    components:Category,
  },
  {
    path:'/cart',
    components:Cart,
  },
  {
    path:'/profile',
    components:Profile,
  },
];

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router