<template>
  <Transition name="fade">
    <div class="mk-panel" v-show="isVisible">
      <slot></slot>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MKPanel',
  props: {
    isVisible: Boolean,
  },
});
</script>

<style scoped>
.mk-panel {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.fade-enter-active,
.fade-leave-active {
  transition: var(--transition);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
