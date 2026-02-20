<template>
  <!-- Page Background -->
  <div class="page-bg fixed inset-0 overflow-hidden pointer-events-none" style="z-index: 0;"></div>

  <div class="min-h-screen text-[#FBFADA] font-sansita relative overflow-x-hidden">
    <!-- Bagian tentang Gerobar -->
    <div class="flex flex-col items-center justify-center pt-16 sm:pt-20 pb-12 px-4 sm:px-6 md:px-10 relative" style="z-index: 1;">
      <!-- Judul dan Deskripsi -->
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-bold text-center opacity-0 animate-fadeInUp"
        style="animation-delay: 0.1s"
      >
        Gerobar
      </h1>

      <!-- Subjudul pakai Poppins -->
      <p
        class="text-lg sm:text-xl md:text-2xl text-[#A6B37D] mt-2 text-center font-poppins opacity-0 animate-fadeInUp"
        style="animation-delay: 0.3s"
      >
        Roti Bakar & Pancong Lumer
      </p>

      <div
        class="bg-[#FBFADA] text-[#664A00] rounded-2xl sm:rounded-[40px] shadow-lg mt-8 p-5 sm:p-6 md:p-10 relative w-full max-w-4xl mx-2 sm:mx-4 opacity-0 animate-fadeInUp"
        style="animation-delay: 0.5s"
      >
        <!-- Posisi Gerobak -->
        <img
          src="@/assets/Gerobak.png"
          alt="Gerobak"
          class="absolute top-[-40px] sm:top-[-50px] md:top-[-60px] left-[-20px] sm:left-[-35px] md:left-[-50px] w-16 sm:w-20 md:w-24 h-auto shadow-none rounded-none opacity-0 animate-fadeInUp image-hover"
          style="animation-delay: 0.7s"
        />

        <!-- Deskripsi pakai Poppins -->
        <p class="text-base sm:text-lg md:text-lg leading-relaxed text-justify sm:text-left font-poppins">
          Gerobar merupakan Usaha Mikro Kecil Menengah (UMKM) yang berlokasi di Warpol Graha Bunga.
          Kami menghadirkan menu utama Roti Bakar dengan beragam varian rasa. Selain itu,
          kami juga menawarkan menu tambahan berupa Pancong Lumer—camilan dengan cita rasa
          manis dan tekstur lembut.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
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