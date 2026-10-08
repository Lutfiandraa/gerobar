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
            <div class="mb-6 opacity-0 ag-animate-fadeInUp" style="animation-delay: 0.1s">
              <div class="logo-badge">
                <img
                  src="@/assets/main.png"
                  alt="Gerobar Roti Bakar"
                  class="w-20 sm:w-24 md:w-28 h-auto object-contain"
                />
              </div>
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold opacity-0 ag-animate-fadeInUp tracking-tight text-[#F5C97A]" style="animation-delay: 0.15s">
              Menu Kami
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-[#C9956A] mt-3 md:mt-4 font-poppins opacity-0 ag-animate-fadeInUp max-w-lg" style="animation-delay: 0.25s">
              Pilihan roti bakar &amp; pancong lumer favorit.
            </p>

            <!-- Tab Switcher -->
            <MenuTabs
              v-model="activeTab"
              :tabs="tabs"
              class="mt-8 sm:mt-10 opacity-0 ag-animate-fadeInUp"
              style="animation-delay: 0.35s"
            />
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

              <h2 class="ag-section-heading opacity-0 ag-animate-fadeInUp" style="animation-delay:0.12s">Roti Bakar</h2>
              <p class="ag-section-sub opacity-0 ag-animate-fadeInUp" style="animation-delay:0.18s">
                Roti panggang kami dengan beragam olesan manis dan gurih. Disajikan hangat dan renyah.
              </p>

              <!-- ROW 1: Asymmetric 60/40 -->
              <div class="ag-row-asymmetric opacity-0 ag-animate-fadeInUp" style="animation-delay:0.24s">
                <!-- Featured card (best seller) — horizontal split -->
                <MenuCard :item="rotiBakarItems[0]" variant="featured" show-bestseller />
                <!-- Tall narrow card -->
                <MenuCard :item="rotiBakarItems[1]" variant="narrow" animation-delay="0.32s" />
              </div>

              <!-- ROW 2: Three equal cards -->
              <div class="ag-row-triple">
                <MenuCard
                  v-for="(item, idx) in rotiBakarItems.slice(2, 5)"
                  :key="item.id"
                  :item="item"
                  extra-class="ag-card-equal"
                  :animation-delay="`${0.38 + idx * 0.08}s`"
                />
              </div>

              <!-- ROW 3: Full-width cinematic banner -->
              <MenuBanner v-if="rotiBakarItems[5]" :item="rotiBakarItems[5]" animation-delay="0.62s" />

              <!-- ROW 4: Double equal columns -->
              <div class="ag-row-double" v-if="rotiBakarItems.length > 6">
                <MenuCard
                  v-for="(item, idx) in rotiBakarItems.slice(6)"
                  :key="item.id"
                  :item="item"
                  :animation-delay="`${0.7 + idx * 0.08}s`"
                />
              </div>
            </section>
          </Transition>

          <!-- Pancong Section -->
          <Transition name="tab-fade" mode="out-in">
            <section v-if="activeTab === 'pancong'" key="pancong" class="ag-section">

              <h2 class="ag-section-heading opacity-0 ag-animate-fadeInUp" style="animation-delay:0.12s">Pancong Lumer</h2>
              <p class="ag-section-sub opacity-0 ag-animate-fadeInUp" style="animation-delay:0.18s">
                Pancong lembut dan hangat dengan topping yang meleleh. Camilan manis nan menggugah selera.
              </p>

              <!-- ROW 1: Asymmetric 60/40 — first pancong as best seller -->
              <div class="ag-row-asymmetric opacity-0 ag-animate-fadeInUp" style="animation-delay:0.24s">
                <!-- Featured card (best seller) — horizontal split -->
                <MenuCard :item="pancongItems[0]" variant="featured" show-bestseller />
                <MenuCard :item="pancongItems[1]" variant="narrow" animation-delay="0.32s" />
              </div>

              <!-- ROW 2: Full-width cinematic banner for third pancong -->
              <MenuBanner v-if="pancongItems[2]" :item="pancongItems[2]" animation-delay="0.40s" />
            </section>
          </Transition>
        </div>

      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import '@/assets/menu-shared.css';
import { rotiBakarItems, pancongItems } from '@/data/menu';
import MenuCard from '@/components/menu/MenuCard.vue';
import MenuBanner from '@/components/menu/MenuBanner.vue';
import MenuTabs from '@/components/menu/MenuTabs.vue';

const activeTab = ref('roti');

const tabs = [
  { id: 'roti', label: 'Roti Bakar' },
  { id: 'pancong', label: 'Pancong Lumer' },
];
</script>

<style scoped>
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


</style>
