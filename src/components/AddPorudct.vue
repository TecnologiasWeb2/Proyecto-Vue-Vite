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
  
  const newProduct = ref({
    name: '',
    price: 0,
    description: '',
  });
  
  const router = useRouter();
  
  const addProduct = () => {

    let products = JSON.parse(localStorage.getItem('products')) || [];

    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    products.push({ ...newProduct.value, id: newId });

    localStorage.setItem('products', JSON.stringify(products));

    router.push('/');
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
  