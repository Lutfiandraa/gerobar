<template>
  <div class="min-h-screen bg-[#664A00] text-[#FBFADA] font-sansita relative overflow-hidden">
    <!-- Pola latar belakang -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#664A00]/20 to-transparent opacity-50"></div>

    <!-- Shop Section -->
    <div class="flex flex-col items-center justify-center pt-20 px-4">
      <!-- Judul -->
      <h1
        class="text-4xl sm:text-5xl font-bold text-center opacity-0 animate-fadeInUp"
        style="animation-delay: 0.1s"
      >
        Shop
      </h1>

      <!-- <p> pakai Poppins -->
      <p
        class="text-lg sm:text-xl text-[#A6B37D] mt-2 text-center font-poppins opacity-0 animate-fadeInUp"
        style="animation-delay: 0.3s"
      >
        Pilih menu favoritmu di gerobar
      </p>

      <!-- Rectangle Buttons pakai Poppins -->
      <div
        class="flex flex-col items-center space-y-5 mt-8 w-full max-w-md sm:max-w-lg opacity-0 animate-fadeInUp"
        style="animation-delay: 0.5s"
      >
        <!-- Button Menu Gerobar buka popup -->
        <button
          @click="isOpen = true"
          class="bg-[#FBFADA] text-[#664A00] font-poppins w-full py-3 sm:py-4 text-center text-lg sm:text-xl rounded-[45px] shadow-md hover:scale-105 transition-transform duration-300"
        >
          Menu Gerobar
        </button>

        <a
          href="https://www.instagram.com/gerobar_id/"
          target="_blank"
          class="bg-[#FBFADA] text-[#664A00] font-poppins w-full py-3 sm:py-4 text-center text-lg sm:text-xl rounded-[45px] shadow-md hover:scale-105 transition-transform duration-300"
        >
          Instagram
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=6289658852396&text&type=phone_number&app_absent=0"
          target="_blank"
          class="bg-[#FBFADA] text-[#664A00] font-poppins w-full py-3 sm:py-4 text-center text-lg sm:text-xl rounded-[45px] shadow-md hover:scale-105 transition-transform duration-300"
        >
          Whatsapp
        </a>
      </div>
    </div>

    <!-- Popup Modal -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
    >
      <div class="bg-white rounded-2xl shadow-xl max-w-3xl w-full relative">
        <!-- Close button -->
        <button
          @click="isOpen = false"
          class="absolute top-3 right-3 bg-red-500 text-white rounded-full px-3 py-1 text-sm hover:bg-red-600 transition"
        >
          ✕
        </button>

        <!-- Image -->
        <img
          src="@/assets/Rotcong.png"
          alt="Menu Gerobar"
          class="w-full h-auto rounded-2xl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}
</style>