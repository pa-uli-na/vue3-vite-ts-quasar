<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fakeStoreProcessV1 } from "./api";
import { ProductDTO } from "./api/fakeStoreProcess/v1/types";

const products = ref<ProductDTO[]>([]);
const columns = [
  { name: "id", field: "id", label: "ID" },
  { name: "title", field: "title", label: "Tytuł" },
  { name: "price", field: "price", label: "Cena" },
  { name: "category", field: "category", label: "Kategoria" },
  { name: "description", field: "description", label: "Opis" },
  { name: "image", field: "image", label: "Zdjęcie" },
  { name: "rating", field: "rating", label: "Ocena" },
];

const visibleColumns = ref(["id", "title", "price"]);

onMounted(async () => {
  try {
    loadingRef.value = true;
    products.value = await fakeStoreProcessV1.getProducts();
    console.log(products.value);
    loadingRef.value = false;
  } catch (error) {
    console.log(error);
    loadingRef.value = false;
  }
});

const loadingRef = ref(false);
</script>

<template>
  <q-table
    dense
    row-key="id"
    title="Products"
    :loading="loadingRef"
    :columns="columns"
    :rows="products"
    :visible-columns="visibleColumns"
  ></q-table>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
