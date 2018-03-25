import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./router"
import app from "./App.vue"
import store from "./src/store"

Vue.use(VueRouter)
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
  })
//根实例
new Vue({
    el:"#app",
    store,//将状态从根组件“注入”到每一个子组件中,
    router,
    render:h=>h(app)//渲染App.vue到index.html中id为app的结点
})