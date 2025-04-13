<template>
    <h1>Shopping Lists</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
    <ul v-else>
        <li v-for="product in products" :key="product.id">{{ product.title }} - {{ product.price }} -{{ product.inventory }}
        <button @click="addProductToCart(product)">Add To Cart</button>
        </li>
        
    </ul>
</template>

<script>

export default {
    data(){
        return {
            loading : false
        }
    },
    computed: {
        products(){
            return this.$store.getters.availableProducts
        }
    },
    methods:{
        addProductToCart(product){
            this.$store.dispatch('addProductToCart',product)
        }
    },
    created() {
        this.loading = true
        this.$store.dispatch('fetchProducts')
        .then(() => this.loading = false)
    }
}</script>