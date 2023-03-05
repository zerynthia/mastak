<template>
  <canvas id="canvas-layout" :width="width" :height="height"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CanvasLayout',

  setup() {
    const width = '1600';
    const height = '900';

    return { width, height };
  },
});
</script>

<style>
#canvas-layout {
  border-radius: var(--borderRadius);
}
</style>
