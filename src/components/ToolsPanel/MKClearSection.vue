<template>
  <MKPanelSection title="Clear">
    <template #header>
      <MKButton label="Clear" :onClick="clearContext" />
    </template>
    <template #body>
      <MKInput type="number" label="ms" v-model="currentTimeout.value" />
      <MKToggle
        label="Start timer"
        :onClick="clearContextTimeout"
        :isActive="Boolean(currentTimeout.id)"
      />
    </template>
  </MKPanelSection>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import MKButton from '/src/components/ui/MKButton.vue';
import MKToggle from '/src/components/ui/MKToggle.vue';
import MKPanelSection from '/src/components/ui/MKPanelSection.vue';
import MKInput from '/src/components/ui/MKInput.vue';
import { clearContext } from '/src/utils/context/clearContext';

export default defineComponent({
  name: 'MKClearSection',
  components: {
    MKButton,
    MKToggle,
    MKInput,
    MKPanelSection,
  },

  setup() {
    const currentTimeout = reactive({
      id: null,
      value: '200',
    });

    const clearContextTimeout = () => {
      if (currentTimeout.id) {
        clearTimeout(currentTimeout.id);
        currentTimeout.id = null;
        return;
      }

      currentTimeout.id = setInterval(
        () => clearContext(),
        currentTimeout.value
      );
    };

    return {
      clearContext,
      clearContextTimeout,
      currentTimeout,
    };
  },
});
</script>
