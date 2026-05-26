<template>
  <!-- Page Background -->
  <div class="page-bg fixed inset-0 overflow-hidden pointer-events-none" style="z-index: 0;"></div>

  <div class="min-h-screen text-[#2B1206] font-sansita relative overflow-x-hidden">
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

            <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold opacity-0 animate-fadeInUp tracking-tight text-[#F5C97A]" style="animation-delay: 0.15s">
              Menu Kami
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-[#C9956A] mt-3 md:mt-4 font-poppins opacity-0 animate-fadeInUp max-w-lg" style="animation-delay: 0.25s">
              Pilihan roti bakar &amp; pancong lumer favorit.
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
            <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z" fill="#FAF3E8"/>
          </svg>
        </div>
      </header>

      <!-- Menu Content — Antigravity Koleksi -->
      <main class="ag-menu-content relative pb-0">
        <!-- Floating decorative elements -->
        <div class="ag-floating-decor">
          <span class="ag-decor ag-decor-cross" style="top:8%;left:5%;"></span>
          <span class="ag-decor ag-decor-dot" style="top:15%;right:10%;"></span>
          <span class="ag-decor ag-decor-arc" style="top:30%;left:12%;"></span>
          <span class="ag-decor ag-decor-cross" style="top:45%;right:6%;"></span>
          <span class="ag-decor ag-decor-dot" style="top:55%;left:8%;"></span>
          <span class="ag-decor ag-decor-arc" style="top:70%;right:15%;"></span>
          <span class="ag-decor ag-decor-cross" style="top:85%;left:18%;"></span>
          <span class="ag-decor ag-decor-dot" style="top:92%;right:20%;"></span>
        </div>

        <div class="ag-container">

          <!-- Roti Bakar Section -->
          <Transition name="tab-fade" mode="out-in">
            <section v-if="activeTab === 'roti'" key="roti" class="ag-section">

              <h2 class="ag-section-heading opacity-0 animate-fadeInUp" style="animation-delay:0.12s">Roti Bakar</h2>
              <p class="ag-section-sub opacity-0 animate-fadeInUp" style="animation-delay:0.18s">
                Roti panggang kami dengan beragam olesan manis dan gurih. Disajikan hangat dan renyah.
              </p>

              <!-- ROW 1: Asymmetric 60/40 -->
              <div class="ag-row-asymmetric opacity-0 animate-fadeInUp" style="animation-delay:0.24s">
                <!-- Featured card (best seller) — horizontal split -->
                <article class="ag-card ag-card-featured">
                  <div class="ag-bestseller-strip">★ Best Seller</div>
                  <div class="ag-featured-split">
                    <div class="ag-featured-photo">
                      <img :src="rotiBakarItems[0].image" :alt="rotiBakarItems[0].name" :style="{ objectPosition: rotiBakarItems[0].imagePosition || 'center center' }" />
                    </div>
                    <div class="ag-featured-text">
                      <h3 class="ag-card-name">{{ rotiBakarItems[0].name }}</h3>
                      <p class="ag-card-desc">{{ rotiBakarItems[0].caption }}</p>
                      <router-link to="/shop" class="ag-card-cta">Pesan →</router-link>
                    </div>
                  </div>
                </article>
                <!-- Tall narrow card -->
                <article class="ag-card ag-card-narrow opacity-0 animate-fadeInUp" style="animation-delay:0.32s">
                  <div class="ag-card-image ag-card-image-tall">
                    <img :src="rotiBakarItems[1].image" :alt="rotiBakarItems[1].name" :style="{ objectPosition: rotiBakarItems[1].imagePosition || 'center center' }" />
                  </div>
                  <div class="ag-card-body">
                    <h3 class="ag-card-name">{{ rotiBakarItems[1].name }}</h3>
                    <p class="ag-card-desc">{{ rotiBakarItems[1].caption }}</p>
                    <router-link to="/shop" class="ag-card-cta">Pesan →</router-link>
                  </div>
                </article>
              </div>

              <!-- ROW 2: Three equal cards -->
              <div class="ag-row-triple">
                <article
                  v-for="(item, idx) in rotiBakarItems.slice(2, 5)"
                  :key="item.id"
                  class="ag-card ag-card-equal opacity-0 animate-fadeInUp"
                  :style="`animation-delay: ${0.38 + idx * 0.08}s`"
                >
                  <div class="ag-card-image ag-card-image-std">
                    <img :src="item.image" :alt="item.name" :style="{ objectPosition: item.imagePosition || 'center center' }" />
                  </div>
                  <div class="ag-card-body">
                    <h3 class="ag-card-name">{{ item.name }}</h3>
                    <p class="ag-card-desc">{{ item.caption }}</p>
                    <router-link to="/shop" class="ag-card-cta">Pesan →</router-link>
                  </div>
                </article>
              </div>

              <!-- ROW 3: Full-width cinematic banner -->
              <article class="ag-card ag-card-banner opacity-0 animate-fadeInUp" style="animation-delay:0.62s" v-if="rotiBakarItems[5]">
                <div class="ag-banner-inner">
                  <div class="ag-banner-image">
                    <img :src="rotiBakarItems[5].image" :alt="rotiBakarItems[5].name" :style="{ objectPosition: rotiBakarItems[5].imagePosition || 'center center' }" />
                    <div class="ag-banner-glow"></div>
                  </div>
                  <div class="ag-banner-info">
                    <span class="ag-banner-tag">Featured</span>
                    <h3 class="ag-banner-name">{{ rotiBakarItems[5].name }}</h3>
                    <p class="ag-banner-desc">{{ rotiBakarItems[5].caption }}</p>
                    <router-link to="/shop" class="ag-card-cta">Pesan →</router-link>
                  </div>
                </div>
              </article>

              <!-- ROW 4: Double equal columns -->
              <div class="ag-row-double" v-if="rotiBakarItems.length > 6">
                <article
                  v-for="(item, idx) in rotiBakarItems.slice(6)"
                  :key="item.id"
                  class="ag-card opacity-0 animate-fadeInUp"
                  :style="`animation-delay: ${0.7 + idx * 0.08}s`"
                >
                  <div class="ag-card-image ag-card-image-std">
                    <img :src="item.image" :alt="item.name"
                         :style="{ objectPosition: item.imagePosition || 'center center' }" />
                  </div>
                  <div class="ag-card-body">
                    <h3 class="ag-card-name">{{ item.name }}</h3>
                    <p class="ag-card-desc">{{ item.caption }}</p>
                    <router-link to="/shop" class="ag-card-cta">Pesan →</router-link>
                  </div>
                </article>
              </div>
            </section>
          </Transition>

          <!-- Pancong Section -->
          <Transition name="tab-fade" mode="out-in">
            <section v-if="activeTab === 'pancong'" key="pancong" class="ag-section">

              <h2 class="ag-section-heading opacity-0 animate-fadeInUp" style="animation-delay:0.12s">Pancong Lumer</h2>
              <p class="ag-section-sub opacity-0 animate-fadeInUp" style="animation-delay:0.18s">
                Pancong lembut dan hangat dengan topping yang meleleh. Camilan manis nan menggugah selera.
              </p>

              <!-- ROW 1: Asymmetric 60/40 — first pancong as best seller -->
              <div class="ag-row-asymmetric opacity-0 animate-fadeInUp" style="animation-delay:0.24s">
                <!-- Featured card (best seller) — horizontal split -->
                <article class="ag-card ag-card-featured">
                  <div class="ag-bestseller-strip">★ Best Seller</div>
                  <div class="ag-featured-split">
                    <div class="ag-featured-photo">
                      <img :src="pancongItems[0].image" :alt="pancongItems[0].name" />
                    </div>
                    <div class="ag-featured-text">
                      <h3 class="ag-card-name">{{ pancongItems[0].name }}</h3>
                      <p class="ag-card-desc">{{ pancongItems[0].caption }}</p>
                      <router-link to="/shop" class="ag-card-cta">Pesan →</router-link>
                    </div>
                  </div>
                </article>
                <article class="ag-card ag-card-narrow opacity-0 animate-fadeInUp" style="animation-delay:0.32s">
                  <div class="ag-card-image ag-card-image-tall">
                    <img :src="pancongItems[1].image" :alt="pancongItems[1].name" />
                  </div>
                  <div class="ag-card-body">
                    <h3 class="ag-card-name">{{ pancongItems[1].name }}</h3>
                    <p class="ag-card-desc">{{ pancongItems[1].caption }}</p>
                    <router-link to="/shop" class="ag-card-cta">Pesan →</router-link>
                  </div>
                </article>
              </div>

              <!-- ROW 2: Full-width cinematic banner for third pancong -->
              <article class="ag-card ag-card-banner opacity-0 animate-fadeInUp" style="animation-delay:0.40s" v-if="pancongItems[2]">
                <div class="ag-banner-inner">
                  <div class="ag-banner-image">
                    <img :src="pancongItems[2].image" :alt="pancongItems[2].name" />
                    <div class="ag-banner-glow"></div>
                  </div>
                  <div class="ag-banner-info">
                    <span class="ag-banner-tag">Featured</span>
                    <h3 class="ag-banner-name">{{ pancongItems[2].name }}</h3>
                    <p class="ag-banner-desc">{{ pancongItems[2].caption }}</p>
                    <router-link to="/shop" class="ag-card-cta">Pesan →</router-link>
                  </div>
                </div>
              </article>
            </section>
          </Transition>
        </div>

        <!-- Footer CTA -->
        <div class="ag-footer-cta">
          <div class="ag-footer-glow"></div>
          <div class="ag-container ag-footer-inner">
            <h3 class="ag-footer-heading">Siap Memesan?</h3>
            <p class="ag-footer-sub">Pesan terlebih dahulu untuk diambil di Warpol Graha Bunga.</p>
            <router-link to="/shop" class="ag-wa-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.702-1.36A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.327-.724-6.02-1.952a.5.5 0 00-.404-.084l-3.272.946.872-3.088a.5.5 0 00-.073-.425A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Pesan &amp; Ambil
            </router-link>
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
    caption: 'Roti bakar dengan Lotus Biscoff spread.',
    ingredients: '',
    imagePosition: 'center center',
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu Crunchy',
    image: new URL('@/assets/tiramisu.jpg', import.meta.url).href,
    caption: 'Perpaduan tiramisu dengan tekstur crunchy.',
    ingredients: '',
    imagePosition: 'center center',
  },
  {
    id: 'choco',
    name: 'Choco Crunchy Spread',
    image: new URL('@/assets/chcocrunchy.jpg', import.meta.url).href,
    caption: 'Cokelat lumer dengan topping crunchy. Manis dan renyah.',
    ingredients: '',
    imagePosition: 'center top',
  },
  {
    id: 'blueberry',
    name: 'Blueberry',
    image: new URL('@/assets/blueberry.jpg', import.meta.url).href,
    caption: 'Roti bakar dengan selai blueberry. Segar dan sedikit asam.',
    ingredients: '',
    imagePosition: 'center center',
  },
  {
    id: 'cheese',
    name: 'Cheese',
    image: new URL('@/assets/cheese.jpg', import.meta.url).href,
    caption: 'Keju leleh di atas roti bakar. Gurih dan lezat.',
    ingredients: '',
    imagePosition: 'center center',
  },
  {
    id: 'peanut',
    name: 'Peanut',
    image: new URL('@/assets/peanut.jpg', import.meta.url).href,
    caption: 'Selai kacang dengan aroma roasted. Gurih dan mengenyangkan.',
    ingredients: '',
    imagePosition: 'center center',
  },
  {
    id: 'greentea',
    name: 'Green Tea',
    image: new URL('@/assets/greentea.jpg', import.meta.url).href,
    caption: 'Matcha dan white chocolate. Lembut dan tidak terlalu manis.',
    ingredients: '',
    imagePosition: 'center 60%',
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    image: new URL('@/assets/strawberry.jpg', import.meta.url).href,
    caption: 'Strawberry segar dengan cream. Manis dan segar.',
    ingredients: '',
    imagePosition: 'center center',
  },
];

