<template>
    <div>
        <h1>Nuestro Productos</h1>
        <div class="product-list">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
import { ref } from 'vue';

const products = ref([
    { id: 1, name: 'Producto 1', description: 'Descripcion del producto 1', price: 100 },
    { id: 2, name: 'Producto 2', description: 'Descripcion del producto 2', price: 200 },
    { id: 3, name: 'Producto 3', description: 'Descripcion del producto 3', price: 300 },
    { id: 4, name: 'Producto 4', description: 'Descripcion del producto 4', price: 400 },
    { id: 5, name: 'Producto 5', description: 'Descripcion del producto 5', price: 500 },
]);

</script>

<style scoped>
.product-list{
    display: flex;
    flex-wrap: wrap;
}
</style>