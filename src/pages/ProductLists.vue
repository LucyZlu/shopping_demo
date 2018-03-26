<template>
    <ul class="product">
        <li v-for="product in products">
            <img :src="imagePath+product.src" :alt="product.src">
            <br> {{product.title}}-{{product.price}}
            <br><button type="button" @click="addProductToCart(product)">
                添加到购物车
            </button>
        </li>
    </ul>
</template>
<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        data: function () {
            return {
                imagePath: "./src/images/"
            }
        },
        computed: mapGetters({
            products: "allProducts" //将store 中的 getters.allProducts 映射到局部计算属性products
        }),
        methods: mapActions(["addProductToCart"]),
        created() {
            console.log("yes");
            this.$store.dispatch('getAllProducts')//在组件中使用 this.$store.dispatch('xxx') 分发 action
        }
    };
</script>

<style scoped>
    button {
        width: 4rem;
        height: 1rem;
        background-color: aquamarine;

    }

    .product li {
        display: block;
        text-align: center;
    }

    img {
        width: 200px;
        height: 200px;
    }
</style>
