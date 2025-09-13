<template>
  <nav class="bg-[#664A00] font-sansita px-6 py-4">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="@/assets/Logo.png" alt="Gerobar Logo" class="h-12 md:h-14" />
      </div>

      <!-- Menu (desktop) -->
      <ul class="hidden md:flex flex-1 justify-center space-x-12 text-[#FBFADA] text-lg">
        <li><a href="#" class="hover:text-[#A6B37D] transition">Home</a></li>
        <li><a href="#" class="hover:text-[#A6B37D] transition">Menu</a></li>
        <li><a href="#" class="hover:text-[#A6B37D] transition">About</a></li>
        <li><a href="#" class="hover:text-[#A6B37D] transition">Shop</a></li>
      </ul>

      <!-- Mobile burger button -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-[#FBFADA] focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden mt-4">
      <ul class="flex flex-col items-center space-y-4 text-[#FBFADA] text-lg">
        <li><a href="#" class="hover:text-[#A6B37D] transition">Home</a></li>
        <li><a href="#" class="hover:text-[#A6B37D] transition">Menu</a></li>
        <li><a href="#" class="hover:text-[#A6B37D] transition">About</a></li>
        <li><a href="#" class="hover:text-[#A6B37D] transition">Shop</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style scoped>
.font-sansita {
  font-family: 'Sansita Swashed', cursive;
}
</style>