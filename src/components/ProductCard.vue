<template>
    <div class="product-card">
        <h2>{{product.nombre}}</h2>
        <p>{{ product.descripcion }}</p>
        <p>{{ product.precio }}</p>
        <router-link :to="`/product/${product.id}`">Ver Producto</router-link>
    </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    },
});
</script>

<style>
.product-card{
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 20px;
    margin: 10px;
    width: 200px;
    text-align: center
}

</style>