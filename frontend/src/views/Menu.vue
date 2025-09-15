<template>
  <div class="min-h-screen bg-[#664A00] text-[#FBFADA] font-sansita px-8 py-16">
    <!-- Title -->
    <div class="text-center mb-16">
      <h1
        class="text-7xl font-bold opacity-0 animate-fadeInUp"
        style="animation-delay: 0.1s"
      >
        Gerobar
      </h1>
      <p
        class="text-2xl text-[#A6B37D] mt-2 opacity-0 animate-fadeInUp"
        style="animation-delay: 0.3s"
      >
        Roti Bakar & Pancong Lumer
      </p>
    </div>

    <!-- Menu Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center"
    >
      <div
        v-for="(img, index) in menuImages"
        :key="index"
        class="w-[202px] h-[200px] bg-[#FBFADA] rounded-[22px] shadow-lg flex items-center justify-center overflow-hidden opacity-0 animate-fadeInUp"
        :style="`animation-delay: ${0.2 * (index + 1) + 0.3}s`"
      >
        <img
          :src="img"
          alt="Menu Item"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- More Menu Button -->
    <div
      class="flex justify-center mt-16 opacity-0 animate-fadeInUp"
      style="animation-delay: 2.2s"
    >
      <button
        class="mt-8 md:mt-10 px-6 py-3 bg-[#F6F6F6] text-[#664A00] font-lexend font-semibold rounded-xl shadow-md hover:bg-[#D9D9D9] transition opacity-0 animate-fadeInUp"
      >
        More Menu
      </button>
    </div>
  </div>
</template>

<script setup>
const menuImages = [
  new URL('@/assets/blueberry.jpg', import.meta.url).href,
  new URL('@/assets/chcocrunchy.jpg', import.meta.url).href,
  new URL('@/assets/cheese.jpg', import.meta.url).href,
  new URL('@/assets/lotus.jpg', import.meta.url).href,
  new URL('@/assets/peanut.jpg', import.meta.url).href,
  new URL('@/assets/greentea.jpg', import.meta.url).href,
  new URL('@/assets/tiramisu.jpg', import.meta.url).href,
  new URL('@/assets/strawberry.jpg', import.meta.url).href,
];
</script>

<style scoped>
.font-sansita {
  font-family: 'Sansita Swashed', cursive;
}
</style>