<!-- src/views/AddProduct.vue -->
<template>
    <div>
      <h2>Añadir Producto</h2>

      <form @submit.prevent="addProduct">
        <div>
          <label for="name">Nombre del Producto:</label>
          <input type="text" v-model="newProduct.name" id="name" required />
        </div>
        <div>
          <label for="description">Descripción:</label>
          <textarea v-model="newProduct.description" id="description" required></textarea>
        </div>
        <div>
          <label for="price">Precio:</label>
          <input type="number" v-model="newProduct.price" id="price" required />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { supabase } from '../supabase';
  
  const newProduct = ref({
    name: '',
    price: 0,
    description: '',
  });
  
  const router = useRouter();
  
  const addProduct = async () => {
    try {
      const { data, error } = await supabase
        .from('producto')
        .insert([{ nombre: newProduct.value.name, descripcion: newProduct.value.description, precio: newProduct.value.price }]);

      if (error) throw error;

      router.push('/');
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
  }
  
  form div {
    margin-bottom: 15px;
  }
  
  button {
    width: 100px;
    padding: 10px;
  }
  </style>
  