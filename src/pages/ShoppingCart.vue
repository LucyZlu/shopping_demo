<template>
    <div class="cart">
        <ul>
            <li v-for="product in products">
                {{product.title}}-{{product.price}} x <span class="number">{{product.quantity}}</span>
            </li>
        </ul>
        <p>总额:{{total}}</p>
        <p>
            <button :disabled="!products.length" @click="checkout(products)">结账</button>
        </p>
        <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    </div>
</template>
<script>
    import { mapGetters } from "vuex"

    export default {
        computed: {
            ...mapGetters({
                products: 'cartProducts',
                checkoutStatus: 'checkoutStatus',
                total: 'cartTotalPrice'
            })
        },
        methods: {
            checkout(products) {
                this.$store.dispatch('checkout', products)
            }
        }
    }
</script>

<style scoped>
    .cart{
        margin:0 auto;
        text-align:center;
    }

    .cart ul li{
        display:block;
        text-align:right;
        background:skyblue;
    }

    span.number{
        color:crimson;
    } 

    button{
        background-color:chartreuse;
        width:4rem;
        height:1rem;
    }
</style>