const pancongItems = [
  {
    id: 'milo',
    name: 'Pancong Milo',
    image: new URL('@/assets/pancong1.jpg', import.meta.url).href,
    caption: 'Pancong lumer dengan Milo. Rasa cokelat malt yang khas dan manis.',
    ingredients: '',
  },
  {
    id: 'keju-susu',
    name: 'Pancong Keju Susu Klasik',
    image: new URL('@/assets/pancong2.jpg', import.meta.url).href,
    caption: 'Pancong klasik dengan keju leleh dan susu. Gurih dan legit.',
    ingredients: '',
  },
  {
    id: 'coklat-keju',
    name: 'Pancong Coklat Keju',
    image: new URL('@/assets/pancong3.jpg', import.meta.url).href,
    caption: 'Perpaduan cokelat dan keju leleh. Manis dan gurih berpadu.',
    ingredients: '',
  },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

/* ===== Fonts ===== */
.font-sansita {
  font-family: 'Sansita Swashed', cursive;
}

/* ===== Page Background ===== */
.page-bg {
  background: #3D1F0D;
}

/* ===== Hero Section ===== */
.menu-hero {
  background: transparent;
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
  background: #C9956A;
  top: -100px;
  right: -100px;
}

.hero-blob-2 {
  width: 300px;
  height: 300px;
  background: #7B3F00;
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
  background: #2B1206;
  border-radius: 60px;
  padding: 4px;
  border: 1px solid rgba(201, 149, 106, 0.2);
  backdrop-filter: blur(12px);
}

.tab-indicator {
  position: absolute;
  top: 4px;
  left: 4px;
  width: calc(50% - 4px);
  height: calc(100% - 8px);
  background: #7B3F00;
  border-radius: 56px;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(123, 63, 0, 0.3);
}

.tab-btn {
  position: relative;
  z-index: 1;
  padding: 12px 24px;
  border-radius: 56px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #C9956A;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  min-height: 44px;
}

.tab-btn.tab-active {
  color: #F5C97A;
}


@media (min-width: 640px) {
  .tab-btn {
    padding: 12px 32px;
    font-size: 15px;
  }
}

/* ===== Antigravity Menu Content ===== */
.ag-menu-content {
  background: #FAF3E8;
  position: relative;
  overflow: hidden;
}

.ag-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (min-width: 640px) {
  .ag-container { padding: 0 32px; }
}
@media (min-width: 1024px) {
  .ag-container { padding: 0 48px; }
}

.ag-section {
  padding-top: 20px;
  padding-bottom: 60px;
}

/* ===== Floating Decorative Elements ===== */
.ag-floating-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.ag-decor {
  position: absolute;
  display: block;
}

.ag-decor-cross::before,
.ag-decor-cross::after {
  content: '';
  position: absolute;
  background: rgba(196, 154, 108, 0.15);
}
.ag-decor-cross::before {
  width: 18px; height: 2px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
.ag-decor-cross::after {
  width: 2px; height: 18px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

.ag-decor-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: rgba(196, 154, 108, 0.15);
}

.ag-decor-arc {
  width: 40px; height: 40px;
  border: 1.5px solid rgba(196, 154, 108, 0.15);
  border-radius: 50%;
  clip-path: inset(0 0 50% 50%);
}

/* ===== Section Label — Koleksi ===== */
.ag-section-label {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
}

.ag-label-line {
  width: 40px;
  height: 1.5px;
  background: #C49A6C;
}

.ag-label-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #7B3F00;
  text-transform: uppercase;
}

.ag-section-heading {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 36px;
  color: #2B1206;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 12px;
}

@media (min-width: 768px) {
  .ag-section-heading { font-size: 40px; }
}

.ag-section-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #7B5C3E;
  line-height: 1.7;
  max-width: 520px;
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .ag-section-sub { margin-bottom: 56px; }
}

