<template>
    <div class="product-card">
        <h2>{{product.name}}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <router-link :to="`/product/${product.id}`">Ver Producto</router-link>
    </div>
</template>

<script setup>
defineProps({
    product: Object,
});
</script>

<style>

</style>