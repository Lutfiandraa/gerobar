<template>
  <article
    class="ag-card ag-card-banner opacity-0 ag-animate-fadeInUp"
    :style="`animation-delay: ${animationDelay}`"
  >
    <div class="ag-banner-inner">
      <div class="ag-banner-image">
        <img :src="item.image" :alt="item.name" :style="{ objectPosition: item.imagePosition || 'center center' }" />
        <div class="ag-banner-glow"></div>
      </div>
      <div class="ag-banner-info">
        <span class="ag-banner-tag">Featured</span>
        <h3 class="ag-banner-name">{{ item.name }}</h3>
        <p class="ag-banner-desc">{{ item.caption }}</p>
        <router-link to="/shop" class="ag-card-cta">Pesan →</router-link>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  animationDelay: { type: String, default: '0s' },
});
</script>

<style scoped>



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


</style>
