<template>
  <div class="home-page">
    <!-- Hero - full size -->
    <div class="home-hero relative min-h-screen w-full flex flex-col justify-center overflow-hidden" style="z-index: 1;">
      <div class="hero-bg absolute inset-0"></div>
      <div class="hero-overlay absolute inset-0 bg-[#2C1810]/50"></div>

      <section class="relative container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24">
        <div class="max-w-2xl">
          <h1
            class="text-5xl md:text-7xl font-bold text-[#FBFADA] font-sansita leading-tight opacity-0 animate-fadeInUp"
            style="animation-delay: 0.1s"
          >
            Gerobar
          </h1>
          <p
            class="text-xl md:text-2xl mt-4 text-[#FBFADA]/95 font-poppins opacity-0 animate-fadeInUp"
            style="animation-delay: 0.3s"
          >
            Roti Bakar & Pancong Lumer
          </p>
          <p
            class="text-base md:text-lg mt-2 text-[#FBFADA]/80 font-poppins opacity-0 animate-fadeInUp"
            style="animation-delay: 0.45s"
          >
            Pesan terlebih dahulu untuk diambil di Warpol Graha Bunga.
          </p>
          <router-link
            to="/shop"
            class="mt-8 inline-block px-8 py-4 rounded-full font-poppins font-semibold text-[#2C1810] bg-[#FBFADA] hover:bg-[#FBFADA]/90 transition duration-300 opacity-0 animate-fadeInUp shadow-lg"
            style="animation-delay: 0.6s"
          >
            Pesan Sekarang
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero-bg {
  background-color: #2C1810;
  background-image: url('@/assets/rotbakshome.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 100vh;
  min-width: 100%;
}

.hero-overlay {
  pointer-events: none;
}

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

.font-sansita {
  font-family: 'Sansita Swashed', cursive;
}
</style>
