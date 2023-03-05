<template>
  <div class="mk-input-wrapper">
    <input
      class="mk-input"
      :type="type"
      :value="modelValue"
      @input="updateValue"
    />
    <div>{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineEmits } from 'vue';

export default defineComponent({
  name: 'MKInput',
  props: {
    label: String,
    type: String,
    modelValue: String,
  },

  setup(props, context) {
    const updateValue = (event) => {
      context.emit('update:modelValue', event.target.value);
    };

    return { updateValue };
  },
});
</script>

<style scoped>
.mk-input-wrapper {
  --bgColor: var(--black);
  --textColor: var(--white);
  --paddingY: 4px;
  --paddingX: 10px;

  background: var(--bgColor);
  color: var(--textColor);
  border-radius: var(--borderRadius);
  font-weight: bold;
  padding: var(--paddingY) var(--paddingX);
  display: flex;
  gap: var(--gap);
  height: var(--uiElementHeight);
  font-size: var(--uiElementFontSize);
}

.mk-input {
  background: none;
  border: 0;
  color: inherit;
  font-weight: inherit;
  width: 60px;
}
</style>
