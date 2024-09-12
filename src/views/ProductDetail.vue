<template>
    <div>
        <h2>{{product.name}}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <router-link to="/">Regresar Atras</router-link>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id;
const product = ref({
    id: productId,
    name: `Producto ${productId}`,
    description: `Descripcion del producto ${productId}`,
    price: 100+productId*50,
})

</script>


<style scoped>
</style>