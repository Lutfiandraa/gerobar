<template>
  <!-- Page Background -->
  <div class="page-bg fixed inset-0 overflow-hidden pointer-events-none" style="z-index: 0;"></div>

  <div class="min-h-screen text-[#FBFADA] font-sansita relative overflow-x-hidden">
    <div class="relative container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12 md:py-20 pb-8" style="z-index: 1;">
      <!-- Section: Hero (Judul + Gambar + Tab) -->
      <header class="menu-hero text-center mb-10 md:mb-16">
        <h1 class="text-4xl md:text-6xl font-bold opacity-0 animate-fadeInUp" style="animation-delay: 0.1s">
          Gerobar
        </h1>
        <p class="text-xl md:text-2xl text-[#A6B37D] mt-4 font-poppins opacity-0 animate-fadeInUp" style="animation-delay: 0.2s">
          Roti Bakar & Pancong Lumer
        </p>
        <div class="flex justify-center mt-8 sm:mt-10 opacity-0 animate-fadeInUp" style="animation-delay: 0.25s">
          <div class="w-[100px] sm:w-[130px] md:w-[160px]">
            <img
              src="@/assets/main.png"
              alt="Gerobar Roti Bakar"
              class="w-full h-auto object-contain drop-shadow-md rounded-xl"
            />
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 mb-6 font-poppins opacity-0 animate-fadeInUp" style="animation-delay: 0.3s">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-5 sm:px-8 py-3 rounded-full text-sm font-medium transition min-h-[44px]"
            :class="activeTab === tab.id
              ? 'bg-[#FBFADA] text-[#2C1810]'
              : 'bg-[#FBFADA]/20 text-[#FBFADA] hover:bg-[#FBFADA]/30'"
          >
            {{ tab.label }}
          </button>
        </div>
      </header>

      <!-- Roti Bakar Section -->
      <section v-show="activeTab === 'roti'" class="mt-8 sm:mt-12 mb-16">
        <h2 class="text-2xl md:text-3xl font-bold border-b border-[#FBFADA]/30 pb-2 mb-8 font-sansita">
          Roti Bakar
        </h2>
        <p class="text-[#FBFADA]/80 font-poppins mb-10">
          Roti panggang kami dengan beragam olesan manis dan gurih. Disajikan hangat dan renyah.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <article
            v-for="(item, index) in rotiBakarItems"
            :key="item.id"
            class="bg-[#FBFADA]/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#FBFADA]/20 opacity-0 animate-fadeInUp group"
            :style="`animation-delay: ${0.1 * (index + 1) + 0.2}s`"
          >
            <div class="aspect-square overflow-hidden bg-[#2C1810]/30">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-4 md:p-5">
              <h3 class="font-bold text-lg text-[#FBFADA] font-poppins">{{ item.name }}</h3>
              <p class="text-sm text-[#FBFADA]/80 font-poppins mt-1 leading-relaxed">{{ item.caption }}</p>
              <p class="text-xs text-[#A6B37D] font-poppins mt-2">{{ item.ingredients }}</p>
            </div>
          </article>
        </div>
      </section>

      <!-- Pancong Section -->
      <section v-show="activeTab === 'pancong'" class="mt-8 sm:mt-12 mb-16">
        <h2 class="text-2xl md:text-3xl font-bold border-b border-[#FBFADA]/30 pb-2 mb-8 font-sansita">
          Pancong Lumer
        </h2>
        <p class="text-[#FBFADA]/80 font-poppins mb-10">
          Pancong lembut dan hangat dengan topping yang meleleh. Camilan manis nan menggugah selera.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <article
            v-for="(item, index) in pancongItems"
            :key="item.id"
            class="bg-[#FBFADA]/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#FBFADA]/20 opacity-0 animate-fadeInUp group"
            :style="`animation-delay: ${0.1 * (index + 1) + 0.2}s`"
          >
            <div class="aspect-square overflow-hidden bg-[#2C1810]/30">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-4 md:p-5">
              <h3 class="font-bold text-lg text-[#FBFADA] font-poppins">{{ item.name }}</h3>
              <p class="text-sm text-[#FBFADA]/80 font-poppins mt-1 leading-relaxed">{{ item.caption }}</p>
              <p class="text-xs text-[#A6B37D] font-poppins mt-2">{{ item.ingredients }}</p>
            </div>
          </article>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center mt-12">
        <router-link
          to="/shop"
          class="inline-block px-8 py-4 rounded-full font-poppins font-semibold text-[#2C1810] bg-[#FBFADA] hover:bg-[#FBFADA]/90 transition duration-300 shadow-lg"
        >
          Pesan & Ambil
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('roti');

