<template>
  <div class="min-h-screen bg-[#664A00] text-[#FBFADA] font-sansita relative overflow-hidden">
    <!-- Pola latar belakang -->
    <div class="absolute inset-0 bg-repeat bg-[url('@/assets/pattern.png')] opacity-50"></div>

    <!-- Bagian tentang Gerobar -->
    <div class="flex flex-col items-center justify-center pt-20 px-4">
      <!-- Judul dan Deskripsi -->
      <h1
        class="text-6xl font-bold text-center opacity-0 animate-fadeInUp"
        style="animation-delay: 0.1s"
      >
        Gerobar
      </h1>
      <p
        class="text-2xl font-medium text-center mt-2 opacity-0 animate-fadeInUp"
        style="animation-delay: 0.3s"
      >
        Roti Bakar & Pancong Lumer
      </p>
      <div
        class="bg-[#FBFADA] text-[#664A00] rounded-lg shadow-lg mt-8 p-10 relative max-w-4xl opacity-0 animate-fadeInUp"
        style="animation-delay: 0.5s"
      >
        <!-- Posisi Gerobak -->
        <img
          src="@/assets/Gerobak.png"
          alt="Gerobak"
          class="absolute top-[-60px] left-[-50px] w-24 h-auto shadow-none rounded-none opacity-0 animate-fadeInUp"
          style="animation-delay: 0.7s"
        />
        <p class="text-lg leading-relaxed">
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