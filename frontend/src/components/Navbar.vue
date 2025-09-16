<template>
  <nav class="bg-[#664A00] font-sansita px-6 py-4">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="@/assets/Logo.png" alt="Gerobar Logo" class="h-12 md:h-14" />
      </div>

      <!-- Menu (desktop) -->
      <ul class="hidden md:flex flex-1 justify-center space-x-12 text-[#FBFADA] text-lg">
        <li><router-link to="/" class="hover:text-[#A6B37D] transition">Home</router-link></li>
        <li><router-link to="/menu" class="hover:text-[#A6B37D] transition">Menu</router-link></li>
        <li><router-link to="/about" class="hover:text-[#A6B37D] transition">About</router-link></li>
        <li><router-link to="/shop" class="hover:text-[#A6B37D] transition">Shop</router-link></li>
      </ul>

      <!-- Mobile burger button -->
      <button
        @click="toggleMenu"
        class="md:hidden text-[#FBFADA] focus:outline-none transition-transform duration-300"
        :class="{ 'rotate-90': isOpen, 'rotate-0': !isOpen }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition-opacity duration-500 ease-in-out"
      leave-active-class="transition-opacity duration-500 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="md:hidden mt-4">
        <ul class="flex flex-col items-center space-y-4 text-[#FBFADA] text-lg">
          <li><router-link to="/" class="hover:text-[#A6B37D] transition">Home</router-link></li>
          <li><router-link to="/menu" class="hover:text-[#A6B37D] transition">Menu</router-link></li>
          <li><router-link to="/about" class="hover:text-[#A6B37D] transition">About</router-link></li>
          <li><router-link to="/shop" class="hover:text-[#A6B37D] transition">Shop</router-link></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
.font-sansita {
  font-family: 'Sansita Swashed', cursive;
}
</style>