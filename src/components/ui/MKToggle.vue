<template>
  <MKButton
    :label="label"
    :onClick="onClick"
    :class="`mk-toggle ${isActive ? 'active' : ''}`"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MKButton from '/src/components/ui/MKButton.vue';

export default defineComponent({
  name: 'MKToggle',
  components: { MKButton },
  props: {
    onClick: Function,
    isActive: Boolean,
    label: String,
  },
});
</script>

<style scoped>
.mk-toggle {
  --indicatorSize: 8px;

  padding-right: calc((var(--paddingX) * 2) + var(--indicatorSize));
  position: relative;
  display: flex;
  align-items: center;
  opacity: 0.5;
}

.mk-toggle:after {
  content: '';
  border-radius: 50%;
  position: absolute;
  width: var(--indicatorSize);
  aspect-ratio: 1;
  right: var(--paddingX);
  border: 1px solid var(--textColor);
}

.active {
  opacity: 1;
}

.active:after {
  background: var(--textColor);
}
</style>
