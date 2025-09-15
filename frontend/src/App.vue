<template>
  <div class="min-h-screen bg-[#664A00] text-[#FBFADA] font-sansita relative overflow-hidden">
    <!-- Navbar selalu ada -->
    <Navbar />
    
    <!-- Halaman dinamis ditampilkan di sini -->
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style scoped>
.font-sansita {
  font-family: "Sansita Swashed", cursive;
}
</style>