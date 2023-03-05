<template>
  <div id="dom-layout">
    <MKToggle
      :onClick="changeVisiblePanel"
      label="🛠 Tools"
      :isActive="isVisiblePanel"
    />
    <MKToolsPanel :isVisible="isVisiblePanel" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MKButton from '/src/components/ui/MKButton.vue';
import MKToggle from '/src/components/ui/MKToggle.vue';
import MKToolsPanel from '/src/components/ToolsPanel/MKToolsPanel.vue';

export default defineComponent({
  name: 'DomLayout',
  components: { MKToggle, MKToolsPanel },
  setup() {
    let isVisiblePanel = ref(false);

    const changeVisiblePanel = () => {
      isVisiblePanel.value = !isVisiblePanel.value;
    };

    return {
      isVisiblePanel,
      changeVisiblePanel,
    };
  },
});
</script>

<style scoped>
#dom-layout {
  width: fit-content;
  height: fit-content;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  position: absolute;
  z-index: var(--zIndex1);
  left: var(--gap);
  top: var(--gap);
}
</style>
