<template>
    <h2>Detalle del Producto</h2>
    <div v-if = "product">
        <h2>{{product.nombre}}</h2>
        <p>{{ product.descripcion }}</p>
        <p>Precio: ${{ product.precio }}</p>
        <router-link to="/">Regresar Atras</router-link>
    </div>
    <div v-else>
        <p>Productos No encontrado</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '../supabase';

const route = useRoute();
const productId = parseInt(route.params.id, 10);
const product = ref(null);


onMounted(async() => {
  try {
    const { data, error } = await supabase
      .from('producto')
      .select('*')
      .eq('id', productId)
      .single();

    if (error) throw error;

    product.value = data; 
  } catch (error) {
    console.error("Error al cargar el producto por su id:", error);
  }
});

</script>


<style scoped>
div {
    width: 300px;
    margin: auto;
    text-align: center;
}
</style>