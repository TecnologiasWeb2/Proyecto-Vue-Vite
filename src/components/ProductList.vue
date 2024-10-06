
<template>
    <div>
      <h1>Nuestros Productos</h1>
      <div class="product-list">
        <ProductCard
            v-for= "product in products"
            :key="product.id"
            :product='product'
        />
      </div>

      <router-link to="/add-product">Añadir Nuevo Producto</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import ProductCard from './ProductCard.vue';
  import { supabase } from '../supabase';

  const products = ref([]);

  onMounted(async() => {
    try {
      const {data, error} = await supabase
        .from('producto')
        .select();

      if (error) throw error;

      products.value = data;

    }catch (error){
      console.error('Error al cargar los productos')
    }
  });
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  </style>
  