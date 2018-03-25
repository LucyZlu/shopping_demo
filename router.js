import Vue from "vue"
import VueRouter from "vue-router"
import ProductLists from "./src/pages/ProductLists.vue"
import ShoppingCart from "./src/pages/ShoppingCart.vue"

export default [
    {path:"/",component:ProductLists},
    {path:"/cart",component:ShoppingCart}
]