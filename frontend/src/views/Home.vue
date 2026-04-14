<template>
  <div class="home-page">
    <!-- Hero - full size -->
    <div class="home-hero relative min-h-screen w-full flex flex-col justify-center overflow-hidden" style="z-index: 1;">
      <video
        ref="heroVideoEl"
        class="absolute inset-0 w-full h-full object-cover pointer-events-none"
        :class="{ 'video-ready': videoReady }"
        autoplay
        loop
        muted
        playsinline
        preload="metadata"
        :poster="posterImage"
        @canplay="onVideoReady"
      >
        <source :src="heroVideo" type="video/mp4" />
      </video>
      <div class="hero-overlay absolute inset-0 bg-[#2C1810]/50 z-0"></div>

      <section class="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24">
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
import { ref, onMounted } from 'vue'
import heroVideo from '@/assets/srikayatoast-web.mp4'
import posterImage from '@/assets/rotbakshome.jpg'

const heroVideoEl = ref(null)
const videoReady = ref(false)

function onVideoReady() {
  videoReady.value = true
}

onMounted(() => {
  const video = heroVideoEl.value
  if (video) {
    // Programmatic play dengan error handling untuk mobile browsers
    video.play().catch(() => {
      // Autoplay blocked oleh browser — tetap tampilkan poster
      videoReady.value = true
    })
  }
})
</script>

<style scoped>
.home-hero {
  background-color: #2C1810;
}

video {
  will-change: opacity;
  opacity: 0;
  transition: opacity 0.6s ease;
}

video.video-ready {
  opacity: 1;
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