const tabs = [
  { id: 'roti', label: 'Roti Bakar' },
  { id: 'pancong', label: 'Pancong Lumer' },
];

const rotiBakarItems = [
  {
    id: 'lotus',
    name: 'Lotus Biscoff',
    image: new URL('@/assets/lotus.jpg', import.meta.url).href,
    caption: 'Roti bakar dengan Lotus Biscoff spread. Rasa caramel dan cinnamon yang khas.',
    ingredients: 'Roti bakar, Lotus Biscoff spread (biskuit, karamel, kayu manis, mentega).',
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu Crunchy',
    image: new URL('@/assets/tiramisu.jpg', import.meta.url).href,
    caption: 'Perpaduan tiramisu dengan tekstur crunchy. Nikmat untuk pecinta kopi.',
    ingredients: 'Roti bakar, mascarpone, espresso, bubuk cokelat, potongan renyah.',
  },
  {
    id: 'choco',
    name: 'Choco Crunchy Spread',
    image: new URL('@/assets/chcocrunchy.jpg', import.meta.url).href,
    caption: 'Cokelat lumer dengan topping crunchy. Manis dan renyah.',
    ingredients: 'Roti bakar, olesan cokelat, pearl renyah (cokelat, gula).',
  },
  {
    id: 'blueberry',
    name: 'Blueberry',
    image: new URL('@/assets/blueberry.jpg', import.meta.url).href,
    caption: 'Roti bakar dengan selai blueberry. Segar dan sedikit asam.',
    ingredients: 'Roti bakar, kompot blueberry, krim keju, mentega.',
  },
  {
    id: 'cheese',
    name: 'Cheese',
    image: new URL('@/assets/cheese.jpg', import.meta.url).href,
    caption: 'Keju leleh di atas roti bakar. Gurih dan lezat.',
    ingredients: 'Roti bakar, keju leleh, mentega.',
  },
  {
    id: 'peanut',
    name: 'Peanut',
    image: new URL('@/assets/peanut.jpg', import.meta.url).href,
    caption: 'Selai kacang dengan aroma roasted. Gurih dan mengenyangkan.',
    ingredients: 'Roti bakar, selai kacang, madu, kacang sangrai.',
  },
  {
    id: 'greentea',
    name: 'Green Tea',
    image: new URL('@/assets/greentea.jpg', import.meta.url).href,
    caption: 'Matcha dan white chocolate. Lembut dan tidak terlalu manis.',
    ingredients: 'Roti bakar, matcha, cokelat putih, krim.',
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    image: new URL('@/assets/strawberry.jpg', import.meta.url).href,
    caption: 'Strawberry segar dengan cream. Manis dan segar.',
    ingredients: 'Roti bakar, stroberi, krim, olesan manis.',
  },
];

const pancongItems = [
  {
    id: 'milo',
    name: 'Pancong Milo',
    image: new URL('@/assets/pancong1.jpg', import.meta.url).href,
    caption: 'Pancong lumer dengan Milo. Rasa cokelat malt yang khas dan manis.',
    ingredients: 'Pancong, Milo (bubuk cokelat malt), susu kental manis, mentega.',
  },
  {
    id: 'keju-susu',
    name: 'Pancong Keju Susu Klasik',
    image: new URL('@/assets/pancong2.jpg', import.meta.url).href,
    caption: 'Pancong klasik dengan keju leleh dan susu. Gurih dan legit.',
    ingredients: 'Pancong, keju, susu kental manis, mentega.',
  },
  {
    id: 'coklat-keju',
    name: 'Pancong Coklat Keju',
    image: new URL('@/assets/pancong3.jpg', import.meta.url).href,
    caption: 'Perpaduan cokelat dan keju leleh. Manis dan gurih berpadu.',
    ingredients: 'Pancong, cokelat, keju, susu kental manis, mentega.',
  },
];
</script>

<style scoped>
.font-sansita {
  font-family: 'Sansita Swashed', cursive;
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

.page-bg {
  background: #2C1810;
}
</style>
