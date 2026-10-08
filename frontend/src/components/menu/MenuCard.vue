<template>
  <!-- Featured variant -->
  <article
    v-if="variant === 'featured'"
    class="ag-card ag-card-featured"
  >
    <div v-if="showBestseller" class="ag-bestseller-strip">★ Best Seller</div>
    <div class="ag-featured-split">
      <div class="ag-featured-photo">
        <img :src="item.image" :alt="item.name" :style="{ objectPosition: item.imagePosition || 'center center' }" />
      </div>
      <div class="ag-featured-text">
        <h3 class="ag-card-name">{{ item.name }}</h3>
        <p class="ag-card-desc">{{ item.caption }}</p>
        <router-link to="/shop" class="ag-card-cta">Pesan →</router-link>
      </div>
    </div>
  </article>

  <!-- Narrow variant -->
  <article
    v-else-if="variant === 'narrow'"
    class="ag-card ag-card-narrow"
    :class="animationDelay ? 'opacity-0 ag-animate-fadeInUp' : ''"
    :style="animationDelay ? `animation-delay: ${animationDelay}` : ''"
  >
    <div class="ag-card-image ag-card-image-tall">
      <img :src="item.image" :alt="item.name" :style="{ objectPosition: item.imagePosition || 'center center' }" />
    </div>
    <div class="ag-card-body">
      <h3 class="ag-card-name">{{ item.name }}</h3>
      <p class="ag-card-desc">{{ item.caption }}</p>
      <router-link to="/shop" class="ag-card-cta">Pesan →</router-link>
    </div>
  </article>

  <!-- Standard variant -->
  <article
    v-else
    class="ag-card"
    :class="[extraClass, animationDelay ? 'opacity-0 ag-animate-fadeInUp' : '']"
    :style="animationDelay ? `animation-delay: ${animationDelay}` : ''"
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
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  variant: { type: String, default: 'standard' },
  animationDelay: { type: String, default: '' },
  showBestseller: { type: Boolean, default: false },
  extraClass: { type: String, default: '' },
});
</script>

<style scoped>

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


</style>
