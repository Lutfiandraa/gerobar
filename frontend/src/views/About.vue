<template>
  <div class="min-h-screen bg-[#664A00] text-[#FBFADA] font-sansita relative overflow-hidden">
    <!-- Pola latar belakang -->
 <div class="absolute inset-0 bg-gradient-to-br from-[#664A00]/20 to-transparent opacity-50"></div>


    <!-- Bagian tentang Gerobar -->
    <div class="flex flex-col items-center justify-center pt-20 px-4 sm:px-6 md:px-10">
      <!-- Judul dan Deskripsi -->
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-bold text-center opacity-0 animate-fadeInUp"
        style="animation-delay: 0.1s"
      >
        Gerobar
      </h1>
      <p
        class="text-lg sm:text-xl md:text-2xl text-[#A6B37D] mt-2 text-center opacity-0 animate-fadeInUp"
        style="animation-delay: 0.3s"
      >
        Roti Bakar & Pancong Lumer
      </p>
      <div
        class="bg-[#FBFADA] text-[#664A00] rounded-lg shadow-lg mt-8 p-6 sm:p-8 md:p-10 relative w-full max-w-4xl opacity-0 animate-fadeInUp"
        style="animation-delay: 0.5s"
      >
        <!-- Posisi Gerobak -->
        <img
          src="@/assets/Gerobak.png"
          alt="Gerobak"
          class="absolute top-[-40px] sm:top-[-50px] md:top-[-60px] left-[-20px] sm:left-[-35px] md:left-[-50px] w-16 sm:w-20 md:w-24 h-auto shadow-none rounded-none opacity-0 animate-fadeInUp"
          style="animation-delay: 0.7s"
        />
        <p class="text-base sm:text-lg md:text-lg leading-relaxed text-justify sm:text-left">
          Gerobar merupakan Usaha Mikro Kecil Menengah (UMKM) yang berlokasi di Warpol Graha Bunga.
          Kami hadir dengan menu utama Roti Bakar yang menghadirkan varian rasa. Selain itu, kami
          juga menawarkan menu tambahan berupa Pancong Lumer. Merupakan camilan dengan cita rasa
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
</style>