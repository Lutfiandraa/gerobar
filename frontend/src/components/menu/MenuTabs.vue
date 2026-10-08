<template>
  <div class="tab-container">
    <div class="tab-switcher">
      <div
        class="tab-indicator"
        :style="{ transform: modelValue === tabs[0]?.id ? 'translateX(0)' : 'translateX(100%)' }"
      ></div>
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="$emit('update:modelValue', tab.id)"
        class="tab-btn"
        :class="{ 'tab-active': modelValue === tab.id }"
      >
        {{ tab.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, required: true },
  tabs: { type: Array, required: true },
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
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
</style>
