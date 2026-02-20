<template>
  <!-- Page Background -->
  <div class="page-bg fixed inset-0 overflow-hidden pointer-events-none" style="z-index: 0;"></div>

  <div class="min-h-screen text-[#FBFADA] font-sansita relative overflow-x-hidden">
    <!-- Shop Section -->
    <div class="flex flex-col items-center justify-center pt-16 sm:pt-20 pb-12 px-4 sm:px-6 relative" style="z-index: 1;">
      <!-- Judul -->
      <h1
        class="text-4xl sm:text-5xl font-bold text-center opacity-0 animate-fadeInUp"
        style="animation-delay: 0.1s"
      >
        Belanja
      </h1>

      <!-- <p> pakai Poppins -->
      <p
        class="text-lg sm:text-xl text-[#A6B37D] mt-2 text-center font-poppins opacity-0 animate-fadeInUp"
        style="animation-delay: 0.3s"
      >
        Pilih menu favorit Anda di Gerobar
      </p>

      <!-- Rectangle Buttons pakai Poppins -->
      <div
        class="flex flex-col items-center space-y-4 sm:space-y-5 mt-8 w-full max-w-md sm:max-w-lg px-2 opacity-0 animate-fadeInUp"
        style="animation-delay: 0.5s"
      >
        <!-- Button Menu Gerobar buka popup -->
        <button
          @click="isOpen = true"
          class="bg-[#FBFADA] text-[#664A00] font-poppins w-full py-3.5 sm:py-4 text-center text-base sm:text-lg md:text-xl rounded-[45px] shadow-md active:scale-[0.98] sm:hover:scale-105 transition-transform duration-300 min-h-[48px] flex items-center justify-center"
        >
          Menu Gerobar
        </button>

        <a
          href="https://www.instagram.com/gerobar_id/"
          target="_blank"
          class="bg-[#FBFADA] text-[#664A00] font-poppins w-full py-3.5 sm:py-4 text-center text-base sm:text-lg md:text-xl rounded-[45px] shadow-md active:scale-[0.98] sm:hover:scale-105 transition-transform duration-300 min-h-[48px] flex items-center justify-center"
        >
          Instagram
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=6289658852396&text&type=phone_number&app_absent=0"
          target="_blank"
          class="bg-[#FBFADA] text-[#664A00] font-poppins w-full py-3.5 sm:py-4 text-center text-base sm:text-lg md:text-xl rounded-[45px] shadow-md active:scale-[0.98] sm:hover:scale-105 transition-transform duration-300 min-h-[48px] flex items-center justify-center"
        >
          Whatsapp
        </a>
      </div>
    </div>

    <!-- Popup Modal -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6"
      style="padding-top: max(1rem, env(safe-area-inset-top)); padding-bottom: max(1rem, env(safe-area-inset-bottom));"
      @click.self="isOpen = false"
    >
      <div class="relative">
        <!-- Close button -->
        <button
          @click="isOpen = false"
          class="absolute -top-2 -right-2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg text-[#2C1810] hover:bg-[#FBFADA] transition-colors duration-200"
          aria-label="Tutup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Image -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden max-w-xl max-h-[85vh]">
          <img
            src="@/assets/Rotcong.png"
            alt="Menu Gerobar"
            class="w-full h-auto object-contain max-h-[80vh]"
          />
        </div>
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

/* Page Background */
.page-bg {
  background: #2C1810;
}

/* Image Hover Effects */
.image-hover {
  transition: all 0.3s ease;
  cursor: pointer;
}

.image-hover:hover {
  transform: scale(1.1);
  filter: brightness(1.1) saturate(1.2);
}

.image-container {
  transition: all 0.3s ease;
}

.image-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
</style>