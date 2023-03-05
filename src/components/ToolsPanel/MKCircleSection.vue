<template>
  <MKPanelSection title="Circle">
    <template #header>
      <MKButton label="Create" :onClick="createCircle" />
    </template>
    <template #body>
      <MKToggle
        label="Transparent"
        :isActive="circleSample.hasTransparent"
        :onClick="() => changeCircleSample('hasTransparent')"
      />
      <MKToggle
        label="🎲 Color"
        :isActive="circleSample.hasRandomColorBg"
        :onClick="() => changeCircleSample('hasRandomColorBg')"
      />
      <MKToggle
        label="🎲 Radius"
        :isActive="circleSample.hasRandomRadius"
        :onClick="() => changeCircleSample('hasRandomRadius')"
      />
    </template>
  </MKPanelSection>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import MKButton from '/src/components/ui/MKButton.vue';
import MKToggle from '/src/components/ui/MKToggle.vue';
import MKPanelSection from '/src/components/ui/MKPanelSection.vue';
import { getContext } from '/src/utils/context/getContext';
import Circle from '/src/utils/Circle';

export default defineComponent({
  name: 'MKCircleSection',
  components: { MKButton, MKToggle, MKPanelSection },

  setup() {
    const circleSample = reactive({
      hasTransparent: false,
      hasRandomColorBg: true,
      hasRandomRadius: true,
    });

    const createCircle = () => {
      const ctx = getContext();
      const circle = Circle(ctx);

      circle.createRandom(circleSample);
      circle.move();
    };

    const changeCircleSample = (property: keyof typeof circleSample) => {
      circleSample[property] = !circleSample[property];
    };

    return {
      createCircle,
      circleSample,
      changeCircleSample,
    };
  },
});
</script>
