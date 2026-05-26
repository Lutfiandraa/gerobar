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
          class="bg-[#FBFADA] text-[#664A00] font-poppins w-full py-3.5 sm:py-4 text-center text-base sm:text-lg md:text-xl rounded-[45px] shadow-md active:scale-[0.98] sm:hover:scale-105 transition-transform duration-300 min-h-[48px] flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Menu Gerobar
        </button>

        <a
          href="https://www.instagram.com/gerobar_id/"
          target="_blank"
          class="bg-[#FBFADA] text-[#664A00] font-poppins w-full py-3.5 sm:py-4 text-center text-base sm:text-lg md:text-xl rounded-[45px] shadow-md active:scale-[0.98] sm:hover:scale-105 transition-transform duration-300 min-h-[48px] flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Instagram
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=6289658852396&text&type=phone_number&app_absent=0"
          target="_blank"
          class="bg-[#FBFADA] text-[#664A00] font-poppins w-full py-3.5 sm:py-4 text-center text-base sm:text-lg md:text-xl rounded-[45px] shadow-md active:scale-[0.98] sm:hover:scale-105 transition-transform duration-300 min-h-[48px] flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.702-1.36A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.327-.724-6.02-1.952a.5.5 0 00-.404-.084l-3.272.946.872-3.088a.5.5 0 00-.073-.425A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
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
  background: linear-gradient(135deg, #140b07 0%, #381c11 30%, #613b24 55%, #3c2014 80%, #1a0c07 100%);
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