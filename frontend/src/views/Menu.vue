<template>
  <!-- Page Background -->
  <div class="page-bg fixed inset-0 overflow-hidden pointer-events-none" style="z-index: 0;"></div>

  <div class="min-h-screen text-[#FBFADA] font-sansita relative overflow-x-hidden">
    <div class="relative" style="z-index: 1;">

      <!-- Hero Section with warm gradient -->
      <header class="menu-hero relative pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-20 overflow-hidden">
        <!-- Decorative blobs -->
        <div class="hero-blob hero-blob-1"></div>
        <div class="hero-blob hero-blob-2"></div>

        <div class="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div class="flex flex-col items-center text-center">
            <!-- Logo badge -->
            <div class="mb-6 opacity-0 animate-fadeInUp" style="animation-delay: 0.1s">
              <div class="logo-badge">
                <img
                  src="@/assets/main.png"
                  alt="Gerobar Roti Bakar"
                  class="w-20 sm:w-24 md:w-28 h-auto object-contain"
                />
              </div>
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold opacity-0 animate-fadeInUp tracking-tight" style="animation-delay: 0.15s">
              Menu Kami
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-[#FBFADA]/70 mt-3 md:mt-4 font-poppins opacity-0 animate-fadeInUp max-w-lg" style="animation-delay: 0.25s">
              Pilihan roti bakar &amp; pancong lumer favorit, dibuat dengan cinta.
            </p>

            <!-- Tab Switcher -->
            <div class="tab-container mt-8 sm:mt-10 opacity-0 animate-fadeInUp" style="animation-delay: 0.35s">
              <div class="tab-switcher">
                <div
                  class="tab-indicator"
                  :style="{ transform: activeTab === 'roti' ? 'translateX(0)' : 'translateX(100%)' }"
                ></div>
                <button
                  v-for="tab in tabs"
                  :key="tab.id"
                  @click="activeTab = tab.id"
                  class="tab-btn"
                  :class="{ 'tab-active': activeTab === tab.id }"
                >
                  {{ tab.label }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom curve -->
        <div class="hero-curve">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z" fill="#1E110A"/>
          </svg>
        </div>
      </header>

      <!-- Menu Content -->
      <main class="menu-content relative pb-20">
        <div class="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

          <!-- Roti Bakar Section -->
          <Transition name="tab-fade" mode="out-in">
            <section v-if="activeTab === 'roti'" key="roti">
              <!-- Section header -->
              <div class="section-header mb-10 md:mb-14">
                <div class="flex items-center gap-3 mb-3">
                  <div class="section-line"></div>
                  <span class="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C49A6C] font-poppins font-medium">Koleksi</span>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold font-sansita">Roti Bakar</h2>
                <p class="text-[#FBFADA]/60 font-poppins mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
                  Roti panggang kami dengan beragam olesan manis dan gurih. Disajikan hangat dan renyah.
                </p>
              </div>

              <!-- Featured item (first item) -->
              <div class="featured-card mb-10 md:mb-14 opacity-0 animate-fadeInUp" style="animation-delay: 0.1s">
                <div class="featured-inner">
                  <div class="featured-image">
                    <img
                      :src="rotiBakarItems[0].image"
                      :alt="rotiBakarItems[0].name"
                      class="w-full h-full object-cover"
                    />
                    <div class="featured-badge">
                      <span>Favorit</span>
                    </div>
                  </div>
                  <div class="featured-info">
                    <span class="text-xs uppercase tracking-[0.15em] text-[#C49A6C] font-poppins font-medium">Rekomendasi</span>
                    <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 font-sansita">{{ rotiBakarItems[0].name }}</h3>
                    <p class="text-[#FBFADA]/75 font-poppins mt-3 text-sm sm:text-base leading-relaxed">{{ rotiBakarItems[0].caption }}</p>
                    <p class="text-xs text-[#C49A6C]/80 font-poppins mt-4 leading-relaxed">{{ rotiBakarItems[0].ingredients }}</p>
                    <router-link
                      to="/shop"
                      class="featured-cta mt-6"
                    >
                      Pesan Sekarang →
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Grid for remaining items -->
              <div class="menu-grid">
                <article
                  v-for="(item, index) in rotiBakarItems.slice(1)"
                  :key="item.id"
                  class="menu-card opacity-0 animate-fadeInUp"
                  :style="`animation-delay: ${0.08 * (index + 1) + 0.15}s`"
                >
                  <div class="card-image">
                    <img
                      :src="item.image"
                      :alt="item.name"
                      class="w-full h-full object-cover"
                    />
                    <div class="card-overlay">
                      <router-link to="/shop" class="card-order-btn">Pesan</router-link>
                    </div>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">{{ item.name }}</h3>
                    <p class="card-caption">{{ item.caption }}</p>
                    <p class="card-ingredients">{{ item.ingredients }}</p>
                  </div>
                </article>
              </div>
            </section>
          </Transition>

          <!-- Pancong Section -->
          <Transition name="tab-fade" mode="out-in">
            <section v-if="activeTab === 'pancong'" key="pancong">
              <!-- Section header -->
              <div class="section-header mb-10 md:mb-14">
                <div class="flex items-center gap-3 mb-3">
                  <div class="section-line"></div>
                  <span class="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C49A6C] font-poppins font-medium">Koleksi</span>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold font-sansita">Pancong Lumer</h2>
                <p class="text-[#FBFADA]/60 font-poppins mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
                  Pancong lembut dan hangat dengan topping yang meleleh. Camilan manis nan menggugah selera.
                </p>
              </div>

              <!-- Pancong - horizontal layout for fewer items -->
              <div class="pancong-grid">
                <article
                  v-for="(item, index) in pancongItems"
                  :key="item.id"
                  class="pancong-card opacity-0 animate-fadeInUp"
                  :style="`animation-delay: ${0.12 * (index + 1) + 0.1}s`"
                >
                  <div class="pancong-image">
                    <img
                      :src="item.image"
                      :alt="item.name"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="pancong-body">
                    <h3 class="card-title text-xl sm:text-2xl">{{ item.name }}</h3>
                    <p class="card-caption mt-2">{{ item.caption }}</p>
                    <p class="card-ingredients mt-3">{{ item.ingredients }}</p>
                    <router-link to="/shop" class="pancong-cta mt-4">
                      Pesan →
                    </router-link>
                  </div>
                </article>
              </div>
            </section>
          </Transition>
        </div>

        <!-- Floating CTA -->
        <div class="cta-section mt-16 md:mt-24">
          <div class="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            <div class="cta-card">
              <div class="cta-content">
                <h3 class="text-2xl sm:text-3xl font-bold font-sansita">Siap Memesan?</h3>
                <p class="text-[#FBFADA]/70 font-poppins mt-2 text-sm sm:text-base">Pesan terlebih dahulu untuk diambil di Warpol Graha Bunga.</p>
              </div>
              <router-link
                to="/shop"
                class="cta-button"
              >
                Pesan & Ambil
              </router-link>
            </div>
          </div>
        </div>
      </main>
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
/* ===== Fonts ===== */
.font-sansita {
  font-family: 'Sansita Swashed', cursive;
}

/* ===== Page Background ===== */
.page-bg {
  background: #1E110A;
}

/* ===== Hero Section ===== */
.menu-hero {
  background: linear-gradient(165deg, #3D2316 0%, #2C1810 40%, #1E110A 100%);
  position: relative;
}

.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  pointer-events: none;
}

.hero-blob-1 {
  width: 400px;
  height: 400px;
  background: #C49A6C;
  top: -100px;
  right: -100px;
}

.hero-blob-2 {
  width: 300px;
  height: 300px;
  background: #8B5E3C;
  bottom: 0;
  left: -80px;
}

.hero-curve {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  line-height: 0;
}

.hero-curve svg {
  width: 100%;
  height: 60px;
}

/* ===== Logo Badge ===== */
.logo-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.logo-badge:hover {
  transform: scale(1.05);
}

/* ===== Tab Switcher ===== */
.tab-container {
  display: flex;
  justify-content: center;
}

.tab-switcher {
  display: inline-flex;
  position: relative;
  background: rgba(251, 250, 218, 0.08);
  border-radius: 60px;
  padding: 4px;
  border: 1px solid rgba(251, 250, 218, 0.1);
  backdrop-filter: blur(12px);
}

.tab-indicator {
  position: absolute;
  top: 4px;
  left: 4px;
  width: calc(50% - 4px);
  height: calc(100% - 8px);
  background: linear-gradient(135deg, #C49A6C, #8B5E3C);
  border-radius: 56px;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(196, 154, 108, 0.3);
}

.tab-btn {
  position: relative;
  z-index: 1;
  padding: 12px 24px;
  border-radius: 56px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(251, 250, 218, 0.6);
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  min-height: 44px;
}

.tab-btn.tab-active {
  color: #FBFADA;
}


@media (min-width: 640px) {
  .tab-btn {
    padding: 12px 32px;
    font-size: 15px;
  }
}

/* ===== Menu Content Area ===== */
.menu-content {
  background: #1E110A;
}

/* ===== Section Header ===== */
.section-line {
  width: 32px;
  height: 2px;
  background: linear-gradient(90deg, #C49A6C, transparent);
}

/* ===== Featured Card ===== */
.featured-card {
  border-radius: 24px;
  overflow: hidden;
}

.featured-inner {
  display: grid;
  grid-template-columns: 1fr;
  background: linear-gradient(135deg, rgba(196, 154, 108, 0.08), rgba(44, 24, 16, 0.6));
  border: 1px solid rgba(196, 154, 108, 0.15);
  border-radius: 24px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.featured-inner:hover {
  border-color: rgba(196, 154, 108, 0.3);
}

@media (min-width: 768px) {
  .featured-inner {
    grid-template-columns: 1fr 1fr;
  }
}

.featured-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

@media (min-width: 768px) {
  .featured-image {
    aspect-ratio: auto;
    min-height: 360px;
  }
}

.featured-image img {
  transition: transform 0.6s ease;
}

.featured-inner:hover .featured-image img {
  transform: scale(1.05);
}

.featured-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: linear-gradient(135deg, #C49A6C, #8B5E3C);
  padding: 6px 16px;
  border-radius: 30px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #FBFADA;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.featured-info {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 768px) {
  .featured-info {
    padding: 40px;
  }
}

.featured-cta {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 12px 28px;
  background: linear-gradient(135deg, #C49A6C, #8B5E3C);
  border-radius: 60px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #FBFADA;
  transition: all 0.3s ease;
  width: fit-content;
  box-shadow: 0 4px 15px rgba(196, 154, 108, 0.25);
}

.featured-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(196, 154, 108, 0.35);
}

/* ===== Menu Grid ===== */
.menu-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 640px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (min-width: 1024px) {
  .menu-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
}

/* ===== Menu Card ===== */
.menu-card {
  background: linear-gradient(160deg, rgba(196, 154, 108, 0.06), rgba(30, 17, 10, 0.8));
  border: 1px solid rgba(196, 154, 108, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-card:hover {
  transform: translateY(-6px);
  border-color: rgba(196, 154, 108, 0.25);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(196, 154, 108, 0.1);
}

.card-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: #2C1810;
}

.card-image img {
  transition: transform 0.5s ease;
}

.menu-card:hover .card-image img {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(30, 17, 10, 0.8), transparent 60%);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.menu-card:hover .card-overlay {
  opacity: 1;
}

.card-order-btn {
  padding: 8px 20px;
  background: rgba(251, 250, 218, 0.95);
  color: #2C1810;
  border-radius: 30px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s ease;
  transform: translateY(8px);
}

.menu-card:hover .card-order-btn {
  transform: translateY(0);
}

.card-order-btn:hover {
  background: #FBFADA;
  box-shadow: 0 4px 12px rgba(251, 250, 218, 0.3);
}

.card-body {
  padding: 20px;
}

.card-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #FBFADA;
}

.card-caption {
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  color: rgba(251, 250, 218, 0.65);
  line-height: 1.6;
  margin-top: 6px;
}

.card-ingredients {
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  color: rgba(196, 154, 108, 0.7);
  line-height: 1.5;
  margin-top: 8px;
}

/* ===== Pancong Grid ===== */
.pancong-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .pancong-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
}

.pancong-card {
  background: linear-gradient(160deg, rgba(196, 154, 108, 0.06), rgba(30, 17, 10, 0.8));
  border: 1px solid rgba(196, 154, 108, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.pancong-card:hover {
  transform: translateY(-6px);
  border-color: rgba(196, 154, 108, 0.25);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.pancong-image {
  aspect-ratio: 4/3;
  overflow: hidden;
  background: #2C1810;
}

.pancong-image img {
  transition: transform 0.5s ease;
}

.pancong-card:hover .pancong-image img {
  transform: scale(1.08);
}

.pancong-body {
  padding: 20px 20px 24px;
  display: flex;
  flex-direction: column;
}

.pancong-cta {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #C49A6C;
  transition: all 0.3s ease;
  width: fit-content;
}

.pancong-cta:hover {
  color: #FBFADA;
  gap: 8px;
}

/* ===== CTA Section ===== */
.cta-card {
  background: linear-gradient(135deg, rgba(196, 154, 108, 0.12), rgba(139, 94, 60, 0.08));
  border: 1px solid rgba(196, 154, 108, 0.2);
  border-radius: 24px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  backdrop-filter: blur(12px);
}

@media (min-width: 768px) {
  .cta-card {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 40px 48px;
  }
}

.cta-button {
  display: inline-flex;
  align-items: center;
  padding: 14px 36px;
  background: linear-gradient(135deg, #FBFADA, #E8E5C0);
  color: #2C1810;
  border-radius: 60px;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(251, 250, 218, 0.2);
  white-space: nowrap;
  flex-shrink: 0;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(251, 250, 218, 0.3);
}

/* ===== Tab Transition ===== */
.tab-fade-enter-active {
  transition: all 0.35s ease-out;
}

.tab-fade-leave-active {
  transition: all 0.2s ease-in;
}

.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ===== Animations ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.7s ease forwards;
}
</style>
