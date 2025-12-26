<template>
  <!-- Melting Chocolate Background -->
  <div class="chocolate-melt-bg fixed inset-0 overflow-hidden pointer-events-none" style="z-index: 0;">
    <div class="melt-blob melt-blob-1"></div>
    <div class="melt-blob melt-blob-2"></div>
    <div class="melt-blob melt-blob-3"></div>
    <div class="melt-blob melt-blob-4"></div>
    <div class="melt-blob melt-blob-5"></div>
    <div class="melt-blob melt-blob-6"></div>
  </div>

  <div class="min-h-screen text-[#FBFADA] font-sansita relative overflow-hidden">
    <!-- Shop Section -->
    <div class="flex flex-col items-center justify-center pt-20 px-4 relative" style="z-index: 1;">
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
          class="w-full h-auto rounded-2xl image-hover"
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

/* Melting Chocolate Background */
.chocolate-melt-bg {
  background: transparent;
}

.melt-blob {
  position: absolute;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  filter: blur(30px);
  opacity: 0.7;
  will-change: transform, border-radius;
}

.melt-blob-1 {
  width: 450px;
  height: 450px;
  top: -50px;
  left: -50px;
  animation: meltBlob1 9s ease-in-out infinite;
  animation-delay: 0s;
  background: linear-gradient(135deg, #452829 0%, #3A1F20 50%, #2F1516 100%);
}

.melt-blob-2 {
  width: 400px;
  height: 400px;
  top: 15%;
  right: -30px;
  animation: meltBlob2 10s ease-in-out infinite;
  animation-delay: 1s;
  background: linear-gradient(135deg, #452829 0%, #3D1F20 50%, #351516 100%);
}

.melt-blob-3 {
  width: 500px;
  height: 500px;
  bottom: -100px;
  left: 5%;
  animation: meltBlob3 8s ease-in-out infinite;
  animation-delay: 2s;
  background: linear-gradient(135deg, #452829 0%, #3A1F20 50%, #2F1516 100%);
}

.melt-blob-4 {
  width: 380px;
  height: 380px;
  top: 45%;
  left: 45%;
  animation: meltBlob4 11s ease-in-out infinite;
  animation-delay: 3s;
  background: linear-gradient(135deg, #452829 0%, #3D1F20 50%, #351516 100%);
}

.melt-blob-5 {
  width: 420px;
  height: 420px;
  bottom: -50px;
  right: 5%;
  animation: meltBlob5 9.5s ease-in-out infinite;
  animation-delay: 1.5s;
  background: linear-gradient(135deg, #452829 0%, #3A1F20 50%, #2F1516 100%);
}

.melt-blob-6 {
  width: 400px;
  height: 400px;
  top: 30%;
  left: 20%;
  animation: meltBlob6 10.5s ease-in-out infinite;
  animation-delay: 4.5s;
  background: linear-gradient(135deg, #452829 0%, #3D1F20 50%, #351516 100%);
}

@keyframes meltBlob1 {
  0%, 100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    transform: translate(50px, 30px) rotate(5deg) scale(1.1);
  }
  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    transform: translate(30px, 80px) rotate(-5deg) scale(0.95);
  }
  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    transform: translate(60px, 50px) rotate(3deg) scale(1.05);
  }
}

@keyframes meltBlob2 {
  0%, 100% {
    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 65% 35% 80% 20% / 70% 50% 50% 30%;
    transform: translate(-40px, 40px) rotate(-5deg) scale(1.15);
  }
  50% {
    border-radius: 45% 55% 40% 60% / 50% 30% 70% 50%;
    transform: translate(-60px, 70px) rotate(5deg) scale(0.9);
  }
  75% {
    border-radius: 55% 45% 70% 30% / 60% 75% 25% 40%;
    transform: translate(-50px, 50px) rotate(-3deg) scale(1.08);
  }
}

@keyframes meltBlob3 {
  0%, 100% {
    border-radius: 35% 65% 65% 35% / 35% 35% 65% 65%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 60% 40% 70% 30% / 75% 45% 55% 25%;
    transform: translate(50px, -30px) rotate(6deg) scale(1.12);
  }
  50% {
    border-radius: 48% 52% 38% 62% / 58% 32% 68% 42%;
    transform: translate(70px, -50px) rotate(-6deg) scale(0.92);
  }
  75% {
    border-radius: 42% 58% 65% 35% / 68% 70% 30% 32%;
    transform: translate(55px, -40px) rotate(4deg) scale(1.06);
  }
}

@keyframes meltBlob4 {
  0%, 100% {
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 70% 30% 60% 40% / 80% 60% 40% 20%;
    transform: translate(-30px, -40px) rotate(-4deg) scale(1.18);
  }
  50% {
    border-radius: 35% 65% 45% 55% / 45% 25% 75% 55%;
    transform: translate(-40px, -60px) rotate(4deg) scale(0.88);
  }
  75% {
    border-radius: 60% 40% 55% 45% / 70% 65% 35% 30%;
    transform: translate(-35px, -50px) rotate(-2deg) scale(1.1);
  }
}

@keyframes meltBlob5 {
  0%, 100% {
    border-radius: 45% 55% 55% 45% / 45% 45% 55% 55%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 62% 38% 72% 28% / 68% 52% 48% 32%;
    transform: translate(40px, 20px) rotate(5deg) scale(1.14);
  }
  50% {
    border-radius: 52% 48% 40% 60% / 60% 35% 65% 40%;
    transform: translate(60px, 40px) rotate(-5deg) scale(0.93);
  }
  75% {
    border-radius: 38% 62% 58% 42% / 55% 72% 28% 45%;
    transform: translate(50px, 30px) rotate(3deg) scale(1.07);
  }
}

@keyframes meltBlob6 {
  0%, 100% {
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 65% 35% 60% 40% / 70% 50% 50% 30%;
    transform: translate(-25px, 35px) rotate(-4deg) scale(1.12);
  }
  50% {
    border-radius: 35% 65% 40% 60% / 30% 70% 30% 70%;
    transform: translate(35px, -25px) rotate(4deg) scale(0.96);
  }
  75% {
    border-radius: 55% 45% 65% 35% / 60% 40% 60% 40%;
    transform: translate(-15px, 20px) rotate(-2deg) scale(1.08);
  }
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