<template>
  <div class="mk-panel-section">
    <div class="mk-panel-section-header">
      <h2>{{ title }}</h2>
      <slot name="header"></slot>
    </div>
    <div class="mk-panel-section-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MKPanelSection',
  props: {
    title: String,
  },
});
</script>

<style scoped>
.mk-panel-section {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.mk-panel-section-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mk-panel-section-body {
  backdrop-filter: blur(30px);
  background-color: var(--selfWhite);
  border: 2px solid var(--black);
  border-radius: var(--borderRadius);
  opacity: 0.8;
  padding: var(--gap);
  display: flex;
  gap: var(--gap);
  flex-wrap: wrap;
}
</style>
