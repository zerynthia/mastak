<template>
  <MKPanel :isVisible="isVisible">
    <MKCircleSection />
    <MKClearSection />
  </MKPanel>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import MKPanel from '/src/components/ui/MKPanel.vue';
import MKCircleSection from '/src/components/ToolsPanel/MKCircleSection.vue';
import MKClearSection from '/src/components/ToolsPanel/MKClearSection.vue';

export default defineComponent({
  name: 'MKToolsPanel',
  components: {
    MKPanel,
    MKCircleSection,
    MKClearSection,
  },
  props: {
    isVisible: Boolean,
  }
});
</script>

