<template>
  <!-- Bar navbar (logo + burger) -->
  <nav
    ref="navEl"
    class="navbar-floating fixed top-0 left-0 right-0 z-50 font-sansita px-4 sm:px-6 py-3 sm:py-4 transition-transform duration-300 ease-out"
    :class="[
      navVisible ? 'translate-y-0' : '-translate-y-full',
      isScrolled ? 'bg-[#2C1810]/80 backdrop-blur-md' : 'bg-transparent',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center min-w-0">
        <img src="@/assets/Logo.png" alt="Gerobar Logo" class="h-10 sm:h-12 md:h-14 flex-shrink-0" />
      </div>

      <!-- Menu (desktop) -->
      <ul class="hidden md:flex flex-1 justify-center space-x-8 lg:space-x-12 text-[#FBFADA] text-base lg:text-lg">
        <li><router-link to="/" class="hover:text-[#A6B37D] transition py-2">Beranda</router-link></li>
        <li><router-link to="/menu" class="hover:text-[#A6B37D] transition py-2">Menu</router-link></li>
        <li><router-link to="/about" class="hover:text-[#A6B37D] transition py-2">Tentang</router-link></li>
        <li><router-link to="/shop" class="hover:text-[#A6B37D] transition py-2">Belanja</router-link></li>
      </ul>

      <!-- Mobile burger button -->
      <button
        @click="toggleMenu"
        class="md:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#FBFADA] focus:outline-none focus:ring-2 focus:ring-[#A6B37D] rounded-lg transition"
        :class="{ 'rotate-90': isOpen, 'rotate-0': !isOpen }"
        aria-label="Toggle menu"
        :aria-expanded="isOpen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile menu overlay (full screen, separate from nav - prevents scroll-hide bug) -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      leave-active-class="transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[60] md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-[#2C1810]/95 backdrop-blur-sm"
          @click="closeMenu"
        />
        <!-- Menu content -->
        <div class="relative flex flex-col items-center justify-center min-h-full pt-20 pb-12 px-6 safe-area-padding font-sansita">
          <ul class="flex flex-col items-center space-y-6 text-[#FBFADA] text-xl">
            <li>
              <router-link
                to="/"
                class="block py-3 px-4 hover:text-[#A6B37D] transition min-h-[44px] flex items-center"
                @click="closeMenu"
              >
                Beranda
              </router-link>
            </li>
            <li>
              <router-link
                to="/menu"
                class="block py-3 px-4 hover:text-[#A6B37D] transition min-h-[44px] flex items-center"
                @click="closeMenu"
              >
                Menu
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="block py-3 px-4 hover:text-[#A6B37D] transition min-h-[44px] flex items-center"
                @click="closeMenu"
              >
                Tentang
              </router-link>
            </li>
            <li>
              <router-link
                to="/shop"
                class="block py-3 px-4 hover:text-[#A6B37D] transition min-h-[44px] flex items-center"
                @click="closeMenu"
              >
                Belanja
              </router-link>
            </li>
          </ul>
          <button
            @click="closeMenu"
            class="mt-8 py-3 px-6 rounded-full text-[#FBFADA] border border-[#FBFADA]/50 hover:bg-[#FBFADA]/10 transition min-h-[44px]"
          >
            Tutup
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isOpen = ref(false);
const navEl = ref(null);
const isScrolled = ref(false);
const isVisibleFromScroll = ref(true);
const isMobile = ref(false);
let lastScrollY = 0;
const scrollThreshold = 10;

// Navbar visible: always show when menu open; on mobile never hide; on desktop use scroll
const navVisible = computed(() => {
  if (isOpen.value) return true;
  if (isMobile.value) return true;
  return isVisibleFromScroll.value;
});

function toggleMenu() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMenu() {
  isOpen.value = false;
  document.body.style.overflow = '';
}

// Close menu on route change (e.g. when navigating via browser back)
watch(() => route.path, () => {
  closeMenu();
});

function onScroll() {
  // Don't hide navbar when mobile menu is open
  if (isOpen.value) return;

  const currentScrollY = window.scrollY ?? window.pageYOffset;
  if (currentScrollY > 80) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
  if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) return;
  if (currentScrollY > lastScrollY) {
    isVisibleFromScroll.value = false;
  } else {
    isVisibleFromScroll.value = true;
  }
  lastScrollY = currentScrollY;
}

function checkViewport() {
  isMobile.value = window.innerWidth < 768;
  if (window.innerWidth >= 768) {
    closeMenu();
  }
}

onMounted(() => {
  lastScrollY = window.scrollY ?? window.pageYOffset;
  checkViewport();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', checkViewport);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', checkViewport);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.font-sansita {
  font-family: 'Sansita Swashed', cursive;
}

.safe-area-padding {
  padding-top: env(safe-area-inset-top, 0);
  padding-bottom: env(safe-area-inset-bottom, 0);
  padding-left: env(safe-area-inset-left, 0);
  padding-right: env(safe-area-inset-right, 0);
}
</style>
