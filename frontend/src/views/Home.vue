<template>
  <!-- Hero Section -->
  <section
    class="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-24 gap-12"
  >
    <!-- Text + Small Menu Images -->
    <div class="text-center md:text-left flex-1">
      <h1
        class="text-5xl md:text-7xl font-bold leading-tight opacity-0 animate-fadeInUp"
        style="animation-delay:0.2s"
      >
        Gerobar
      </h1>

      <p
        class="text-xl md:text-2xl mt-4 text-[#A6B37D] font-poppins opacity-0 animate-fadeInUp"
        style="animation-delay:0.4s"
      >
        Roti Bakar & Pancong Lumer
      </p>

      <!-- Hero Image (MOBILE only) -->
      <div
        class="flex justify-center relative mt-8 mb-6 md:hidden opacity-0 animate-fadeInUp"
        style="animation-delay:0.6s"
      >
        <div
          class="absolute w-[300px] h-[300px] bg-gradient-to-b from-white/30 to-transparent rounded-full blur-3xl"
        ></div>
        <img
          src="@/assets/main.png"
          alt="Gerobar Product"
          class="relative w-[250px] sm:w-[300px] drop-shadow-2xl"
        />
      </div>

      <!-- Small menu preview -->
      <div
        class="flex justify-center md:justify-start gap-6 mt-6 md:mt-10 opacity-0 animate-fadeInUp"
        style="animation-delay:0.8s"
      >
        <div
          class="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src="@/assets/tiramisu.jpg"
            alt="Tiramisu Crunchy"
            class="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div
          class="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src="@/assets/lotus.jpg"
            alt="Lotus Biscoff"
            class="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div
          class="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src="@/assets/chcocrunchy.jpg"
            alt="Choco Crunchy Spread"
            class="w-[115%] h-[115%] object-cover rounded-xl"
          />
        </div>
      </div>

      <!-- CTA button -> Navigasi ke Shop -->
      <router-link
        to="/shop"
        class="mt-8 md:mt-10 px-8 py-4 
               rounded-2xl 
               font-poppins font-semibold 
               text-[#EDEDED] 
               bg-[#A67C00]/30 
               border border-[#EDEDED]/40 
               backdrop-blur-md
               shadow-lg
               hover:bg-[#A67C00]/50 hover:text-white 
               transition duration-300 
               opacity-0 animate-fadeInUp
               inline-block text-center"
        style="animation-delay:1s"
      >
        Order Now
      </router-link>
    </div>

    <!-- Hero Image (DESKTOP only) -->
    <div
      class="hidden md:flex flex-1 justify-center md:justify-end relative opacity-0 animate-fadeInUp"
      style="animation-delay:1.2s"
    >
      <div
        class="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-to-b from-white/30 to-transparent rounded-full blur-3xl"
      ></div>
      <img
        src="@/assets/main.png"
        alt="Gerobar Product"
        class="relative w-[400px] md:w-[600px] drop-shadow-2xl"
      />
    </div>
  </section>
</template>

<script setup>
// Tidak ada script khusus di sini, router-link otomatis bekerja
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