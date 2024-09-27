<template>
    <h2>Detalle del Producto</h2>
    <div v-if = "product">
        <h2>{{product.name}}</h2>
        <p>{{ product.description }}</p>
        <p>Precio: ${{ product.price }}</p>
        <router-link to="/">Regresar Atras</router-link>
    </div>
    <div v-else>
        <p>Productos No encontrado</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = parseInt(route.params.id, 10);
const product = ref(null);

// cargar el producto especifico por el id
onMounted(() => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    product.value = products.find(p => p.id === productId);
})

</script>


<style scoped>
div {
    width: 300px;
    margin: auto;
    text-align: center;
}
</style>