/* ===== Asymmetric Row — 60/40 ===== */
.ag-row-asymmetric {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
  align-items: stretch;
}

@media (min-width: 768px) {
  .ag-row-asymmetric {
    grid-template-columns: 3fr 2fr;
    gap: 24px;
    margin-bottom: 24px;
  }
}

.ag-row-reversed {
  direction: ltr;
}

@media (min-width: 768px) {
  .ag-row-reversed {
    grid-template-columns: 2fr 3fr;
  }
}

/* ===== Double Row ===== */
.ag-row-double {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;
  align-items: stretch;
}

@media (max-width: 639px) {
  .ag-row-double {
    grid-template-columns: 1fr;
  }
}

/* ===== Triple Row ===== */
.ag-row-triple {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

@media (min-width: 640px) {
  .ag-row-triple {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 24px;
  }
}

@media (min-width: 1024px) {
  .ag-row-triple {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ===== Product Card ===== */
.ag-card {
  background: #F0E4CE;
  border: 1px solid #E8D9B8;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 4px 20px rgba(43, 18, 6, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ag-card:hover {
  transform: translateY(-6px);
  border-color: #C49A6C;
  box-shadow:
    0 16px 40px rgba(43, 18, 6, 0.12),
    0 0 0 1px rgba(196, 154, 108, 0.2);
}

/* ===== Best Seller Strip ===== */
.ag-bestseller-strip {
  width: 100%;
  flex-shrink: 0;
  background: #7B3F00;
  color: #F5C97A;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-align: center;
  padding: 7px 0;
  z-index: 10;
}

/* ===== Card Image ===== */
.ag-card-image {
  overflow: hidden;
  width: 100%;
  flex-shrink: 0;
  background: #F0E4CE;
}

.ag-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
}

.ag-card:hover .ag-card-image img {
  transform: scale(1.03);
}

.ag-card-image-large {
  height: 200px;
}

.ag-card-image-tall {
  height: 240px;
}

.ag-card-image-std {
  height: 200px;
}

/* ===== Card Body ===== */
.ag-card-body {
  flex: 1;
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
}

.ag-card-name {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 17px;
  color: #2B1206;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.ag-card-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  color: #7B5C3E;
  line-height: 1.55;
  margin-top: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ag-card-cta {
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #854F0B;
  margin-top: 10px;
  transition: all 0.3s ease;
  letter-spacing: 0.01em;
}

.ag-card-cta:hover {
  color: #7B3F00;
  text-decoration: underline;
  letter-spacing: 0.04em;
}

/* ===== Featured Card (horizontal split) ===== */
.ag-card-featured {
  display: flex;
  flex-direction: column;
}

.ag-featured-split {
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 300px;
}

.ag-featured-photo {
  flex: 0 0 52%;
  overflow: hidden;
}

.ag-featured-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.ag-card-featured:hover .ag-featured-photo img {
  transform: scale(1.05);
}

.ag-featured-text {
  flex: 1;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F0E4CE;
}


.ag-card-narrow {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* ===== Cinematic Banner Card ===== */
.ag-card-banner {
  margin-bottom: 20px;
  border-radius: 20px;
}

@media (min-width: 768px) {
  .ag-card-banner { margin-bottom: 24px; }
}

.ag-banner-inner {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .ag-banner-inner {
    grid-template-columns: 1fr 1fr;
    height: 180px;
  }
}

.ag-banner-image {
  position: relative;
  overflow: hidden;
  height: 140px;
  width: 100%;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .ag-banner-image {
    height: 100%;
  }
}

.ag-banner-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.ag-card-banner:hover .ag-banner-image img {
  transform: scale(1.06);
}

.ag-banner-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(196, 154, 108, 0.15) 0%, transparent 70%);
  pointer-events: none;
  filter: blur(30px);
}

.ag-banner-info {
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 768px) {
  .ag-banner-info { padding: 20px 28px; }
}

.ag-banner-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #7B3F00;
  margin-bottom: 8px;
}

.ag-banner-name {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  color: #2B1206;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .ag-banner-name { font-size: 30px; }
}

.ag-banner-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #7B5C3E;
  line-height: 1.6;
  margin-top: 8px;
}

/* ===== Footer CTA ===== */
.ag-footer-cta {
  background: #2B1206;
  padding: 80px 0 90px;
  position: relative;
  text-align: center;
  overflow: hidden;
}

.ag-footer-glow {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(245, 201, 122, 0.12) 0%, transparent 70%);
  pointer-events: none;
  filter: blur(40px);
}

.ag-footer-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ag-footer-heading {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  color: #F5C97A;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .ag-footer-heading { font-size: 42px; }
}

.ag-footer-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: #C9956A;
  margin-top: 12px;
  margin-bottom: 32px;
  max-width: 400px;
}

.ag-wa-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  background: #25A85A;
  color: #ffffff;
  border-radius: 60px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  transition: all 0.35s ease;
  box-shadow: 0 4px 24px rgba(37, 168, 90, 0.3);
}

.ag-wa-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(37, 168, 90, 0.4), 0 0 40px rgba(37, 168, 90, 0.15);
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

